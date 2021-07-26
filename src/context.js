import React , {useContext, useReducer, useEffect} from 'react';
import cartItem  from './data';
import reducer from './reducer'

const AppContext = React.createContext(cartItem);

const initialstate = {
	loading:false,
	cart:cartItem,
	total:0,
	amount:0
}

const AppProvider = ({children}) => {
	const [state, dispatch] =useReducer(reducer,initialstate);
	const clearallitems = () =>{
		dispatch({type:'REMOVEALL'})
	}
	const clearSingleItem = (id) => {
		dispatch({type:'CLEAR_SINGLE',payload:id})
	}
	const IncreaseAmout = (id) => {
		dispatch({type:'INCREASE_AMOUNT',payload:id})
	}
	const DecreaseAmount = (id) => {
		dispatch({type:'DECREASE_AMOUNT',payload:id})
	}
	useEffect(()=>{
		dispatch({type:'GET_TOTAL'})
		
}, [state.cart])

	return <AppContext.Provider value ={
		{
			...state,
			clearallitems,
			clearSingleItem,
			IncreaseAmout,
			DecreaseAmount

		}
	} >
	{children} 
	</AppContext.Provider>
}
 const useGlobalContext = () => {
	return useContext(AppContext);
}
export {AppProvider,AppContext,useGlobalContext}