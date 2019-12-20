<template>
	<div class="recommends">
		<div v-for="item in recommends" class="recom-item">
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<div>{{item.title}}</div>
			</a>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'HomeRecommon',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style >
	.recommends{
		display:flex;
		width:100%;
		text-align:center;
		font-size:12px;
		padding:10px 0 20px;
		border-bottom:8px solid #eee;
	}
	.recom-item{
		flex:1;	
		text-align:center;
	}
	.recom-item img{
		width:65px;
		height:65px;
		margin-bottom:10px;
	}
</style>