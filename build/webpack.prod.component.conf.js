'use strict';
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV === 'testing' ? require('../config/test.env') : require('../config/prod.env');

const isMinify = process.argv.includes('-p');
const pkg = require('../package.json');

// 整理入口
const components = require('../components.json')
let entrys = {};
Object.keys(components).forEach(item => {
  entrys[item] = components[item]
  entrys[item].push(`${components[item]}/style/${item}.scss`)
})
const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      // sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  // devtool: config.build.productionSourceMap ? config.build.devtool : false,
  entry: entrys,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: isMinify ? `[name].min.js` : `[name].js`,
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'seven-view'
  },
  externals: [
    {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    }
  ],
  optimization: {
    minimizer: []
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new VueLoaderPlugin(),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: isMinify ? `/theme/[name].min.css` : `/theme/[name].css`
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.BannerPlugin(`
    ${pkg.name}.(${pkg.homepage})
    license: ${pkg.license}
    version: v${pkg.version}
   `),
  ]
});

if (isMinify) {
  webpackConfig.optimization.minimizer.push(
    new OptimizeCSSAssetsPlugin({}),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: config.build.productionSourceMap,
      uglifyOptions: {
        warnings: false
      }
    })
  );
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
