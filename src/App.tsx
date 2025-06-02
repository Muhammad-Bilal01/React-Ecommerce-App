import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './components/Navbar';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App;