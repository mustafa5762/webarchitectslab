import React from 'react'
import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <>
        <div className="web-architects-hero-section flex justify-center mt-20 lg:mt-32 px-20 min-h-screen">
            <div className='w-full text-center'>
                <h1 className="text-[#025464] text-5xl lg:text-8xl leading-tighter">
                    Crafting Innovative Solutions for the Digital World
                </h1>
                <div className="mt-20 flex justify-end">
                    <h3 className="text-[#E57C23] text-xl lg:text-3xl">App. Web. Ecommerce. Business.</h3>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <Marquee speed={10} className='overflow-hidden'>
                    <h1 className='text-7xl stroke'>Web Architects . Web Architects . Web Architects . Web Architects . Web Architects . Web Architects . Web Architects . Web Architects . </h1>
                </Marquee>
            </div>
            <div className="absolute bottom-[40%] left-[13%] hidden lg:flex">
                <h3 className='hwf text-[#E57C23] text-2xl uppercase'>Yes we do it</h3>
            </div>
        </div>
    </>
  )
}

export default Hero