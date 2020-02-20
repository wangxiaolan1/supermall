<template>
	<div class="register">
		<div class="proimg">
		<img src="../../../assets/img/logo.png" alt="" />
			
		</div>

		<div class="text">
			<div>
				<a href="#">登录/</a>
				<a href="#">注册</a>
			</div>
			<div>
				<a href="#" v-if="isShow">暂无绑定手机哈</a>
			</div>
		</div>
		<div class="right">
			<a href="#">></a>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'Register',
		data(){
			return{
				isShow:true
			}
		}
	}
</script>

<style scoped>
	.register{
		background-color:var(--color-tint);
		padding:5px 10px;
		display: flex;
		position: relative;
		width:100%;
		height:80px;
	}
	.proimg{
		height:60px;
		width:60px;
		border-radius: 50%;
		margin:0 10px;
		overflow: hidden;
	}
	.register img{
		width:100%;
		
	}
	.text{
		margin-left:10px;
	}
	.text a{
		font-size:14px;
		color:#fff;
		display:inline-block;
		height:30px;
		line-height:30px;
		
	}
	.right{
		width:60px;
		height:60px;
		position:absolute;
		right:0;
		top:50%;
		transform: translateY(-50%);
		line-height: 60px;
		text-align: center;
	}
	.right a{
		width:40px;
		height: 40px;;
		line-height: 40px;
		text-align: center;
		display:inline-block;
		font-size:20px;
		color:#fff;
		line-height:40px;
	}
</style>