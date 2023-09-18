import Image from 'next/image'
import code from "../../../public/code.png"

const page = () => {
  return (
    
     <div >
      <div className='flex justify-center m-6 font-bold'>
        <h1 className='text-2xl font-serif'>About Us</h1>
      </div>

        <div className='flex justify-around h-96 items-center gap-6 px-3'>
        <div className=' grid sm:grid-cols-2 gap-16'>
          <div>
            <h1 className='font-bold flex justify-center text-2xl mr-24 font-serif'>Who Am I?</h1>
            <p className='py-3 text-gray-400  font-thin '>Im React/Next.js/Node.js/ <br /> and ETC. Deeveloper
              I create <br/> responsive secure websites for my clients
            </p>
          </div>
          
          <div className=' rounded '>
              <Image src={code} className='rounded' />
          </div>          
          </div>
          </div>
     </div>
   
  )
}

export default page
