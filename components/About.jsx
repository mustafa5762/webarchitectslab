import React from 'react'

function About() {
  return (
    <div className='px-[3vw] lg:px-[8vw]'>
        <h1 className="text-[#025464] mt-6 text-4xl lg:text-7xl open-sans font-medium">Our <span className="recoleta">passion</span> became <br /> <span className="recoleta">our</span> profession</h1>
        <div className="flex justify-end flex-wrap">
          <div className="flex mr-12">
            <svg width="233" height="121" viewBox="0 0 233 121" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1C24.1778 10.741 47.0701 20.9782 69.1085 33.1274C92.4583 45.9995 115.893 61.3548 132.06 83.0048C137.065 89.7066 142.941 98.5964 142.819 107.411C142.742 112.934 135.615 117.475 131.082 118.815C123.229 121.138 113.118 119.82 105.652 116.818C99.8574 114.489 89.8256 108.254 89.8256 100.977C89.8256 88.2399 117.102 86.4402 124.369 85.6229C160.566 81.5519 197.278 87.3847 232 97.3822" stroke="#E57C23" strokeWidth="2" strokeLinecap="round" style={{ strokeDashoffset: '0px' }}></path>
            </svg>
          </div>
          <p className="w-full lg:w-3/6 open-sans text-base mt-6 lg:text-[21px] text-[#025464] leading-normal">
            Our dedicated team operates as a specialized web development agency delivering tailored solutions that align with your goals. Partner with a professional website development company that understands your brands unique identity providing custom website design and development services that make you stand out. In the dynamic landscape of the online world trust our expertise as a web development agency to propel your brand forward with cutting edge strategies and designs.
          </p>
        </div>
    </div>
  )
}

export default About