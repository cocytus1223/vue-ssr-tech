module.exports = (isDev) => {
  return {
    // 清除末尾的空格
    preserveWhitepace: true,
    // 提取css到单个文件
    extractCSS: !isDev,
    cssModules: {},
    // hotReload: false,  根据环境变量生成
  }
}
