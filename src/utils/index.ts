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


/**
 * 深拷贝
 * 
 * @param data 
 * @param map 
 * @returns 
 */
export function deepClone(data: { [key: string]: any } = {}, map: Map<{ [key: string]: any }, any> = new Map) {
  if (typeof data !== 'object') return data;
  if (map.get(data)) return map.get(data);

  let result: { [key: string]: any } = {};
  if (data instanceof Array || Object.prototype.toString.call(data) === '[object Array]')
    result = [];

  map.set(data, result);
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key))
      result[key] = deepClone(data[key], map);
  }
  return result;
}


export function loadFile(path: string) {
  const xhr = new XMLHttpRequest();
  const okStatus = document.location.protocol === "file:" ? 0 : 200;
  xhr.open('GET', path, false);
  xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
  xhr.send(null);
  return xhr.status === okStatus ? xhr.responseText : null;
}

/**
 * 防抖函数
 * 
 * @param func 待处理函数
 * @param wait 时间间隔
 * @param immediate 是否立即执行
 * @returns 
 */
export function debounce<T extends Function>(func: T, wait: number, immediate: boolean) {
  let result;
  let timeout = null;

  return function () {
    const context = this;
    const args = arguments;

    if (timeout) clearTimeout(timeout);
    if (!timeout && immediate)
      result = func.apply(context, args);

    timeout = setTimeout(() => {
      result = func.apply(context, args);
    }, wait);

    return result as T;
  };
}

/**
 * 节流函数
 * 
 * @param func 待处理函数
 * @param wait 时间间隔
 * @returns 
 */
export function throttle<T extends Function>(func: T, wait: number) {
  let result;
  let timeout = null;
  let start = new Date().getTime();

  return function () {
    const context = this;
    const args = arguments;
    const end = new Date().getTime();

    clearTimeout(timeout);
    if (end - start > wait) {
      result = func.apply(context, args);
      start = end;
    } else {
      timeout = setTimeout(() => {
        timeout = null;
        result = func.apply(context, args);
      }, wait);
    }
    return result as T;
  };
}


export class Ajax {
  private m_Ajax;

  constructor() {
    if (!this.m_Ajax) this.m_Ajax = new XMLHttpRequest();
    return this;
  }

  /**
   * GET请求
   * 
   * @param url 
   * @param data 
   * @returns 
   */
  public get(url, data) {
    return new Promise((resolve, reject) => {
      let dataStr = '';
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      });
      url = url + '?' + dataStr;
      this.m_Ajax.open('GET', url, true);
      this.m_Ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      this.m_Ajax.send();
      this.onChange(resolve, reject);
    });
  }

  /**
   * POST请求
   * 
   * @param url 
   * @param data 
   * @returns 
   */
  public post(url, data) {
    return new Promise((resolve, reject) => {
      this.m_Ajax.open('POST', url, true);
      this.m_Ajax.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
      this.m_Ajax.send(data);
      this.onChange(resolve, reject);
    });
  }

  /**
   * 状态监听
   * 
   * @param resolve 
   * @param reject 
   */
  public onChange(resolve, reject) {
    this.m_Ajax.onreadystatechange = function () {
      if (this.m_Ajax.readyState === 4) {
        if (this.m_Ajax.status === 200) {
          console.log(this.m_Ajax.responseText);
          resolve(this.m_Ajax.responseText);
        } else {
          reject("HTTP error", this.m_Ajax.status, this.m_Ajax.statusText)
          console.log("HTTP error", this.m_Ajax.status, this.m_Ajax.statusText);
        }
      };
    };
  }
};


/**
 * 表单检验并定位第一个验证错误
 * 
 * @param formName 
 */
export function formValidate(formName) {
  this.$refs[formName].validate(valid => {
    if (valid) {
      console.log(valid);
      return true;
    } else {
      this.$nextTick(() => {
        let isError = document.getElementsByClassName("is-error");
        isError[0].querySelector("input").focus();
      });
      return false;
    }
  });
}



export function heightToTop(ele) {
  //ele为指定跳转到该位置的DOM节点
  let root = document.body
  let height = 0
  do {
    height += ele.offsetTop
    ele = ele.offsetParent
  } while (ele !== root)
  return height
}
// 定位element的Erro
export function eleScrollErro() {
  this.$nextTick(() => {
    let isError = document.getElementsByClassName('is-error')
    // console.log(isError)
    // alert(isError[0].offsetTop)
    document
      .querySelector('.main-container')
      .scrollTo({ behavior: 'smooth', top: this.heightToTop(isError[0]) - 60 })
  }, 500)
}
// 定位非element的Erro
export function scrollErro(sectionWp) {
  document
    .querySelector('.main-container')
    .scrollTo({ behavior: 'smooth', top: this.$refs[sectionWp].offsetTop })
}
