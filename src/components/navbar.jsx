import React from 'react'

const Navbar = () => {

  let toggle=(e)=>{
    console.log("button was Clicked");
    
  }

  return (
     <div className="h-16 w-full bg-blue-950 rounded flex justify-between items-center p-4 text-white md:justify-start md:gap-5">
        <span className="text-white text-xl cursor-pointer hover:opacity-85">GALLERY</span>
          
          <input type="search" placeholder="Search..." className="border py-1 px-4 outline-none w-full rounded-2xl bg-white text-black hidden md:block"/>
          <button className="p-2 whitespace-nowrap cursor-pointer hidden md:block hover:opacity-85">Sign up</button>
          <button className="p-2 cursor-pointer hidden md:block text-red-600 hover:opacity-85">Login</button>

        <button className="text-white text-4xl cursor-pointer md:hidden" onClick={(e)=>{
            toggle()
        }}>≡</button>
      </div>
  )
}

export default Navbar
