import Link from "next/link";


export default function Home() {
  return (
   <main className="container h-96 bg-white shadow items-center m-auto justify-center flex flex-col">
      <div className="mb-4">
        <p className="text-lg flex justify-center gap-1">Hello, i am  <span className="text-orange-600 text-xl font-bold">Moha</span></p> 
        <h1 className="font-bold md:text-3xl ">Freelancer Next.js/React Developer</h1>
      </div>
      <div className="gap-2 p-4  text-white">
        <button className="mt-2">
          <Link href={"/projects"} className="bg-orange-400 p-4 rounded mr-2 hover:bg-purple-400">Projects</Link>
          <Link href={"/about"} className="bg-slate-400 p-4 rounded  hover:bg-purple-400">About us</Link>
        </button>
      </div>
   </main>
  )
}

