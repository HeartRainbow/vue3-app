/**
 * 配置加载基类
 */
export abstract class ConfigLoaderBase {
    /**
     * 加载
     * 
     * @param ctor 构造函数
     */
    public abstract load(mode: string): Promise<any>;
}