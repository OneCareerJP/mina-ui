const path = require('path');
const rootPath = path.resolve(__dirname, '../src/');

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath;
  config.resolve.alias['~'] = rootPath;
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [path.resolve(__dirname, '../src/assets/scss/**.scss')]
        }
      }
    ]
  });
  return config;
};
