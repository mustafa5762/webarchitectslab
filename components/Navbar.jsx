import React from 'react'

function Navbar() {
  return (
    <div className='web-architects-navbar flex items-center justify-between px-[3vw] lg:px-[8vw] py-8 lg:py-12 w-full'>
        <div className="web-architects-logo text-xl lg:text-2xl text-[#025464]">Web Architects Lab</div>
        <div className="web-architects-menu-button button-to-open-menu">
          <div className="text-xl lg:text-2xl text-[#025464]">Menu</div>
        </div>

        <div className="hidden fixed top-0 left-0 h-screen w-full bg-gradient-to-br from-indigo-500 to-purple-500 z-50">
          <div className="p-40 space-y-8">
            <h3 className="text-white text-5xl">About</h3>
            <h3 className="text-white text-5xl">Services</h3>
            <h3 className="text-white text-5xl">Portfolio</h3>
            <h3 className="text-white text-5xl">Blog</h3>
            <h3 className="text-white text-5xl">Components</h3>
          </div>
        </div>
    </div>
  )
}

export default Navbar