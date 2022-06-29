import 'reflect-metadata';

import { IRequestConfig } from '../../contract';
// import { enum_ } from '../../model';


/**
 * Controller装饰器
 * 
 * @param path 路由
 * @returns 
 */
export function Controller(path: string, _config?: IRequestConfig): ClassDecorator {
  return (target: any) => {
    Reflect.defineMetadata('path', path, target);
  }
}