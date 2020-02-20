<template>
<div class="common" v-if="Object.keys(rate).length!==0">
	<div class="header">
		<span>用户评论</span>
		<span>更多</span>
	</div>
	<div class="use">
		<div class="uselogo">
			<img :src="rate.user.avatar" alt="" />
		</div>
		
		<span>{{rate.user.uname}}</span>
		<div>{{rate.content}}</div>
		<div>
			<span>{{rate.created | showDate}}</span>
			<span>{{rate.style}}</span>
		</div>
		<span v-for="item in rate.images" class="images">
			
			<img :src="item" alt="" />
		</span>
	</div>
	
</div>
</template>

<script>
	import {formatDate} from '../../../common/utils'
	export default{
		name:'DetailRate',
		props:{
			rate:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		filters:{
			showDate(value){
				//将时间戳转成Date对象
				const date=new Date(value*1000)
				//2、将date进行格式化
				return formatDate(date,'yyyy-MM-dd')
			}
		}
	}
</script>

<style scoped>
	.common{
		padding-bottom:20px;
		border-bottom:5px solid #eee;
	}
	.header{
		height:44px;
		line-height:44px;
		margin:10px;
		font-size:18px;
		border-bottom:2px solid #eee;
	}
	.header span{
		margin:0 10px;
	
	}
	.header span:last-child{
		float:right
	}
	.use{
		
		font-size:18px;
		margin:10px 10px;
		
	}
	.uselogo{
		height:40px;
		width:40px;
		border-radius:50%;
		overflow: hidden;
		display:inline-block;
		vertical-align:middle;
		margin-right:10px;
	}
	.use img{
		width:100%;
		height:100%;
	}
	.images{
		height:80px;
		width:80px;
		display:inline-block;
		margin-right:5px;
	}
	.images img{
		width:100%;
	}
</style>