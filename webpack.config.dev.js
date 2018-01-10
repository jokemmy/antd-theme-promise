
// eslint-disable-next-line
import { paths, getEntry, getOutput, getSVGRules, loaders, plugins, combine } from 'kiwiai';
import theme from './antd.config.js';

const { styleLoader, cssLoader, postcssLoader, lessLoader, urlLoader,
  babelLoader, jsonLoader, getDefaultLoaderOptions } = loaders;

const output = {
  publicPath: '/'
};

const staticFileName = 'static/[name].$[hash:6].[ext]';
const cssModules = {
  modules: true,
  localIdentName: '[local]_[sha512:hash:base64:5]'
};
const lessOptions = {
  modifyVars: theme
};
const svgRules = Object.values( getSVGRules({
  fileName: staticFileName,
  svgSpriteDirs: paths.resolveApp( './src/assets/svg-icon' )
}));

const babelOptions = getDefaultLoaderOptions( 'babel' );
babelOptions.plugins.push( 'transform-class-properties' );
// babelOptions.plugins.push([ 'transform-es2015-classes', { loose: true }]);
// babelOptions.plugins.push( 'transform-proto-to-assign' );
babelOptions.plugins.push( 'transform-decorators-legacy' );
babelOptions.plugins.push( 'transform-runtime' );
babelOptions.plugins.push( 'dva-hmr' );
babelOptions.plugins.push([ 'import', { libraryName: 'antd', style: true }]);

export default {
  devtool: 'cheap-module-source-map',
  entry: getEntry([ './src/vendor.js', './src/index.js' ]),
  output: getOutput( output ),
  resolve: {
    modules: [
      paths.ownNodeModules,
      paths.appNodeModules
    ],
    extensions: [
      '.js', '.json'
    ]
  },
  module: {
    noParse: [/moment.js/],
    rules: [{
      exclude: [
        /\.html$/,
        /\.js$/,
        /\.(css|less)$/,
        /\.json$/,
        /\.svg$/
      ],
      use: [urlLoader({ name: staticFileName })]
    }, {
      test: /\.js$/,
      include: paths.appSrc,
      use: [babelLoader( babelOptions )]
    }, {
      test: /\.css$/,
      include: paths.appSrc,
      use: [
        styleLoader(),
        cssLoader( cssModules ),
        postcssLoader()
      ]
    }, {
      test: /\.less$/,
      include: paths.appSrc,
      use: [
        styleLoader(),
        cssLoader( cssModules ),
        postcssLoader(),
        lessLoader( lessOptions )
      ]
    }, {
      test: /\.css$/,
      include: paths.appNodeModules,
      use: [
        styleLoader(),
        cssLoader(),
        postcssLoader()
      ]
    }, {
      test: /\.less$/,
      include: paths.appNodeModules,
      use: [
        styleLoader(),
        cssLoader(),
        postcssLoader(),
        lessLoader( lessOptions )
      ]
    }, {
      test: /\.json$/,
      use: [jsonLoader()]
    }].concat( svgRules )
  },
  plugins: combine(
    plugins.Define(),
    plugins.HotModuleReplacement(),
    plugins.CaseSensitivePaths(),
    plugins.WatchMissingNodeModules(),
    plugins.SystemBellWebpack(),
    plugins.CopyPublic(),
    plugins.CommonsChunk(),
    plugins.DllReferencePlugin(),
    plugins.HtmlWebpack({
      favicon: undefined
    })
  ),
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
