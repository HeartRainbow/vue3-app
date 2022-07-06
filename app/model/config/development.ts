
interface IExternals {
    vue?: string
    vuex?: string
    'vue-router'?: string
    axios?: string
    moment?: string
    echarts?: string
}

interface ICdn {
    externals?: IExternals;
    js?: string[]
}


export class Development {
    /**
     * 请求地址
     */
    baseUrl: string;

    /**
     * 端口
     */
    port: number;

    /**
     * 项目名称
     */
    name: string;

    /**
     * 全局加载开关
     */
    loading: boolean;

    /**
     * 部署容器端口
     */
    containerPort: number

    /**
     * CDN配置
     */
     cdn?: ICdn
}
