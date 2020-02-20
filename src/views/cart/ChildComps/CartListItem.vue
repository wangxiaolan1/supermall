<template>
	<div class="cartlistitem">
		<div class="first" @click="buttonClick">
			<button-check  :value="this.itemInfo.checked" :class="{bag:this.itemInfo.checked}"></button-check>
		</div>
		
		<div class="item-img">
			<img :src="itemInfo.image">
		</div>
		<div class="item-info">
			<div class="item-title"> {{itemInfo.title}}</div>
			<div class="item-desc">{{itemInfo.desc}}</div>
			<div class="info-bottom">
				<div class="item-price left">￥{{itemInfo.price}}</div> 
				
				<div class="right">×{{itemInfo.count}}</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import ButtonCheck from './ButtonCheck'
	export default{
		name:'CartListItem',
		components:{
			ButtonCheck
		},
		props:{
			itemInfo:{
				type:Object,	
			}
		},
		methods:{
			buttonClick(){
//				console.log(this.itemInfo.checked)
				this.itemInfo.checked=!this.itemInfo.checked
			}
		}
	}
</script>

<style scoped>
	.bag {
		background-color:red;
	}
	.cartlistitem{
		width:100%;
		display:flex;
		padding:5px;
		
	}
	.first{
		width:14%;
		display:flex;
		justify-content:center ;
		align-items: center;
	}
	.item-img{
		padding:5px;
	
	}
	.item-img img{
		width:80px;
		height:100px;
		border-radius: 5px;
	}
	.item-info{
		font-size:17px;
		color:#333;
		padding:5px 10px;
		position:relative;
		overflow: hidden;	
	}
	.item-title , .item-desc{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		
	}
	.item-info .item-desc {
    	font-size: 14px;
    	color: #666;
   		 margin-top: 15px;
  }
	.info-bottom{
		margin-top: 10px;
   	 	position: absolute;
   		bottom: 10px;
    	left: 10px;
    	right: 10px;
	}
	.info-bottom .item-price {
    color: orangered;
  }
</style>