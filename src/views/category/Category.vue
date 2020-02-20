<template>
	<div class="category">
		<cate-nav-bar></cate-nav-bar>
		<div class="cont">
			<cate-list :category="this.category" @selectItem="selectItem"></cate-list>
			<scroll id="tab-content" :data="[categoryData]" class="content">
					<tab-content-category :subcategories="showSubcategory"></tab-content-category>
					
					<tab-control :titles="['综合','新品','销量']" 
								@tabClick="itemClick">
					</tab-control>
					<tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
			</scroll>
			<back-top></back-top>
		</div>
	</div>
</template>

<script>
	import CateNavBar from './childrenComps/CateNavBar'
	import Scroll from '../../components/common/scroll/Scroll'
	import CateList from './childrenComps/CateList'
	import TabContentCategory from './childrenComps/TabContentCategory'
	import TabControl from '../../components/content/TabControl'
	import TabContentDetail from './childrenComps/TabContentDetail'
	import BackTop from '../../components/content/BackTop'
	
	import {getCategory,getSubcategory,getCategoryDetail} from '../../network/category.js'
	
	import {POP, SELL, NEW} from "../../common/const";
  	import {tabControlMixin} from "../../common/mixin";
  	
	export default {
		name:'Category',
		components:{
			CateNavBar,
			Scroll,
			CateList,
			TabContentCategory,
			TabControl,
			TabContentDetail,
			BackTop
		},
		mixins: [tabControlMixin],
		data(){
			return{
				category:[],
				categoryData: {
        		
				},
				currentIndex: -1,
			}
		},
		computed:{
			showSubcategory() {
		    	if (this.currentIndex === -1) return {}
        			return this.categoryData[this.currentIndex].subcategories
      		},
      		showCategoryDetail() {
		    if (this.currentIndex === -1) return []
		    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      		}
		},
		created(){
			//请求分类数据
			this.getCategory()
			
		},
		methods :{
			getCategory(){
				getCategory().then(res=>{
					this.category=res.data.category.list
					console.log(this.category)
					for (let i=0;i<this.category.length;i++){
						this.categoryData[i]={
							subcategories: {},
							categoryDetail:{
								'pop':[],
								'new':[],
								'sell':[]
							}
						}
					}
					
					//请求第一个分类的是数据
					this.getSubcategories(0)
				})
			},
			
			getSubcategories(index){
				this.currentIndex=index;
				const mailKey = this.category[index].maitKey;
				getSubcategory(mailKey).then(res=>{
					console.log(res)
					console.log(res.data)
					this.categoryData[index].subcategories=res.data;
					this.categoryData={...this.categoryData}
					this.getCategoryDetail(POP)
          			this.getCategoryDetail(SELL)
          			this.getCategoryDetail(NEW)
				})				
			},
			getCategoryDetail(type){
				 // 1.获取请求的miniWallkey
        		const miniWallkey = this.category[this.currentIndex].miniWallkey;
       			 // 2.发送请求,传入miniWallkey和type
		    	getCategoryDetail(miniWallkey, type).then(res => {
		    		console.log(res)
		      	// 3.将获取的数据保存下来
		      	this.categoryData[this.currentIndex].categoryDetail[type] = res
          		this.categoryData = {...this.categoryData}
        	})
			},
//			itemClick(index){
//				console.log(index)
//				switch(index){
//					case 0:
//						this.currentType='POP'
//						break
//					case 1:
//						this.currentType='NEW'
//						break
//					case 2:
//						this.currentType='SELL'
//				}
////				this.$refs.tabControl1.currentIndex=index;
////				this.$refs.tabControl.currentIndex=index;
//			},
			selectItem(index){
				 this.getSubcategories(index)
				 
			},
			
			
		}
	}
</script>

<style scoped>
	.category{
		height:100vh;
		position:relative;
	}
	.cont{
		height:100vh;
	}
	.content{
		position: absolute;
		left:100px;
		top:44px;
		right:0;
		bottom:49px;
		overflow: hidden;
	}
</style>
	