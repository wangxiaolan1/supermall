<template>
	<!--<div class="cartitem">-->
		<scroll class="contents">
			<cart-list-item  v-for="item in cartlist" :key="item.iid" :item-info="item"></cart-list-item>
		</scroll>
		
	<!--</div>-->
</template>

<script>
	import Scroll from '../../../components/common/scroll/Scroll'
	import CartListItem from './CartListItem'
	export default{
		name:'CartList',
		components:{
			Scroll,
			CartListItem ,
			
		},
		
		computed:{
			cartlist(){
				return this.$store.state.carList
			}
		}
		
	}
</script>

<style scoped>
	.contents{
		position:absolute;
		top:44px;
		left:0;
		right:0;
		bottom: 89px;
		overflow: hidden;
	}
</style>