import React from 'react'

const Card = (props) => {
  return (
    
    <div className="h-auto bg-slate-800 p-2 rounded-md hover:opacity-85 relative group">
        <button className='absolute bg-amber-500 py-2 px-4 rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out active:scale-105 text-white'>Open Now--</button>

        <img src={props.image} alt="#" className="object-cover rounded-md"/>
        
        <p className="text-white text-center mt-3">{props.caption}</p>
       </div>
  )
}

export default Card
