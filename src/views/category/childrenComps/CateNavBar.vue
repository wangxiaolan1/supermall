<template>
	<div class="catenavbar">
		<nav-bar><div slot="center">商品分类</div></nav-bar>
	</div>
</template>

<script>
	import NavBar from '../../../components/common/navbar/NavBar' 
	export default{
		name:'CateNavBar',
		components:{
			NavBar
		}
	}
</script>

<style scoped>
	.catenavbar{
		color:#fff;
	}
</style>