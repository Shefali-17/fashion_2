import React from 'react'

const Middle_info_img = () => {
  return (
    <div className='h-[45vh] w-[100%] flex  gap-5 mx-auto ml-4 mr-4 '>
        <div className='h-full w-1/2 bg-zinc-800 p-10 flex flex-col justify-center rounded-2xl'>
             <p className="text-gray-400 tracking-widest text-m mb-4">
          ABOUT
        </p>

        <h2 className="text-white text-3xl font-light mb-6 leading-tight">
          WHERE FASHION MEETS FREEDOM
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed">
          We believe fashion is an expression of individuality. We celebrate creativity 
          and originality by showcasing exclusive collections from independent designers. 
          Every piece is curated to inspire confidence and self-expression.
        </p>

        </div>

        <div className="h-[45vh] w-[47%] bg-zinc-800 bg-[url('https://images.unsplash.com/photo-1708946698101-ef6294db7cef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-centre bg-contain rounded-2xl">

        </div>
    </div>
  )
}

export default Middle_info_img