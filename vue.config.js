//module.export={
//	configureWebpack:{
//		resolve:{
//			alias:{
////				   //某人已经有了
//				'assets':"@/assets",
//				'common':"@/common",
//				'components':"@/components",
//				'router':"@/router",
//				'network':"@/network",
//				'store':"@/store",
//				'views':"@/views"
//			}
//		}
//	}
//}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
      	'@':'src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}



