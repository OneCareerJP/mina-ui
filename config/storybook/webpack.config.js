const path = require('path');
const rootPath = path.resolve(__dirname, '../../src/');

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath;
  config.resolve.alias['~'] = rootPath;
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'sass-loader',
        options: {
          prependData: '@import "./src/assets/scss/app.scss";'
        }
      }
    ]
  });
  return config;
};
