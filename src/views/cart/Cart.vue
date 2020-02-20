<template>
	<div class="Cart">
		<nav-bar>
			<div slot="center" class="car">购物车({{cartlength}})</div>
		</nav-bar>
		<toast></toast>
		<cart-list></cart-list>
		
		<buttom-bar :item-click="cartItem"></buttom-bar>
		<main-tab-bar  ></main-tab-bar>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar'
	import CartList from './ChildComps/CartList'
	import MainTabBar from '../../components/content/MainTabBar'
	import ButtomBar from './ChildComps/ButtomBar'
	import Toast from '../../components/common/toast/Toast'
	export default {
		name:'Cart',
		components:{
			NavBar,
			CartList,
			MainTabBar,
			 ButtomBar,
			 Toast
		},
		methods:{
			
		},
		computed:{
			cartlength(){
				return this.$store.state.carList.length
			},
			cartItem(){
			    return  this.$store.state.carList
			}
		
			
		}
	}
</script>

<style>
	.Cart{
		height:100vh;
		position:relative;
	}
	.car{

		color:#fff;
	}

</style>