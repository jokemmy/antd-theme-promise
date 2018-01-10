
import { paths, loaders, plugins, getSVGRules } from 'kiwiai'; // eslint-disable-line

const appBuild = paths.dllNodeModule;
const pkg = require( paths.appPackageJson ); // eslint-disable-line

// fix Can't resolve 'rc-util' 'antd' error
delete pkg.dependencies.antd;
delete pkg.dependencies['rc-util'];

const dependencyNames = Object.keys( pkg.dependencies );

export default {
  entry: {
    dlls: dependencyNames
  },
  output: {
    path: appBuild,
    filename: '[name].js',
    library: '[name]'
  },
  plugins: plugins.DllPlugin(),
  resolve: {
    modules: [
      paths.ownNodeModules,
      paths.appNodeModules
    ]
  }
};
