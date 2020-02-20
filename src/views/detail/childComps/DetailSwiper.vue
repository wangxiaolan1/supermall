<template>
		<swiper class="swipper">
			<swiper-item v-for="item in topImages" >
				<img :src="item"/>
			</swiper-item>
		</swiper>
</template>

<script>
	import {Swiper, SwiperItem} from '../../../components/common/swiper'
	export default {
		name:'DetailSwiper',
		components:{
			Swiper ,
			SwiperItem
		},
		props:{
			topImages:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.swipper {
		height:300px;
		overflow: hidden;
	}
</style>