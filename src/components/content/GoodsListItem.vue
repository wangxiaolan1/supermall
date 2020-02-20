<template>
	<div class="gooditem" @click="itemClick">
		<img v-lazy='showImage' @load="imageLoad"/>
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'GoodsListItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imageLoad(){
				this.$bus.$emit('itemimageload')
			},
			itemClick(){
				console.log('item点击了')
				this.$router.push('/detail/'+this.goodsItem.iid)
			}
		},
		computed:{
			showImage(){
				return this.goodsItem.img||this.goodsItem.image || this.goodsItem.show.img
			}
		}
	}
</script>

<style>
	.gooditem{
		width:48%;
		position:relative;
	}
	.gooditem img{
		width:100%;
		border-radius: 5px;
	}
	.goods-info{
		text-align: center;
	}
	.goods-info p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	.goods-info .collect{
		position:relative;
		margin-left:15px;
	}
	.goods-info .collect::before{
		content:'';
		position:absolute;
		left:-13px;
		top:1px;
		width:14px;
		height:14px;
		background: url("../../assets/img/common/collect.svg")0 0/14px 14px;
	}
</style>