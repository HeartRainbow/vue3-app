// 压缩图片
if (process.env.NODE_ENV === "production") {
  config.module
    .rule('images')
    .exclude.add(resolve('src/assets/icons')) // 排除icons目录，这些图标已用 svg-sprite-loader 处理，打包成 svg-sprite 了
    .end()
    .use('url-loader')
    .tap(options => ({
      limit: 10240, // 稍微改大了点
      fallback: {
        loader: require.resolve('file-loader'),
        options: {
          // 在这里修改file-loader的配置
          // 直接把outputPath的目录加上，虽然语义没分开清晰但比较简洁
          name: 'static/img/[name].[hash:8].[ext]'
          // 从生成的资源覆写 filename 或 chunkFilename 时，`assetsDir` 会被忽略。
          // 因此别忘了在前面加上静态资源目录，即assetsDir指定的目录，不然会直接在dist文件夹下
          // outputPath: 'static/img' 
        }
      }
    }))
    .end()
    .use('image-webpack-loader')
    .loader('image-webpack-loader')
    .options({
      mozjpeg: { progressive: true, quality: 50 }, // 压缩JPEG图像
      optipng: { enabled: true }, // 压缩PNG图像
      pngquant: { quality: [0.5, 0.65], speed: 4 }, // 压缩PNG图像
      gifsicle: { interlaced: false } // 压缩GIF图像
    })
    .end()
    .enforce('post'); // 表示先执行配置在下面那个loader，即image-webpack-loader
}