<template>
	<div class="nav-bar">
		<div class="left"><slot name='left'></slot></div>
		<div class="center"><slot name='center'></slot></div>
		<div class="right"><slot name='right'></slot></div>
	</div>
</template>

<script>
	export default{
		name:'NavBar'
	}
</script>

<style>
	.nav-bar{
		/*position:fixed;
		top:0;
		left:0;
		z-index:8;*/
		line-height: 44px;
		height:44px;
		background:var(--color-tint);
		display:flex;
		text-align:center;
		width:100%;
		
	}
	.left , .right{
		width:60px
	}
	.center{
		flex:1;
		/*border:1px solid #ccc;*/
	}
</style>