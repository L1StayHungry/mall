module.exports = {
  // 表示要配置webpack
  configureWebpack:{
    resolve :{
      alias:{
        'assets': 'src/assets',
        'common': 'src/common',
        'components': 'src/components',
        'store': 'src/store',
        'views': 'src/views',
        'network': 'src/network',
      }
    }
  }
}                                           