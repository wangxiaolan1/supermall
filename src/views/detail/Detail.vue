<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav" @itemClick="titleClick" ref="nav"></detail-nav-bar>
		<!--//当传入属性的时候要区分大小写  但是当发送事件的时候不区分-->
		<scroll class="scrollcontent" ref="scroll" @scroll="contentScroll" :probe-type="3">
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-base-info :goods="goods" ></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-info>
			<detail-params :shopparams="shopparams" ref="shopparams"></detail-params>
			<detail-rate :rate="rate" ref="commen"></detail-rate>
			<goods-list :goods="recommends" ref="recommends"></goods-list>
			
		</scroll>
		<back-top @click.native="back" v-show="isShowBackTop"></back-top>
		<detail-tab-bar @addToCart="addToCart"></detail-tab-bar>
	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar'
	import {getDetail,Goods,Shop,Shopparams,getRecommend} from '../../network/detail.js'
	import DetailSwiper from './childComps/DetailSwiper'
	import DetailBaseInfo from './childComps/DetailBaseInfo'
	import DetailShopInfo from './childComps/DetailShopInfo'
	import Scroll from '../../components/common/scroll/Scroll'
	import DetailInfo from './childComps/DetailInfo'
	import DetailParams from './childComps/DetailParams'
	import DetailRate from './childComps/DetailRate'
	import DetailTabBar from '../../components/content/DetailTabBar'
	import GoodsList from '../../components/content/GoodsList'
	import BackTop from '../../components/content/BackTop'
	
	import {debounce} from '../../common/utils.js'
	export default{
		name:'Detail',
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			DetailInfo,
			DetailParams,
			DetailRate,
			DetailTabBar,
			GoodsList,
			BackTop 
	
		},
		data(){
			return{
				iid:null,
				topImages:[],
				goods:{},
				shop:{},
				detailInfo:{},
				shopparams:{},
				rate:{},
				getRecommend:{},
				recommends:[],
				themeTops:null,
//				getThemeTopYs:null
				currentIndex:null,
				isShowBackTop:false
		}
		},
		
		created(){
			console.log(this.$route.params)
			//一：获取iid
			this.iid=this.$route.params.iid
			//二：根据id获取详情页数据
			getDetail(this.iid).then(res=>{
				console.log(res)
				var data=res.result
				this.topImages=data.itemInfo.topImages
				console.log(this.topImages)
				
				//2、获取商品数据
				this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				console.log(this.goods)
				//3、获取商家数据
				this.shop=new Shop(data.shopInfo)
				console.log(this.shop)
				//4、获取商品详细信息
				this.detailInfo=data.detailInfo
				console.log(this.detailInfo)
				//5、获取商品尺寸信息
				this.shopparams=new Shopparams(data.itemParams.info, data.itemParams.rule)
				console.log(this.shopparams)
				//6、获取评论信息
				if(data.rate.cRate!==0){
					this.rate=data.rate.list[0]
				}
				console.log(this.rate)
				
//				this.$nextTick(()=>{   //页面渲染完之后才会执行这个函数
//					this.themeTops=[];
//					this.themeTops.push(0)
//					this.themeTops.push(this.$refs.shopparams.$el.offsetTop)
//					this.themeTops.push(this.$refs.commen.$el.offsetTop)
//					this.themeTops.push(this.$refs.recommends.$el.offsetTop)
//					console.log(this.themeTops)
//				})
				
			})
			
			//三： 请求推荐数据
			getRecommend().then(res=>{
				console.log(res)
				this.recommends=res.data.list
			})
			
		this.themeTops=debounce(()=>{
					this.themeTops=[];
					this.themeTops.push(0)
					this.themeTops.push(this.$refs.shopparams.$el.offsetTop)
					this.themeTops.push(this.$refs.commen.$el.offsetTop)
					this.themeTops.push(this.$refs.recommends.$el.offsetTop)
//					console.log(11111111111)
			},1000)
			
		},
		mounted(){
			
		},
		methods:{
			imageLoad(){
					this.$refs.scroll.scroll.refresh() 

                     //2、加载的次数太多
//					this.themeTops=[]
//					this.themeTops.push(0);
//					this.themeTops.push(this.$refs.shopparams.$el.offsetTop);
//					this.themeTops.push(this.$refs.commen.$el.offsetTop);
//					this.themeTops.push(this.$refs.recommends.$el.offsetTop);
//					console.log(22222222222222)
					//进行防抖操作
					this.themeTops()
					
			},
			titleClick(index) {
//      		console.log(this.themeTops[index]);
				console.log(index)
        		this.$refs.scroll.scroll.scrollTo(0, -this.themeTops[index], 100)
      		},
      		contentScroll(position){
//    			console.log(position)
      			const positionY=-position.y;
      			this.isShowBackTop=positionY>1000
      			let length=this.themeTops.length
      			for(let i=0;i<length;i++){
      				if(this.currentIndex!==i&&((i<length-1&&positionY>=this.themeTops[i]&&positionY<this.themeTops[i+1])||(i===length-1&&positionY>=this.themeTops[i]))){
      					this.currentIndex=i;
      					console.log(this.currentIndex);
      					this.$refs.nav.currentIndex=this.currentIndex
      				}
      			}
      		},
      		back(){
      			this.$refs.scroll.scroll.scrollTo(0,0,500)
      		},
      		addToCart(){
     			const product={}
     			product.image=this.topImages[0];
     			product.title=this.goods.title;
     			product.desc=this.goods.desc;
     			product.price=this.goods.realPrice;
     			product.iid=this.iid;
     			product.checked=true;
     			this.$store.dispatch('addCart',product).then(res=>{
//   				console.log(res)
					this.$toast.show(res,1500)
//					console.log(this.$toast)
     			})
      		}
		}
	}
</script>

<style>
	#detail{
		position: relative;
		z-index: 9;
		background-color:#fff;
		height:100vh;
	}
	.detail-nav{
		
		z-index: 9;
	}
	.scrollcontent{
		position:absolute;
		top:44px;
		left:0;
		right:0;
		bottom:44px;
		overflow: hidden;
	}
</style>