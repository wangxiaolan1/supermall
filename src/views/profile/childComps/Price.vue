<template>
	<div class="price">
		<div class="profileinfo">
			<div v-for="items in price" class="iem">{{items}}</div>
			<div v-for="item in iteminfo ">{{item}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Price',
		data(){
			return{
				price:['0.00元','0个','0分'],
				iteminfo:['我的余额','我的收藏','我的积分']
			}
		}
	}
</script>

<style scoped>
	.profileinfo{	
		width:100%;
		border:1px solid #ccc;
		overflow: hidden;
		height:80px;
		border-bottom:10px solid #eee;
		padding-top:20px;
	}
	.iem{
		color:var(--color-tint);
		margin-bottom:5px;
	}
	.profileinfo div{
		width:33.3%;
		float: left;
		text-align: center;
	}
</style>