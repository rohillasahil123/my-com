import React, { useEffect, useState } from 'react'
import hero from "../assets/hero.jpg"
import hero1 from "../assets/hero1.jpeg"
import hero2 from "../assets/hero2.png"
import hero3 from "../assets/hero3.jpg"

const Hero = () => {

    const photoData = [hero, hero1, hero2, hero3]
    const [index, setIndex] = useState(0)

    useEffect(()=>{
       const time = setInterval(()=>(
            setIndex((prev)=>(prev+1) % photoData.length)
        ) , 3000)
return()=>clearInterval(time)
    }, [photoData.length])



    return (
        <div className='  w-full h-[100%] relative overflow-hidden'>
            {
                photoData.map((photo, i) => (

                    i === index ? (

                        <img src={photo} key={i} alt="" className='w-full h-full object-cover transition-all duration-700' />


                    ) : null

                ))
            }


        </div>
    )
}

export default Hero