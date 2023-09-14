"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import {FaTimes, FaBars} from "react-icons/fa";

const navbar = () => {


const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);

  return (
    <>
    <nav className='flex justify-between mx-auto container shadow  bg-white items-center'>
        <div className='px-2'>
            <h1><Link href={"/"}>Moha</Link></h1>
            
        </div>
        <div className='w-1/3 flex justify-end'>
        <ul className=' hidden  gap-6  py-4 px-2  md:flex'>
            <li>
                <Link href={"/"}>Home</Link>
            </li>

            <li>
                <Link href={"/projects"}>Projects</Link>
            </li>

            <li>
                <Link href={"/contact"}>Contact</Link>
            </li>
        </ul>
        <div onClick={handleClick} className='md:hidden py-3 mx-2'> 
            {click ? (<FaTimes size={20} style={{color: "#000"}} />) : ( <FaBars size={20} style={{color: "#000"}} />)}       
        </div>      
        </div>
    </nav>
    {click && (
         <ul className='flex basis-full flex-col items-center gap-4 py-6 shadow'>
         <li>
             <Link href={"/"}>Home</Link>
         </li>

         <li>
             <Link href={"/projects"}>Projects</Link>
         </li>

         <li>
             <Link href={"/contact"}>Contact</Link>
         </li>
     </ul>
    )}
    </>
  )
}

export default navbar
