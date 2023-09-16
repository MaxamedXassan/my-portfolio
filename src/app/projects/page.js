import Image from "next/image"
import shoping from "../../../public/shoping.png"
import Link from "next/link"

const data = [
  {
    img: shoping,
    title: "Todo App",
    view: "http://localhost:3000/"
  },

  {
    img: shoping,
    title: "Portfolio",
    view: "http://localhost:3000/contact"
  },

  {
    img: shoping,
    title: "Portfolio",
    view: "http://localhost:3000/contact"
  },

  {
    img: shoping,
    title: "Portfolio",
    view: "http://localhost:3000/contact"
  },

  {
    img: shoping,
    title: "Portfolio",
    view: "http://localhost:3000/contact"
  },

  {
    img: shoping,
    title: "Portfolio",
    view: "http://localhost:3000/contact"
  },
]

const page = () => {
  return (
    <div className=" ">
      <h1 className="my-4 font-bold text-lg  flex flex-col items-center">Projects</h1>
      <div className=" flex justify-center ">
      <div className="h-screen grid gap-24  sm:grid-cols-2 md:grid-cols-3   ">
      {data.map(prject => (
         <div >
         <div>
         <Image src={prject.img} width={240} />
         </div>
            <div>
            <h1 className="mt-2 flex justify-center font-bold ">{prject.title}</h1>           
            </div>
            <div  className="bg-orange-400 hover:bg-purple-400 flex justify-center py-2 my-3">
            <button>
              <Link href={prject.view}>View</Link>
            </button>
            </div>
       </div>
      ))}
      </div>
      </div>
     
    </div>
  )
}

export default page
