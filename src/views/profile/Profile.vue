<template>
	<div class="profile">
		<nav-bar><<div slot="center" class="center">我的档案</div></nav-bar>
		<register></register>
		<price></price>
	</div>
	
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar'
	import Register from './childComps/Register'
	import Price from './childComps/Price'
	export default {
		name:'Profile',
		components:{
			 NavBar,
			 Register,
			 Price
		}
	}
</script>

<style scoped>
	.center{
		color:#fff;
	}
</style>