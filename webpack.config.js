module.exports = {
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        include: path.resolve(process.cwd(), './'),
        loader: 'js-yaml-loader'
      },
    ],
  },
};