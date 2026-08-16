import { useEffect, useState } from "react"
import Menuitems from "./MenuItems"


const Header = () => {
    const [sidebarOpen, setSideBarOpen]=useState(false);
    useEffect(()=>{
    const handleResize ={}={
        if(window.innewWidth >= 640){
            setSideBarOpen(false)
        }
    }    
    window.addEventListener("resize",handleResize)
    handleResize()
    return ()=> window.removeEventListener("resize",handleResize)
    },[])
  return (
    <>
    <header className="hidden h-12 md:flex items-center px-10 py-4 w-full fixed top-0 left-0 bg-linear-to-r from-indigo via-purple-800 to-pink-800 backdrop-blur-md shadow-xl z-50">
     <div className=" items-center gap-4 lg:flex hidden">
        <Rocket className= " w-8 h-8 text-cyan-400 animate-pulse "/>
        <h1 className="text-white font-bold text-xl tracking-widest " >New-Shop </h1>
        
        </div>  
        <div className="flex-1 flex-justify lg:justify-end" >
            <Menuitems isMobile={false}/>

            </div> 
    </header>
    <header className="md:hidden h-12 flex justify-between items-center px-4 py-4 w-full fixed top-0 left-0 bg-linear-r from-indigo-900 via-purple-900 to-pink-900 backdrop-blur-md shadow-xl ">
  <div className=" items-center gap-2">
        <Rocket className= " w-8 h-8 text-cyan-400 animate-pulse "/>
        <h1 className="text-white font-bold text-xl tracking-widest " >New-Shop </h1>
        
        </div> 
        <button onClick={()=> setSideBarOpen(true)} className="text-white p-2 rounded-lg ">
            <Menu className="w-8 h-8 cursor-pointer "/>

        </button>

    </header>


    
    </>
   
  )
}

export default Header
