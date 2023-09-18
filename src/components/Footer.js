import React from 'react'
import { FaHome } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-slate-400 h-full mb-0 flex justify-around items-center grid md:grid-cols-2 pl-14 '>
        <div className=''>
        <div className='text-white '>
            <div className='flex my-2'>
            <FaHome size={20} />
            <h3 className='pl-2'>mugdisho somalia</h3>
           
            </div>
             <div className='flex my-2'>
            <FaHome size={20}/>
            <h3 className='pl-2'>mugdisho somalia</h3>
            </div>
            <div className='flex my-2'>
            <FaHome size={20} />
            <h3 className='pl-2'>mugdisho somalia</h3>
            </div>
        </div>
        </div>

        <div className='sm:py-6 pt-2'>
            <h1 className='font-bold'>About the my freelancer</h1>
            <p className='text-slate-200'>Im React/Next.js/Node.js/ <br /> and ETC. Deeveloper
              I create <br/> responsive secure websites for my clients</p>
        </div>
       
    </div>
  )
}

export default Footer
