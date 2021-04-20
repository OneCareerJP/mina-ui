const path = require('path');
const rootPath = path.resolve(__dirname, './src/');

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', rootPath);
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [path.resolve(rootPath, './assets/scss/App.scss')]
        })
        .end();
    });
  },
  css: {
    extract: true
  }
};
