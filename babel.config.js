// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
let presets = [
  [
    'taro',
    {
      framework: 'react',
      ts: true,
      reactJsxRuntime: 'classic',
    },
  ],
]

let plugins = []

module.exports = {
  presets,
  plugins,
}
