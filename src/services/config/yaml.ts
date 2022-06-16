import proConfig from 'js-yaml-loader!../../../config.yaml';
import devConfig from 'js-yaml-loader!../../../config-it.yaml';

import fs from 'fs';

export default devConfig;
fs.readFile('../../../config.yaml', 'utf-8', function (err, data) {
  if (err) {
    throw err
  }
  console.log('读取成功！！！');
})

console.log(process.env);


export class JsYamlConfigLoader {
  constructor(env: string) { }

  public async load() {

  }
}