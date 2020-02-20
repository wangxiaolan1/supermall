<template>
	<div id="home">
		<nav-bar><div slot='center' class='hoome-nav'>购物街</div></nav-bar>
		<tab-control :titles="['流行','样式','精选']" 
						@tabClick="tabClick" ref="tabControl1"
						:class="{iffixed:true} " v-show="isTabFixed"></tab-control>
		<scroll class="content" ref="scroll"
			 :probe-type="3"
			 @scroll="contentScroll" 
			 :pull-up-load="true"
			 @pullingUp="pullingUp">
			<home-swiper :banners="banners" @swipperimage='imageLoad'/>
			<home-recommon :recommends="recommends"></home-recommon>
			<feature></feature>
			<tab-control :titles="['流行','样式','精选']" 
						@tabClick="tabClick" ref="tabControl"
						 ></tab-control>
			<goods-list :goods="goods[currentType].list"></goods-list>
			
		</scroll>
		<back-top @click.native="back" v-show="isShowBackTop"></back-top>
	</div>
	
</template>

<script>

	import HomeSwiper from './childComps/HomeSwiper'
	import HomeRecommon from './childComps/HomeRecommon'
	import Feature from './childComps/Feature'
	
	import NavBar from '../../components/common/navbar/NavBar'
	import TabControl from '../../components/content/TabControl'
	import GoodsList from '../../components/content/GoodsList'
	import Scroll from '../../components/common/scroll/Scroll'
	import BackTop from '../../components/content/BackTop'
	
	
	import { getHomeMultidata, getHomeGoods} from '../../network/home.js'
	export default {
		name:'Home',
		components:{
			HomeSwiper,
			HomeRecommon,
			Feature,
			
			NavBar,
			TabControl,
			GoodsList ,
			Scroll,
			 BackTop
		},
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				currentType:'pop',
				isShowBackTop:false,
				isTabFixed:false,
				tabOffsetTop:0,
				saveY:0
			}
		},
		created(){//组件一旦创建就会执行的函数
			this.getHomeMultidata()
			//请求尚勤数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
			//注意  这里不能卸载 created()里面
//			this.$bus.$on('itemimageload',()=>{
////				console.log()
//				this.scroll&&this.$refs.scroll.scroll.refresh()
//				console.log('/////')
//			})
		},
		mounted(){
			//this.$bus.$on('itemimageload',()=>{
////				console.log()
//				this.scroll&&this.$refs.scroll.scroll.refresh()
//				console.log('/////')
//			})
//			图片加载完成事件监听
			const refresh=this.debounce(this.$refs.scroll.refresh,1200);
			this.$bus.$on('itemimageload',()=>{
				refresh()
			})
			
//			this.tabOffsetTop=this.$refs.TabControl.$el.offsetTop;
		},
		
		//进来时调用此函数
		activated(){
			this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
		},
		//离开home时调用此函数
		deactivated(){
			this.saveY=this.$refs.scroll.scroll.y;
		},
		methods:{
			/*
			事件监听相关的方法
			 *  
			 * */
			debounce(func,delay){
				let timer=null
				return function(...args){
					if(timer) clearTimeout(timer)
					timer=setTimeout(()=>{
						func.apply(this,args)
					},delay)
				}
			},
			tabClick(index){
				switch(index){
					case 0:
						this.currentType='pop'
						break
					case 1:
						this.currentType='new'
						break
					case 2:
						this.currentType='sell'
				}
				this.$refs.tabControl1.currentIndex=index;
				this.$refs.tabControl.currentIndex=index;
			},
			imageLoad(){
				console.log(this.$refs.tabControl.$el.offsetTop);
				this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop;
			},
			
			back(){
				this.$refs.scroll.scroll.scrollTo(0,0,500)
			},
			contentScroll(position){
				//1、决定BackTop是否显示
				this.isShowBackTop=(-position.y)>1000
				//2、决定tabcontrol是否吸顶
				this.isTabFixed=(-position.y)>this.tabOffsetTop
			},
			pullingUp(){
//				console.log('下拉加载更多')
				this.getHomeGoods(this.currentType)
				this.$refs.scroll.scroll.refresh()   //重新计算高度
			},
			
			/*
			 网络请求相关的方法
			 * 
			 * 
			 * */
			
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
				this.banners=res.data.banner.list;  
				this.recommends=res.data.recommend.list;
			})
			},
			getHomeGoods(type){
				const page=this.goods[type].page+1
				getHomeGoods(type,page).then(res=>{		
		        this.goods[type].list.push(...res.data.list)
		        this.goods[type].page+=1
		        this.$refs.scroll.scroll.finishPullUp()   //完成下拉加载更多
			})
			}
		}
	}
</script>

<style scoped>
	#home{
		width:100%;
		height:100vh;
		position:relative;
	}
	.hoome-nav{
		background-color:var(--color-tint);
		color:#fff;
	}
	/*.tab-control{
		position:sticky;
		top:44px;
		background-color:#fff;
	}*/
	.content{
		position:absolute;
		top:44px;
		bottom:49px;
		left:0;
		right:0;
		overflow: hidden;
	}
	
	/*.ifhidden{
		visibility:visible;
	}*/
	/*.iffixed{
		visibility: visible;
		position:absolute;
		left:0;
		right:0;
		top:44px;
		background:#fff;
	}*/
	.iffixed{
		position:relative;
		/*z-index: 9999;*/
		background-color: #fff;
	}
	.ifshow{
	/*	display:inline;*/
	}

</style>