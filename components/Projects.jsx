import { PlusIcon } from 'lucide-react'
import React from 'react'

const projects = [
    {
        name: "Ahmediya Facts",
        image: "https://th.bing.com/th/id/OIG.rSYT2DxcHJq42mlxwI5M?pid=ImgGn",
        tags: "App . Blog"
    },
    {
        name: "The Print Refinery",
        image: "https://th.bing.com/th/id/OIG.k19H7ZxvNovTKBoAzHH.?pid=ImgGn",
        tags: "Web . Ecommerce"
    },
    {
        name: "Real Estate",
        image: "https://th.bing.com/th/id/OIG.x.X6zy8X6Wy14D5esNwQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        tags: "Web . Business"
    },
    {
        name: "Travel Agency",
        image: "https://th.bing.com/th/id/OIG.fxiGSwf7xIcOUWRy6FZE?pid=ImgGn",
        tags: "Web . Business"
    },
]



function Projects() {
  return (
    <div className='mt-80 px-[3vw] lg:px-[6vw]'>
        <h1 className="text-4xl lg:text-7xl text-[#510188] open-sans font-medium">Shall we <span className="recoleta">show</span> you <br /> <span className="recoleta">what</span> we do?</h1>
        <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-28">
                {
                    projects.map(project =>
                        <div key={project.name}>
                            <div>
                                <img className='rounded-md' src={project.image} alt="" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-2xl lg:text-3xl text-[#510188]">{project.name}</h3>
                                <h4 className="open-sans text-[#510188]">{project.tags}</h4>
                            </div>
                        </div>    
                    )
                }
            </div>
        </div>

        <div className="mt-20 flex justify-center relative">
            <div className="w-16 h-16 border text-[#510188] border-[#510188] rounded-full flex justify-center items-center">
                <PlusIcon/>
            </div>
            <div className="absolute -bottom-full left-1/3">
                <h3 className='hwf text-[#E57C23] text-2xl uppercase tracking-wide'>View More projects</h3>
            </div>
        </div>
    </div>
  )
}

export default Projects