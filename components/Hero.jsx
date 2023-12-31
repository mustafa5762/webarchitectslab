import React from 'react'
import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <>
        <div className="web-architects-hero-section flex justify-center mt-20 lg:mt-32 px-20 min-h-screen">
            <div className='w-full text-center'>
                <h1 className="text-amber-950 text-5xl lg:text-8xl leading-tighter">
                    We Make Creative <br /> Things Everyday
                </h1>
                <div className="mt-20 flex justify-end">
                    <h3 className="text-[#CE5A67] text-xl lg:text-3xl -rotate-2">App. Web. Ecommerce. Business.</h3>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <Marquee speed={10} className='overflow-hidden'>
                    <h1 className='text-7xl stroke'>Web Architects . Web Architects . Web Architects . Web Architects . Web Architects . Web Architects . Web Architects . Web Architects . </h1>
                </Marquee>
            </div>
            <div className="absolute bottom-[40%] left-[13%] hidden lg:flex">
                <h3 className='hwf text-[#CE5A67] text-2xl uppercase'>Yes we do it</h3>
            </div>
        </div>

        <div>
            <video autoPlay muted loop src="https://cdn.cuberto.com/cb/showreel/1.mp4"></video>
        </div>
    </>
  )
}

export default Hero