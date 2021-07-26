import CartItems from './cartitems';
import {useGlobalContext} from './context';
const CartContainer = () => {
	const {total,cart,clearallitems} =useGlobalContext();
	 
	if(cart.length === 0){
		return <section className='cart'>
		<header>
		<h2> Your Cart </h2>
		<h4 className='empty-cart'>your cart is empty </h4>
		</header>
		</section>
	}
	return (
		<section className='cart'>
		 
			<header>
				<h2> Your Cart </h2>
			</header>
			<div>
			{
				cart.map((item)=> {
					return <CartItems key ={item.id} {...item} />
				})}
			</div>
			<footer>
			 
			<hr/>
			<div className='cart-totals'>
			<h4> Total <span>{total}</span></h4>
			</div>
			 
			<button 
				className 
				='btn clear-btn'
				onClick = {clearallitems} >
				 Clear Cart
			 </button>
			</footer>
		</section>

		)
}
export default CartContainer;