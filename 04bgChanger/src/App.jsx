import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12
       inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3
         shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=>setcolor("Red")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: "red"}} 
          >Red</button>
          <button 
          onClick={()=>setcolor("green")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: "green"}} 
          >Green</button>
          <button 
          onClick={()=>setcolor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: "blue"}} 
          >Blue</button>
          <button 
          onClick={()=>setcolor("indigo")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: "indigo"}} 
          >indigo</button>
          <button 
          onClick={()=>setcolor("violet")}
          className="outline-none px-4 py-1 rounded-full text-black
           shadow-lg"
          style={{backgroundColor: "violet"}} 
          >violet</button>
          <button 
          onClick={()=>setcolor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black
           shadow-lg"
          style={{backgroundColor: "yellow"}} 
          >yellow</button>
          <button 
          onClick={()=>setcolor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: "orange"}} 
          >orange</button>
          <button 
          onClick={()=>setcolor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: "grey"}} 
          >grey</button>
          <button 
          onClick={()=>setcolor("Olive")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: "Olive"}} 
          >Olive</button>
          <button 
          onClick={()=>setcolor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: "purple"}} 
          >Purple</button>
          <button 
          onClick={()=>setcolor("Lavender")}
          className="outline-none px-4 py-1 rounded-full text-black
           shadow-lg"
          style={{backgroundColor: "Lavender"}} 
          >Lavender</button>
          <button 
          onClick={()=>setcolor("White")}
          className="outline-none px-4 py-1 rounded-full text-black
           shadow-lg"
          style={{backgroundColor: "White"}} 
          >White</button>
          <button 
          onClick={()=>setcolor("black")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: "black"}} 
          >Black</button>
      
          </div></div>
    </div>
  )
}

export default App
