<template>
	<div class="wrapp" ref="wrapp">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:'Scroll',
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				scroll:null
			}
		},
		mounted(){ //不要通过document.querySelector('.wrapp')拿到这个元素  因为如果其他标签也是用了该类 则不知道拿到的是哪个元素对象
			//而是通过this.$refs.refname的方法拿到
			//1、创建BScroll对象
			this.scroll=new BScroll(this.$refs.wrapp,{
					click:true,
					probeType:this.probeType,
					pullUpLoad:this.pullUpLoad
			})
			//2、监听滚动事件
			this.scroll.on('scroll',(position)=>{
//				console.log(position);
			this.$emit('scroll',position)
			})
			
			this.scroll.scrollTo(0,0)
			
			//3、监听上拉事件
			this.scroll.on('pullingUp',()=>{
//				console.log('pullingUp')
				this.$emit('pullingUp')
//				 this.scroll.finishPullUp()
			})
	},
		methods:{
			refresh(){
				console.log('-----');
				this.scroll.refresh()
				
			}
		}
	}
</script>

<style>
	
</style>