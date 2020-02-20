export default{
	addCounter(state,payload){
		payload.count++
	},
	addToCar(state,payload){
		state.carList.push(payload)
	}
}
