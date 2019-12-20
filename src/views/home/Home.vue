<template>
	<div id="home">
		<nav-bar><div slot='center' class='hoome-nav'>购物街</div></nav-bar>
		<home-swiper :banners="banners"/>
		<home-recommon :recommends="recommends"></home-recommon>
		<feature></feature>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar'
	import HomeSwiper from './childComps/HomeSwiper'
	import HomeRecommon from './childComps/HomeRecommon'
	import Feature from './childComps/Feature'
	
	import { getHomeMultidata } from '../../network/home.js'
	export default {
		name:'Home',
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommon,
			Feature
		},
		data(){
			return{
				banners:[],
				recommends:[]
			}
		},
		created(){
			console.log(this)
			getHomeMultidata().then(res=>{
				this.banners=res.data.banner.list;  
				this.recommends=res.data.recommend.list;
			})
		}
	}
</script>

<style>
	.hoome-nav{
		background-color:var(--color-tint);
		color:#fff;
	}
</style>