<template>
	<div class="DetailBaseInfo" v-if="Object.keys(goods).length!==0">
		<div class="info-title">{{goods.title}}</div> 
		<div class="info-price">
			<span class="newPrice">{{goods.newPrice}}</span>
			<s>{{goods.oldPrice}}</s>
			<span :class="{'discount':showDiscound}" >{{goods.discount}}</span>
		</div>
		<div class="columns">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="services">
			<span><img :src="goods.services[0].icon"/>{{goods.services[0].name}}</span>
			<span><img :src="goods.services[1].icon"/>{{goods.services[1].name}}</span>
			<span><img :src="goods.services[2].icon"/>{{goods.services[2].name}}</span>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'DetailBaseInfo',
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		computed:{
			showDiscound(){
				return this.goods.discount==""? false:true ;
			}
			
		}
		
	
	}
</script>

<style scoped>
	.info-title{
		font-size:16px;
		color:#000;
		margin:5px;
	}
	.info-price{
		height:35px;
		line-height:35px;
		
	}
	.newPrice{
		margin:5px 8px 5px 5px;
		color:red;
		font-size:20px;
		font-weight:700;
	}
	.discount{
		background-color:red;
		color:#fff;
		border-radius: 5px;
		padding:3px;
		margin-left: 10px;
	}
	.columns{
		margin:20px 5px 5px;
		display: flex;
		
		border-bottom:1px solid #eee;
	}
	.columns span{
		flex:1;
	}
	.services{
		font-size:14px;
		color:#000;
		display:flex;
		justify-content: space-between;
		height:60px;
		line-height:60px;
		border-bottom:5px solid #eee;
	}
	.services img{
		height:16px;
		width:16px;
	}
</style>