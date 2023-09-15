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
      <div className="h-screen grid gap-4  grid-cols-3 mb-6 ml-10">
      {data.map(prject => (
         <div >
         <div>
         <Image src={prject.img} />
         </div>
            <div>
            <h1>{prject.title}</h1>           
            </div>
            <button>
              <Link href={prject.view}>View</Link>
            </button>
       </div>
      ))}
      </div>
     
    </div>
  )
}

export default page
