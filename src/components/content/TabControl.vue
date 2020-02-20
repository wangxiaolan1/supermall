<template>
	<!--如果只是文字不一样时  不需要使用插槽-->
	<div class="tab-control">
		<div v-for="(item,index) in titles" 
			class="tab-control-item"
			 :class="{active: index===currentIndex}"
			  @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabContral',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex=index;
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style>
	.tab-control{
		display:flex;
		height:40px;
		line-height:40px;
		text-align: center;
		font-size:16px;
		z-index: 999;
	}
	.tab-control-item span {
		padding:5px;
	}
	.tab-control-item{
		flex:1;
		
	}
	.active{
		color: var(--color-high-text);
	}
	.active span{
		border-bottom: 3px solid red;
	}
</style>