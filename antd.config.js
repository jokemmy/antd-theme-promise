// available paremters: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

import path from 'path';

export default {
    // antd 字体本地化
  '@icon-url': `'${path.relative( './~/antd/lib/style/*', './src/assets/fonts/iconfont' )}'`,

  // base
  '@primary-color': '#5b6ee0',
  '@body-background': '#f2f2f2',
  '@text-color': 'fade(#000, 75%)',
  '@border-color-base': '#cccccc',
  '@border-color-split': '#dfdfdf',
  '@border-radius-base': '2px',

  // layout
  '@layout-body-background': '#eeeeee',
  '@layout-header-background': '#364760',
  '@layout-sider-background': '#6186a6',

  // input
  '@input-placeholder-color': '#bababa',
  '@input-hover-border-color': '#2ebaee',

  // menu
  //'@menu-dark-bg': 'transparent'
};
