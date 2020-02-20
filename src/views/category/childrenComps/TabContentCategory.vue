<template>
		<div class="ctabcoca">
	
				<div class="item" v-for="(item, index) in subcategories.list" :key="index">
        		<a :href="item.link">
         	 		<img class="item-img" :src="item.image" alt="">
          			<div class="item-text">{{item.title}}</div>
       			</a>
      		</div>
			
		</div>
		<!--<grid-view  :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">-->
			
		<!--</grid-view>-->
</template>

<script>
	import GridView from '../../../components/common/gridView/GridView'
	export default{
		name:'TabContentCategory',
		components:{
			GridView
		},
		props: {
      		subcategories: {
        	type: Object,
        	default() {
          		return []
        	}
      		}
   		},
   		created(){
   			console.log(this.subcategories);
   		}
  }
	
</script>

<style scoped>
	.ctabcoca{
		margin-top:20px;
		width:100%;
		/*display:flex;*/
		/*position:relative;*/		
		/*height:100vh;*/
		overflow:hidden;
	}
	.item{
		width:33.3%;
		float: left;
		text-align: center;
		height:auto;
	}
	.item img{
		width:100%;
	}
	/*.panel img {
    	width: 100%;
  	}

  	.item {
    	text-align: center;
    	font-size: 12px;
  	}

  	.item-img {
    	width: 80%;
  	}

  	.item-text {
    	margin-top: 15px;
  	}	*/
</style>