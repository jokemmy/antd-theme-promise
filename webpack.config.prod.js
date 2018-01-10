
// eslint-disable-next-line
import { paths, getEntry, getOutput, getSVGRules, loaders, plugins, combine } from 'kiwiai';
import theme from './antd.config.js';

const { extractTextExtract } = plugins;
const { styleLoader, cssLoader, postcssLoader, lessLoader, urlLoader,
  babelLoader, jsonLoader, getDefaultLoaderOptions } = loaders;

const staticFileName = 'static/[name].$[hash:4].[ext]';
const cssModules = {
  modules: true,
  localIdentName: '[local]_[sha512:hash:base64:5]'
};
const cssOptions = {
  importLoaders: 1
};
const output = {
  publicPath: '/',
  filename: '[name].$[chunkhash:4].js',
  chunkFilename: '[name].$[chunkhash:4].chunk.js'
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
babelOptions.plugins.push([ 'import', { libraryName: 'antd', style: true }]);

export default {
  bail: true,
  entry: getEntry([ './src/vendor.js', './src/index.js' ]),
  output: getOutput( output ),
  resolve: {
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
      use: extractTextExtract({
        fallback: styleLoader(),
        use: [
          cssLoader( cssOptions, cssModules ),
          postcssLoader()
        ]
      })
    }, {
      test: /\.less$/,
      include: paths.appSrc,
      use: extractTextExtract({
        fallback: styleLoader(),
        use: [
          cssLoader( cssOptions, cssModules ),
          postcssLoader(),
          lessLoader( lessOptions )
        ]
      })
    }, {
      test: /\.css$/,
      include: paths.appNodeModules,
      use: extractTextExtract({
        fallback: styleLoader(),
        use: [
          cssLoader( cssOptions ),
          postcssLoader()
        ]
      })
    }, {
      test: /\.less$/,
      include: paths.appNodeModules,
      use: extractTextExtract({
        fallback: styleLoader(),
        use: [
          cssLoader( cssOptions ),
          postcssLoader(),
          lessLoader( lessOptions )
        ]
      })
    }, {
      test: /\.json$/,
      use: [jsonLoader()]
    }].concat( svgRules )
  },
  plugins: combine(
    plugins.Define(),
    plugins.CopyPublic(),
    plugins.ExtractText({
      filename: 'style.$[contenthash:4].css'
    }),
    plugins.CommonsChunk({
      filename: 'vendor.$[chunkhash:4].js'
    }),
    plugins.HtmlWebpack(),
    plugins.UglifyJs(),
    plugins.Visualizer()
  ),
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
