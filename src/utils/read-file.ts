/**
 * 读取文件
 * 
 * @param file 
 * @returns 
 */
export async function readFile(file: File) {
    const reader = new FileReader();
    const promise = new Promise((resolve, reject) => {
        reader.onload = function () {
            resolve(reader.result)
        };
        reader.onerror = function (e) {
            reader.abort()
            reject(e)
        };
    })
    reader.readAsText(file, 'UTF-8');
    return promise;
}