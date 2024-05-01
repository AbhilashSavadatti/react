import React from 'react'

function Card({username,password=123456}){
    

return(
<>
<div className="">Card</div>

<h1 className='bg-green-500 text-white p-4 rounded-lg' >{username}</h1>
<div className='mt-10 bg-slate-600 h-10 flex justify-center items-center text-white'>{password}</div>

</>

)

}


export default Card