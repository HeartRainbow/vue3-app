import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 升级package.json版本号

const branch = execSync('git symbolic-ref --short -q HEAD', { 'encoding': 'utf8' });
console.log(`当前分支：${branch}`);

const packageJsonStr = fs.readFileSync(path.join('./', 'package.json')).toString();
const packageLockJsonStr = fs.readFileSync(path.join('./', 'package-lock.json')).toString();

try {
  if (branch.trim() === 'master') {
    const packageJson = JSON.parse(packageJsonStr);
    const packageLockJson = JSON.parse(packageLockJsonStr);

    const oldPackageJson = Object.assign({}, packageJson);
    // 升级版本号
    const arr = packageJson.version.split('.');
    if (arr[2] < 99) {
      arr[2] = +arr[2] + 1;
    } else if (arr[1] < 99) {
      arr[1] = +arr[1] + 1;
      arr[2] = 0;
    } else {
      arr[0] = +arr[0] + 1;
      arr[1] = 0;
      arr[2] = 0;
    }
    const newVersion = arr.join('.');
    packageJson.version = newVersion;
    packageLockJson.version = newVersion;
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, '\t'));
    fs.writeFileSync('./package-lock.json', JSON.stringify(packageLockJson, null, '\t'));


    console.log(`版本变更：${oldPackageJson.version} ——> ${packageJson.version}`);
    // add new package.json
    execSync(`git add package.json package-lock.json`);
  };

} catch (e) {
  console.error('处理package.json失败，请重试', e.message);
  process.exit(1);
}