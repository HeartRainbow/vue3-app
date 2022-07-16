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
//             const fullPath = path.join(dir, item);
//             const stat = fs.statSync(fullPath);
//             if (stat.isDirectory()) {
//                 this.readFileList(path.join(dir, item), filesList);
//             } else {
//                 filesList.push(fullPath);
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

function readFileList(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    console.log(files);
    files.forEach((item, _) => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            readFileList(path.join(dir, item), filesList);
        } else {
            filesList.push(fullPath);
        }
    });
    return filesList;
}
console.log(readFileList(path.resolve('src/views')));
