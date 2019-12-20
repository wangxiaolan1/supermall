<template>
	<div id="main-tab-bar">
	<tab-bar>			
    <tab-bar-item path='/home'>
	  <img slot='item-ico' src="../../assets/img/tabbar/home.svg"/>
	  <img slot='item-ico-active' src="../../assets/img/tabbar/home_active.svg" >
      <div slot='item-text' id="tab-bar-item">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category'>
	  <img slot='item-ico' src="../../assets/img/tabbar/category.svg"/>
	  <img slot='item-ico-active' src="../../assets/img/tabbar/category_active.svg" >
      <div slot='item-text' id="tab-bar-item">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/cart'>
	  <img slot='item-ico' src="../../assets/img/tabbar/cart.svg"/>
	  <img slot='item-ico-active' src="../../assets/img/tabbar/cart_active.svg" >
      <div slot='item-text' id="tab-bar-item">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
	  <img slot='item-ico' src="../../assets/img/tabbar/profile.svg"/>
	  <img slot='item-ico-active' src="../../assets/img/tabbar/profile_active.svg" >
      <div slot='item-text' id="tab-bar-item">我的</div>
    </tab-bar-item>
  </tab-bar> 
	</div>
 
</template>

<script>
	import TabBar from '../common/tabbar/TabBar'
	import TabBarItem from '../common/tabbar/TabBarItem'
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>