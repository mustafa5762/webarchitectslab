import React from 'react'
import Marquee from "react-fast-marquee";


function Hero() {
  return (
    <>
        <div className="web-architects-hero-section mt-20 lg:mt-40 min-h-screen">
            <div className='text-center'>
                <h1 className='text-[#FF3B00] text-4xl leading-snug'>Helping Our Partners Build<br /> Brands That Shine</h1>
                <Marquee gradient={false} speed={20} className='overflow-hidden mt-16'>
                    <h1 className='text-7xl text-[#510188]'>/ 3D / Branding / Development / Design / 3D / Branding / Development / Design </h1>
                </Marquee>
                <Marquee direction='right' gradient={false} speed={20} className='overflow-hidden mt-8'>
                    <h1 className='text-7xl text-[#510188]'>/  Conduction  /  Research  /  Direction  /  Conduction  /  Research  /  Direction  </h1>
                </Marquee>
            </div>

            <div className="relative mt-60 rotate-3 skew-x-6">
              
              <div className="grid grid-cols-5 space-x-4">
                <div>
                  <img src="https://assets-global.website-files.com/5837424ae11409586f837994/6297f8641bf65f0e3b836ada_Kam-p-800.jpeg" alt="" />
                </div>
                <div>
                  <img src="https://assets-global.website-files.com/5837424ae11409586f837994/6297f75e7e5a7c30fd40bd17_Kam-p-800.jpeg" alt="" />
                </div>
                <div>
                  <img src="https://assets-global.website-files.com/5837424ae11409586f837994/6297f8d36f3e6226d4056674_Kam-p-800.jpeg" alt="" />
                </div>
                <div>
                  <img src="https://assets-global.website-files.com/5837424ae11409586f837994/61251d9bf5146e048343e5cf_Kam-3-p-800.jpeg" alt="" />
                </div>
                <div>
                  <img src="https://assets-global.website-files.com/5837424ae11409586f837994/61251da595067590415ca231_Kam-4-p-500.jpeg" alt="" />
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F4F0E6] to-transparent"></div>
            </div>
        </div>
    </>
  )
}

export default Hero