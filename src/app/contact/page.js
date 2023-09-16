import Image from 'next/image'
import code from "../../../public/code.png"

const page = () => {
  return (
    
     <div >
      <div className='flex justify-center m-6 font-bold'>
        <h1 className='text-2xl'>About Us</h1>
      </div>

        <div className='grid lg:grid-rows-2 bg-green-500'>
        <div className='flex flex-row h-screen items-center justify-around'>
          <div>
            <h1 className='font-bold bg-green-500 flex justify-center text-2xl'>Who Am I?</h1>
            <p className='py-3'>Im React/Next.js/Node.js/ <br /> and ETC. Deeveloper
              I create <br/> responsive secure websites for my clients
            </p>
          </div>
          <div>
            <h1 className='font-bold bg-green-500 flex justify-center text-2xl'>Who Am I?</h1>
            <p className='py-3'>Im React/Next.js/Node.js/ <br /> and ETC. Deeveloper
              I create <br/> responsive secure websites for my clients
            </p>
          </div>
          <div className=' rounded'>
              <Image src={code} className='rounded' />
          </div>          
          </div>
          </div>
     </div>
   
  )
}

export default page
