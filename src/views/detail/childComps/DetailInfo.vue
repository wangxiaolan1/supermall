<template>
<div class="detail-info" v-if="Object.keys(detailInfo).length!==0">
	<div class="desc">
		<div class="detail"><div></div>_________</div>
		<span class="text">{{detailInfo.desc}}</span>
		<div class="detail"><div></div>_________</div>
	</div>
	<div v-for="item in detailInfo.detailImage">
		<div class="key">{{item.key}}</div>
		<div v-for="items in item.list" class="itemimage">
			<img :src="items" @load="imgLoad"/>
		</div>
	</div>
</div>
</template>

<script >
	export default{
		name:'DetailInfo',
		data(){
			return{
				count:0,
				imagesLength:0
			}
		},
		props:{
			detailInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imgLoad(){
				if(++this.count===this.imagesLength){
					this.$emit('imageLoad')
				}
			}
		},
		watch:{
			detailInfo(){
				this.imagesLength=this.detailInfo.detailImage[0].list.length
			}
			
		}
	}
</script>

<style scoped>
	.detail{
		font-size:18px;
		color:#000;
	}
	.detail:last-child{
		float:right;
	}
	.detail div{
		display:inline-block;
		height:1px;
		width:1px;
		border:2px solid #000;
	}
	.text{
		display: inline-block;
		margin:20px 5px 0;
	}
	.desc{
		margin:10px 5px;
	}
	.itemimage{
		/*height:300px;*/
		overflow: hidden;
	}
	.itemimage img{
		width:100%;
		
	}
	.key{
		height:30px;
		line-height:30px;
		color:#000;
		margin:10px 0 10px 10px;
	}
</style>