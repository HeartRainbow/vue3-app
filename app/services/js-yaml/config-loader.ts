import prodConfig from 'js-yaml-loader!../../../config.yaml';
import devConfig from 'js-yaml-loader!../../../config-it.yaml';

import { ConfigLoaderBase } from '../../contract';
import { enum_ } from '../../model';

/**
 * js-yaml配置加载器
 */
export class JsYamlConfigLoader extends ConfigLoaderBase {
  
  public async load(mode: enum_.Env) {
    if (mode == enum_.Env.dev)
      return devConfig;
    else
      return prodConfig;
  }
}