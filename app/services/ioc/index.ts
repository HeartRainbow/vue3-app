import 'reflect-metadata';
import Container from "typedi";

import { ConfigLoaderBase } from "../../contract";
import { JsYamlConfigLoader } from "../js-yaml";

export async function initIoC() {
  Container.set(ConfigLoaderBase, new JsYamlConfigLoader());
}
