import React from 'react'

function Comproject(props) {

    console.log(props.img)

  return (
  
    <a target="_blank" href={props.demo} >
    <div className='p-5 m-3 bg-black  text-gray-300 md:m-20' >
         <h1 className='text-xl mb-4 '>{props.title}</h1>
        <img src={props.img} alt="" />

    <p className='text-justify my-3'>{props.des}</p>
           <div className='flow-root w-full'>
            <button  className="float-right border-2 duration-300 bg-black border-gray-400 p-1 rounded-lg px-2 hover:bg-white hover:text-black hover:border-black" ><a href={props.code} > Code  </a></button>

           </div>
    </div>
    </a>

  )
}

export default Comproject