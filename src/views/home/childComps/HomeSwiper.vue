<template>
		<swiper>
			<swiper-item v-for="item in banners">
				
					<img :src="item.image" alt="" @load="imageLoad"/>
			
			</swiper-item>
		</swiper>			
</template>

<script>
	import {Swiper, SwiperItem} from '../../../components/common/swiper'
	export default {
		name:'HomeSwiper',
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			banners:{
				type:Array,
				default(){
				return []
				}
			}
			
		},
		data(){
			return {
				isLoad:false
			}
		},
		methods:{
			
			imageLoad(){ 
				//这种方法与debounce 的区别
				if(!this.isLoad){
					this.$emit('swipperimage')
					this.isLoad=true
				}
				
			}
		}
		
		
		
	}
</script>

<style>
</style>