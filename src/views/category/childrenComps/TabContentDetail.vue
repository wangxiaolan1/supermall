<template>
	<div class="detail2">
		<goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goods-item="item"></goods-list-item>
	</div>
</template>

<script>
	import GoodsListItem from '../../../components/content/GoodsListItem'
	export default{
		name:'TabContentDetail',
		components:{
			GoodsListItem
		},
		props:{
			categoryDetail:{
				type: Array,
       			 default() {
          			return []
        		}
			}
		}

	}
</script>

<style>
	.detail2{
		width:100%;
		overflow: hidden;
	}
	.detail2 div{
		float:left;
		width:50%;
	}
</style>