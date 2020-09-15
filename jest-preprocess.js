const babelOptions = {
  presets: ['babel-preset-gatsby'],
  plugins: ['babel-plugin-rewire'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
