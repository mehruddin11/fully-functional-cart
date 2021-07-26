const reducer = (state,action) =>{
	
	if(action.type === 'REMOVEALL'){
		return {
			...state,
			cart:[]
		}
	}
	if(action.type=== 'CLEAR_SINGLE'){
		const data = state.cart.filter((item)=>item.id!==action.payload)
		return{
			...state,
			cart:data
			
		}

	}
	if(action.type === 'INCREASE_AMOUNT'){
		const tempcart = state.cart.map((item)=>{
			if(item.id=== action.payload){
				return {...item, amount:item.amount+1}
			}
			return item
		})
		return {
			...state,
			cart:tempcart

		}

	}
	if(action.type==='DECREASE_AMOUNT'){
		const decCart = state.cart.map((decitems)=>{
			if(decitems.id=== action.payload){
				return {...decitems,amount:decitems.amount-1}
			
			}

			return decitems
		}).filter((decitems)=> decitems.amount!==0)
		return {
			...state,
			cart:decCart
		}
	}
	if(action.type=== 'GET_TOTAL'){
		let  {total,amount} = state.cart.reduce(
			(cartTotal, cartItem)=>{
			const {price, amount} =cartItem;
			const itemTotal = price*amount
			cartTotal.total += itemTotal;
			cartTotal.amount += amount;
			return cartTotal;
		}, 
		{
			total:0,amount:0
		}
		);
		total = parseFloat(total.toFixed(2))
		return{...state,total,amount}
	 
	return state
	}
}
export default reducer;