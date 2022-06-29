import config from 'js-yaml-loader!../../../config.yaml';

import { ConfigLoaderBase } from '../../contract';
import { enum_ } from '../../model';

/**
 * js-yaml配置加载器
 */
export class JsYamlConfigLoader extends ConfigLoaderBase {

  public async load(mode: enum_.Env) {
    return config['Env'][mode];
  }
}