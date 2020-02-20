<template>
	<div >
		<nav-bar class="detail">
			<div slot="left" class="left" @click="backClick">
				<img src="../../../assets/img/common/back.svg"/>
			</div>
			<div slot="center" class="title">
				<div  v-for="(item,index) in titles"
					class="title-item"
					:class="{active:index===currentIndex}"
					@click="itemClick(index)">
				{{item}}
			</div>
			</div>
			
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from '../../../components/common/navbar/NavBar'
	export default{
		name:'DetailNavBar',
		components:{
			NavBar
		},
		data(){
			return{
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		methods:{
			itemClick(index) {
				this.currentIndex=index;
        		this.$emit('itemClick', index)
      		},
			backClick(){
				this.$router.back()
			}
		}
	}
</script>

<style>
	.left img{
		margin-top:11px;
	}
	.detail{
		background-color: #fff !important;
		box-shadow: 0 0 5px 0 rgba(0,0,0, .08);
	}
	.title{
		display: flex;
		background-color:#fff;
		
	}
	.title-item{
		flex:1
	}
	.active{
		color:var(--color-high-text);
		
	}
</style>