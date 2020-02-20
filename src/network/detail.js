import {request} from "./request"

export function getDetail(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}

export function getRecommend(){
	return request({
		url:'/recommend'
	})
}

export class Goods{
	constructor(itemInfo,columns,services){
		this.title=itemInfo.title
		this.desc=itemInfo.desc
		this.newPrice=itemInfo.price
		this.oldPrice=itemInfo.oldPrice
		this.discount=itemInfo.discountDesc
		this.columns=columns
		this.services=services
		this.realPrice=itemInfo.lowNowPrice
		this.discountBgColor=itemInfo.discountBgColor
	}
}

export class Shop{
	constructor(shopInfo){
		this.logo=shopInfo.shopLogo
		this.name=shopInfo.name
		this.fans=shopInfo.cFans
		this.sell=shopInfo.cSells
		this.score=shopInfo.score
		this.goodsCount=shopInfo.cGoods
		this.shopurl=shopInfo.shopUrl
	}
}

export class Shopparams{
	constructor(info,rule){
		this.image=info.images?info.images[0]:''
		this.key=info.key
		this.set=info.set
		this.tables=rule.tables
		this.keys=rule.key
		this.disclaimer=rule.disclaimer
	}
}


