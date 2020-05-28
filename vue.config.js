module.exports = {
  // 表示要配置webpack
  configureWebpack:{
    resolve :{
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'store': '@/store',
        'views': '@/views',
        'network': '@/network',
      }
    }
  }
}                                           