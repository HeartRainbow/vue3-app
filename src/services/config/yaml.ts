import proConfig from 'js-yaml-loader!../../../config.yaml';
import devConfig from 'js-yaml-loader!../../../config-it.yaml';

import fs from 'fs';

export default devConfig;
console.log(fs.readFileSync('../../../config.yaml', 'utf-8'));

console.log(process.env);


export class JsYamlConfigLoader {
  constructor(env: string) { }

  public async load() {

  }
}