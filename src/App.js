import NavBar from './nav';
import CartContainer from './cartcontainer';
import {useGlobalContext} from './context';
function App() {
  const {loading} = useGlobalContext();
  if(loading){
    return <div className='loading'>
    <h2> loading...</h2>
    </div>
  }
  return (

    <div>
      <NavBar/>
      <CartContainer/>
    </div>
  );
}

export default App;
