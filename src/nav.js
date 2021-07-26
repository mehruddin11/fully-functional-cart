import {useGlobalContext} from './context';
import {CgShoppingCart} from 'react-icons/cg'
const NavBar = () =>{
	const {amount} =useGlobalContext();
	return (
		<nav className='nav-center'>
			 <h3> cart</h3>
			<div className='nav-container'>
			<div className='cart-icon'>
			<CgShoppingCart/>
			</div>
			<div className='amount-container'>
			<p className='total-amount'>{amount}</p>
			</div>
			  
			</div>
		</nav>
		)
}
export default NavBar;