import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Aboutus from './pages/Aboutus'
import ProductCard from './components/ProductCard'
import axios from "axios"
import { CartProvider } from './context/CartContex.jsx'
import SinglePage from './pages/SinglePage.jsx'


const App = () => {

  const [products, setProducts] = useState([]);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://dummyjson.com/products");
        console.log(result.data.products, "response");
        setProducts(result.data.products
        );
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);



  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/' element={<Home products={products}  />} />
          <Route path='/product' element={<ProductCard products={products}/>} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/single/:id"  element={<SinglePage/>}></Route>
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App