module.export={
	configureWebpack:{
		resolve:{
			alias:{
//				'@':'src'    //某人已经有了
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'router':'@/router',
				'network':'@/network',
				'store':'@/store',
				'views':'@/views'
			}
		}
	}
}
