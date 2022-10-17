import React from 'react'

export const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className='shawow min-h-[200px]  bg-slate-900'>
        <img src={IMGPATH + props.image} alt="" className='w-full'/>
        <div className='flex justify-around px-2 items-center'>
            <span className='text-2xl text-white'>{props.title}</span>
            
        </div>

        <div className='flex justify-around px-2 items-center pt-2' id='box'>
            <span className='text-xl text-white'>{props.relise}</span>
            <span className='text-xl  text-yellow-700 font-bold'>{props.rating} /10</span>
            
        </div>

    </div>
  )
}
