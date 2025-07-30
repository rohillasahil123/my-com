import React from 'react'
import Hero from '../components/Hero'
import shoes from "../assets/shoes.png"
import shoes1 from "../assets/shoes1.png"

const Home = () => {
  return (
    <div className='h-auto w-full pt-18 '>
    <div className='h-[100vh] w-full flex justify-around  items-center  ' >
        <div className='w-[100%] h-[80%] bg-white '>
          <Hero />  
        </div>
      </div>
    </div>
  )
}

export default Home