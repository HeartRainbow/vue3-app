import fs from 'fs';
import path from 'path';
// import { exec } from 'child_process';


// export class RouterGenerater {
//     private pattern = /@route\([\s\S]*?\)/g;
//     private bracketsPattern = /\{[^]*\}/g;
//     constructor(
//         entry: string,
//         output?: string
//     ){}

//     public readFileList(dir, filesList = []) {
//         const files = fs.readdirSync(dir);
//         console.log(files);
//         files.forEach((item, index) => {
//             const filePath = path.join(dir, item);
//             const stat = fs.statSync(filePath);
//             if (stat.isDirectory()) {
//                 this.readFileList(path.join(dir, item), filesList);
//             } else {
//                 filesList.push(filePath);
//             }
//         });
//         return filesList;
//     }

//     // private parse() {}

//     public generate() {}
// }

// var filesList = [];
// readFileList(__dirname,filesList);
// console.log(filesList);
let id = 1;
function readFileList(dir, filesList = [], pid = 0) {
    const files = fs.readdirSync(dir);
    console.log(files);
    files.forEach((item, _) => {
        const filePath = path.join(dir, item);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            // pid = id;
            readFileList(path.join(dir, item), filesList, pid);
        } else {
            if (item === 'index.vue') {
                pid = id;
            }
            let content = fs.readFileSync(path.resolve(filePath), 'utf8');
            const matchStr = content.match(/@route\([\s\S]*?\)/g);
            if(!matchStr) return;
            const route = JSON.parse(matchStr[0].match(/\{[^]*\}/g)[0]);
            // console.log(JSON.parse(matchStr[0].match(/\{[^]*\}/g)[0]));
            route.id = id;
            route.pid = pid;
            route.component = `() => import(/* webpackChunkName: "${item.split('.')[0]}" */ '@/${filePath.substr(filePath.indexOf("views"),filePath.length)}')`
            filesList.push(route);
            id++;
        }
    });
    return filesList;
}
console.log(readFileList(path.resolve('src/views')));
