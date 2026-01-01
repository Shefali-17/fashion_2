import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Info_1 from './Info_1'
import Info_2 from './Info_2'
import Middle_info_img  from './Middle_info_img'
import Last from './Last'
const Parent = () => {
  return (
    <div className="bg-black min-h-screen w-[90%] mx-auto">
        <Navbar />
        <Hero />
        <Info_1/>
        <Info_2 />
        <Middle_info_img />
        <Last />
    </div>
  )
}

export default Parent
