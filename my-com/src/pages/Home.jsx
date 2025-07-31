import React from 'react'
import Hero from '../components/Hero'
import shoes from "../assets/shoes.png"
import shoes1 from "../assets/shoes1.png"
import ProductCard from '../components/ProductCard'

const Home = ({products}) => {
  return (
    <div className='min-h-screen w-full pt-16 '>
    <div className='h-[100vh] w-full flex flex-col justify-around  items-center  ' >
        <div className='w-[100%] h-[80%] bg-white '>
          <Hero />  
        
        </div>
      </div>
   <ProductCard  products={products.slice(0,4)}/>
    </div>
  )
}

export default Home