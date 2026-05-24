import React from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";


const App = () => {

   const images = [
  {
    id: 1,
    caption: "Golden hour over the mountain peaks",
    img: "https://plus.unsplash.com/premium_photo-1779011154385-e961f567bf54?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    caption: "Serene forest path in autumn",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    caption: "Crystal clear ocean waves",
    img: "https://images.unsplash.com/photo-1779175731718-6068f854e853?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    caption: "Busy city streets at night",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    caption: "Wildflowers blooming in spring",
    img: "https://images.unsplash.com/photo-1778483154532-05d26c21e777?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    caption: "Desert dunes at sunset",
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    caption: "Snow-capped peaks in winter",
    img: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    caption: "Tropical waterfall in the jungle",
    img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    caption: "Starry night over the countryside",
    img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    caption: "Calm lake reflecting the sky",
    img: "https://images.unsplash.com/photo-1773332585698-cba3c91b73e4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

  return (
    <div className="w-full h-auto border-2 border-gray-600 bg-slate-950 p-3">
        <Navbar/>
      <div className="w-full h-auto gap-3 grid sm:grid-cols-2 md:grid-cols-3 md:h-auto mt-4">
       {images.map((item)=>{
        
        return <div key={item.id}>
          <Card image={item.img} caption={item.caption}/>
        </div>
       })}
      </div> 
    </div>
  );
};

export default App;
