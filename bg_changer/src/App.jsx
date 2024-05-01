import { useState } from 'react'

import './App.css'


function App() {

const [color,setColor]  = useState("color");
 

  return (
    <>
    <div style={{background:color}} className=" flex justify-center py-10 items-end w-screen h-screen bg-slate-500">
    <div className=" bg-white rounded-full pt-1 pb-1 w-[500px] h-[50px] flex justify-center gap-4 ">
    <button  
    onClick={() => setColor('red')}
    className=' text-white bg-red-500' >red</button>
    <button 
     onClick={() => setColor('green')}
    className=' text-white bg-green-500'>green</button>
    <button
     onClick={() => setColor('black')}
    className=' text-white bg-black'>black</button>

    </div>


    </div>
    </>
  )
}

export default App
