import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import OrderSummary from './Component/OrderSummary';
import NoMatch from './Component/NoMatch';
import Prodcut from './Component/Product';
import Product from './Component/Product';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='Product' element={<Product/>}/>


    </Routes>
    </>
  );
}

export default App;
