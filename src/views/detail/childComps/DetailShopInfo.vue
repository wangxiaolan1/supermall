<template>
<div class="shopinfo">
	<div class="logo">
		<a :href="shop.shopUrl">
			<img :src="shop.logo"/>
		</a>
		<span>{{shop.name}}</span>
	</div>
	<div class="info">
		<div>
			<div>{{shop.sell}}</div>
			<div>总销量</div>
		</div>
		<div class="center">
			<div>{{shop.goodsCount}}</div>
			<div>全部宝贝</div>
		</div>
		<div class="right" >
			<div v-for="(item, index) in shop.score" :key="index">
				<span>{{item.name}}</span>
				<span class="center" :class="{'score-better': item.isBetter}" >{{item.score}}</span>
				<span class="last" :class="{'score-better': item.isBetter}" >{{item.isBetter ? '高':'低'}}</span>
			</div>
		</div>
	</div>
	<div class="shopurl"><a :href="shop.shopUrl">进店逛逛</a></div>
</div>
</template>

<script>
	export default{
		name:'DetailShopInfo',
		props:{
			shop:{
				type:Object,
				default(){
					return {}
				}
			}
		}
		
	}
</script>

<style>
	.shopinfo{
		border-bottom:5px solid #eee;
	}
	.logo{
		height:100px;
		line-height: 100px;
		
	}
	.logo a{
		height:40px;
		display:inline-block;
		width:40px;
		border-radius: 50%;
		border:1px solid #bbb;
		text-align: center;
		line-height:40px;
		overflow: hidden;
		vertical-align:middle;
		margin:10px;
	}
	.logo img{
		height:40px;
		width:40px;
		border-radius: 50%;
	
	}
	.logo span{
		height:40px;
		line-height: 40px;
		display:inline-block;
	}
	.info{
		display: flex;
		text-align: center;
	}
	.info div{
		flex: 1;
		margin:5px;
	}
	.info .right{
		flex: 2;
		border-left:1px solid #ccc;
		
	}
	.right .center{
		width:32px;
		display: inline-block;
		margin:0 10px ;
		text-align:left;
		color:#5ea732;
	} 
	.right .last{
		height:16px;
		width:16px;
		background-color:#5ea732;
		display: inline-block;
		font-weight:700;
		color:#fff;
	}
	.right .score-better:first-child{
		color:#f13e3a;
	}
	.right .score-better:last-child{
		background-color:#f13e3a;
	}
	.score-better{
		/*background-color:red;*/
	}
	.shopurl{
		height:30px;
		width:100px;
		border:1px solid #ccc;
		border-radius:10px;
		line-height:30px;
		background-color:#eee;
		text-align: center;
		margin:  20px auto;
	}
</style>