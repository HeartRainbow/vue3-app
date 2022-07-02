import yamlConfig from 'js-yaml-loader!../../../config.yaml';

import { ConfigLoaderBase } from '../../contract';

/**
 * js-yaml配置加载器
 */
export class JsYamlConfigLoader extends ConfigLoaderBase {

  /**
   * yaml文档
   */
  private m_Doc: any;

  /**
   * 加载配置
   * 
   * @param ctor 构造函数
   */
  public async load<T>(ctor: new () => T) {
    if (!this.m_Doc) {
      this.m_Doc = yamlConfig[ctor.name];
    }
    return this.m_Doc[ctor.name] as T;
  }
}