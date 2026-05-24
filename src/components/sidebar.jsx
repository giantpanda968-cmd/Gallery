import React from 'react'

const Sidebar = ({ isOpen, setIsOpen }) => {


  return (
    <>
      {/* Dark background overlay */}

      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-10 
          ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar panel */}
      <div className={`fixed top-0 left-0 h-full w-55 bg-blue-950 text-white z-20 
        transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b border-blue-800">
          <span className="text-xl font-bold">GALLERY</span>
          <button
            className="text-2xl cursor-pointer hover:opacity-75"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col p-4 gap-4">
          <a href="#" className="hover:opacity-75">Home</a>
          <a href="#" className="hover:opacity-75">Gallery</a>
          <a href="#" className="hover:opacity-75">About</a>
          <hr className="border-blue-800"/>
          <button className="text-left hover:opacity-75">Sign up</button>
          <button className="text-left text-red-400 hover:opacity-75">Login</button>
        </nav>
      </div>
    </>
  )
}

export default Sidebar