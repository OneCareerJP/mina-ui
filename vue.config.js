module.exports = {
  css: {
    extract: true,
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/prepends.scss";'
      }
    }
  }
};
