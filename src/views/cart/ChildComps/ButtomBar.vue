<template>
	<div class="buttombar" >
		<div class="all"  @click="butClick">
			<button-check  :class="{allClicks:allClick}" ></button-check>	
		</div>
		<div class="text">全选</div>
		<div class="price">合计:￥{{totalprice}}</div>
		<div class="calute" @click="caluClick">去计算：{{calute}}</div>
	</div>
</template>

<script>
	import ButtonCheck from './ButtonCheck'
	export default{
		name:'ButtomBar',
		components:{
			ButtonCheck
		},
		props:{
			itemClick:Array
		},
		methods:{
			butClick(){
//				if(!this.itemClick.checked){
//					this.itemClick.checked=true
//				}
				if(this.allClick){
					this.itemClick.forEach(item=>item.checked=false)
				}else{
					for(let item of  this.itemClick){
					if(!item.checked){
						item.checked=true
					}
				}
				}
				
//				this.itemClick.filter(item=>return !item.checked).map(item=>return true )
			},
			caluClick(){
				this.$toast.show(this.calute+'件商品',2000)
			}
		},
		computed:{
			totalprice(){
				return this.$store.state.carList.filter(item=>{
					return item.checked
				}).reduce((preValue,item)=>{
					return preValue+item.price*item.count
				},0).toFixed(2)
			},
			calute(){
				
				return this.$store.state.carList.filter(item=>{
					return item.checked
				}).length
			},
			allClick(){
				if(this.itemClick.length===0)return false
				return !this.$store.state.carList.filter(item=>{return !item.checked}).length
//				return !this.$store.state.carList.find(item=>!item.checked)

			}
		}
	}
</script>

<style>
	.buttombar{
		position:absolute;
		display:flex;
		bottom:48px;
		left:0;
		
		background-color:#eee;
		height:40px;
		width:100%;
		line-height:40px;
		align-items:center
		
	}

	.all {
		margin:0 10px;
		height:20px;
		width:20px;
		border:1px solid #fff;
		border-radius: 50%;
		line-height:20px;
		/*vertical-align:bottom;*/
	}
	/*.text , .price {
		position:absolute;
		bottom:10px;
		left:40px;
	}*/
	.price{
		flex:1;
		text-align: center;
	}
	.calute{
		/*position:absolute;
		bottom:0px;
		right:0;*/
		height:40px;
		width:100px;
		background-color:red;
		line-height:40px;
		text-align: center;
		color:#ccc;
		/*float:right;*/
	}
	.allClicks{
		background-color:red;
		border:1px solid #fff;
	}
</style>