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
  return promise
}


export function deepClone(obj: { [key: string]: any } = {}, map: Map<{ [key: string]: any }, any> = new Map) {
  if (typeof obj !== 'object') return obj;
  if (map.get(obj)) return map.get(obj);

  let result: { [key: string]: any } = {};
  if (obj instanceof Array || Object.prototype.toString.call(obj) === '[object Array]')
    result = [];

  map.set(obj, result);
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key))
      result[key] = deepClone(obj[key], map);
  }

  return result;
}


export function loadFile(path: string) { // name为文件所在位置
  let xhr = new XMLHttpRequest(),
    okStatus = document.location.protocol === "file:" ? 0 : 200;
  xhr.open('GET', path, false);
  xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
  xhr.send(null);
  return xhr.status === okStatus ? xhr.responseText : null;
}