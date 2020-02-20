export default{
	addCart(context,payload){
		return new Promise((resolve,reject)=>{
			let oldProduct=null;
				for(let item of context.state.carList){
					if(item.iid===payload.iid){
						oldProduct=item
					}
				}
				if(oldProduct){
					context.commit('addCounter',oldProduct)
					resolve('添加一件商品')
//					oldProduct.count+=1
//					resolve('添加了一件商品')
			
				}else{
					payload.count=1;
					context.commit('addToCar',payload)
//					state.carList.push(payload)
  					resolve('添加成功')
				}
				
				console.log(payload)	
		})
				
	
	}
}
