import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;