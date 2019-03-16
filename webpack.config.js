const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'lib.js',
    library: 'parsecWebClient',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: require.resolve('@open-wc/webpack-import-meta-loader') }
        ]
      }
    ]
  },
  target: 'web',
  node: { fs: 'empty' }
};
