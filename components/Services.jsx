import React from 'react'
import Marquee from 'react-fast-marquee'

function Services() {
    const services = ['Web','Business','App','Ecommerce']

  return (
    <div className='mt-40 px-[3vw] lg:px-[8vw]'>
        {services.map(service => 
            <div key={service} className='py-12 border-b border-[#CE5A67] flex items-center space-x-6'>
                <h3 className="text-4xl lg:text-7xl text-[#EF6262]">{service}</h3>
                <div className="border-l border-[#CE5A67] px-6 hidden">
                <Marquee speed={50} className='overflow-hidden'>
                    <h1 className='text-4xl lg:text-7xl stroke-orange'>{service} . {service} . {service} . {service} . {service} . {service} . {service} . {service} . {service} . {service} . {service} .</h1>
                </Marquee>
                </div>
            </div>
        )}
    </div>
  )
}

export default Services