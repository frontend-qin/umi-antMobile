import { defineConfig } from 'umi';
const pxtorem = require('postcss-pxtorem');

module.exports = defineConfig({
  routes: [
    {
      path: '/',
      component: 'layout/index.tsx',
      routes: [
        { path: '/home', component: 'views/home/index.tsx' },
        { path: '/mine', component: 'views/mine/index.tsx' },
      ],
    },
  ],
  alias: {
    '@': 'src',
  },
  dva: {},
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 37.5,
      propWhiteList: [],
      exclude: '/node_modules/',
    }),
  ],
});
