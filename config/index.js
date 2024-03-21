const pkg = require('../package.json')

const config = {
  projectName: pkg.name,
  date: '2021-10-27',
  designWidth: 720,
  deviceRatio: {
    640: 2.34 / 2,
    720: 2 / 1.92,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist-${process.env.TARO_ENV}`,
  plugins: [
    '@tarojs/plugin-platform-harmony-ets',
  ],
  env: {
    CODE_ENV: `"${process.env.CODE_ENV}"`,
  },
  defineConstants: {},
  compiler: {
    type: 'webpack5',
  },
  cache: {
    enable: true,
  },
  // fix safari 10 特定语法问题 [terser](https://github.com/terser/terser#minify-options)
  terser: {
    enable: true,
    config: {
      safari10: true,
    },
  },
  isWatch: process.env.NODE_ENV === 'development',
  framework: 'react',
  reactJsxRuntime: 'classic',
  alias: {
  },
  // harmony 相关配置
  harmony: {
    // 将编译方式设置为使用 Vite 编译
    compiler: 'vite',
    // 【必填】鸿蒙主应用的绝对路径，例如：
    projectPath: '/Users/lester/DevEcoStudioProjects/MyApplication',
    // 【可选】HAP 的名称，默认为 'entry'
    hapName: 'entry',
    // 【可选】modules 的入口名称，默认为 'default'
    name: 'default',
    ohpm: '~/ohpm/ohpm-1.2.5/bin/ohpm'
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
