import axios from 'axios'

export function request(config){
	const instance= axios.create({
		baseURL:'http://123.207.32.32:8000/api/hy',
//		baseURl:'http://106.54.54.237:8000/api/v1',
		timeout:10000
	})
	instance.interceptors.request.use(config=>{
		return config 
	},err=>{
	})
	instance.interceptors.response.use(res=>{
		return res.data
	},err=>{
		console.log(err)
	})
	
	//发送真正的请求
	return instance(config)
}
