const fs = require("fs");
const path = require("path");
const autoprefixer = require("autoprefixer");
const jsYaml = require("js-yaml");
const px2vw = require("postcss-px-to-viewport");

// 读取config.yaml配置文件
const doc = jsYaml.load(fs.readFileSync('./config.yaml', 'utf8'));
const mode = process.env.NODE_ENV.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());

console.log(doc[mode]);


// 引入gzip压缩插件
const CompressionWebpackPlugin = require("compression-webpack-plugin");

// 代码打包之后取出console.log压缩代码
const TerserPlugin = require("terser-webpack-plugin");

// 图形化打包详情
const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

function resolve(dir) {
    return path.join(__dirname, dir);
}


module.exports = {
    publicPath: "./",
    outputDir: "dist",
    devServer: {
        port: "30301",
        host: "localhost",
        open: true, //配置自动启动浏览器
        // before: (app, server) => {
        //     app.get(/.*.(js)$/, (req, res, next) => {
        //         req.url = req.url + ".gz";
        //         res.set("Content-Encoding", "gzip");
        //         next();
        //     });
        // },
        proxy: {
            "/api": {
                target: "http://localhost:8080/",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            if (doc[mode].cdn) {
                args[0].cdn = doc[mode].cdn;
            }
            args[0].title = "vue3-app";
            args[0].icon = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_29-512.png";
            return args;
        });

        // 定义文件夹的路径
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@app", resolve("app"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("router", resolve("src/router"))
            .set("store", resolve("src/store"))
            .set("views", resolve("src/views"));

        // 移除prefetch插件，避免加载多余的资源
        config.plugins.delete("prefetch");

        // 压缩图片
        const imagesRule = config.module.rule("images");
        imagesRule
            .exclude.add(resolve('src/assets/icons'))
            .end()
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
            .end();
    },
    configureWebpack: config => {

        // 忽略打包配置
        // config.externals = doc[mode]?.cdn?.externals;

        // 生产环境配置
        if (process.env.NODE_ENV === "production") {
            // 代码压缩去除console.log
            config.plugins.push(
                new TerserPlugin({
                    terserOptions: {
                        ecma: undefined,
                        parse: {},
                        compress: {
                            drop_console: true,
                            drop_debugger: false,
                            pure_funcs: ["console.log"] // 移除console
                        }
                    }
                })
            );
        }

        // 开启gzip压缩
        config.plugins.push(
            new CompressionWebpackPlugin({
                filename: info => {
                    return `${info.path}.gz${info.query}`;
                },
                algorithm: "gzip",
                threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                test: new RegExp("\\.(" + ["js"].join("|") + ")$"),
                minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                deleteOriginalAssets: false // 删除原文件
            })
        );

        // 展示打包图形化信息
        // config.plugins.push(new BundleAnalyzer());

        // 公共代码抽离
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: "all",
                        test: /node_modules/,
                        name: "vendor",
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 100
                    }
                }
            }
        };
    },
    css: {
        loaderOptions: {
            sass: {
                // prependData: '@import "@/assets/css/global.scss";'
            },
            postcss: {
                plugins: [
                    // require('tailwindcss'),
                    autoprefixer(),
                    // px2vw({
                    //     unitToConvert: "px", // 需要转换的单位，默认为"px"
                    //     viewportWidth: 1920, // 视窗的宽度，对应pc设计稿的宽度，一般是1920
                    //     // viewportHeight: 1080,// 视窗的高度，对应的是我们设计稿的高度
                    //     unitPrecision: 3, // 单位转换后保留的精度
                    //     propList: [
                    //         // 能转化为vw的属性列表
                    //         "*",
                    //     ],
                    //     viewportUnit: "vw", // 希望使用的视口单位
                    //     fontViewportUnit: "vw", // 字体使用的视口单位
                    //     selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。cretae
                    //     minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
                    //     mediaQuery: false, // 媒体查询里的单位是否需要转换单位
                    //     replace: true, // 是否直接更换属性值，而不添加备用属性
                    //     exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                    // }),
                ]
            }
        }
    },
    productionSourceMap: false,
    transpileDependencies: ['vuex-module-decorators']
};
