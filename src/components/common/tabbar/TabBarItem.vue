<template>
	<div id="tab-bar-item" @click="itemClick">
		<div v-if="! isActive"><slot  name='item-ico'></slot></div>
		<div v-else><slot  name='item-ico-active'></slot></div>
		<!--<div :class="{active:isActive}"><slot name='item-text'></slot></div>-->
		<div :style="activeStyle"><slot name='item-text'></slot></div>
   	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'var(--color-tint)'
			}
		},
		data(){
			return{
//				isActive:false
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !==-1
				//$route.path表示处于活跃状态下的路由  不等于-1表示找到了
				
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	#tab-bar-item{
		flex:1;
		text-align: center;
		font-size:14px;
	}
	#tab-bar-item img{
		height:24px;
		width:24px;
		display:block;
		vertical-align: middle;
		margin:0 auto;
		}
</style>