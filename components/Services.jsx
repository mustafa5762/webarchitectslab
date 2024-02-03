import { MoveUpRight } from 'lucide-react'
import React from 'react'
import Marquee from 'react-fast-marquee'

function Services() {
    const services = ['Web','Business','App','Ecommerce']

  return (
    <div className='mt-80 px-[3vw] lg:px-[7vw]'>
        {services.map(service =>
            <div className='relative'>
            <div key={service} className='py-8 border-b-2 border-[#F6CCB8] border-opacity-50 grid grid-cols-2'>
                <h3 className="text-4xl lg:text-7xl text-[#FF3B00]">{service}</h3>
                
                <div className="flex justify-end">
                    <div className="w-16 h-16 border-2 text-[#FF3B00] border-[#F6CCB8] border-opacity-50 rounded-full flex justify-center items-center">
                        <MoveUpRight/>
                    </div>
                </div>
            </div>
            {
                service==="Ap" &&
                <div className="px-6 absolute top-0 left-0 h-full w-full bg-[#E57C23] flex items-center justify-center">
            <Marquee speed={50} className='overflow-hidden'>
                <h1 className='text-4xl lg:text-6xl text-white'>{service} . {service} . {service} . {service} . {service} . {service} . {service} . {service} . {service} . {service} . {service} .</h1>
            </Marquee>
            </div>
            }
            </div> 
        )}
    </div>
  )
}

export default Services