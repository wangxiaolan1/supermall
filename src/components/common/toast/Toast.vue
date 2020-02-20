<template>
	<div class="father" v-show="isShow">
		<div class="toast" >
		<div>{{message}}</div>
		</div>

	</div>
</template>

<script>
	export default{
		name:'Toast',
		data(){
			return{
				message:'',
				isShow:false,
			}
		},
		methods:{
			show(message,duration){
				this.isShow=true;
				this.message=message;
				
				setTimeout(()=>{
					this.isShow=false;
					this.message=''
				},duration)
			}
		}
	}
	
</script>

<style>
	.toast{
		position:fixed;
		height:80px;
		width:200px;
		left:50%;
		top:50%;
		background-color:rgba(0,0,0, .6);
		transform: translate(-50%,-50%);
		line-height:80px;
		text-align: center;
		color:#fff;
		z-index:999;
	}
</style>