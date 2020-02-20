<template>
	<div class="shopparams" v-if="Object.keys(shopparams).length!==0">
		<div class="disclaimer">{{shopparams.disclaimer}}</div>
		<img :src="shopparams.image" alt="" />
		<div class="table" v-for="items in shopparams.tables[0]" >
			<span v-for="item in items">
				{{item}}  
			</span>
		</div>
		<div>
			<div class="key">{{shopparams.key}}</div>
			<div v-for="set in shopparams.set" class="set">
				<span v-for="setitem in set">{{setitem}}</span>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		name:'DetailParams',
		props:{
			shopparams:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	.shopparams img{
		width:100%;
	}
	.disclaimer{
		padding:5px 0 30px;
		margin:10px 0;
		font-size:14px;
		border-top:2px solid #eee;
		border-bottom: 5px solid #eee;
	}
	.table{
		display:flex;
		height:40px;
		line-height:40px;
		border-bottom:1px solid #eee;
		margin:0 10px;
	}
	.table span{
		flex:1
	}
	.set{
		height:40px;
		line-height:40px;
		border-bottom:1px solid #eee;
		display:flex;
		margin:0 10px;
	}
	.key{
		margin:10px;
	}
	.set span{
		flex:1
	}
	.set span:last-child{
		color:pink;
		flex:2
	}
</style>