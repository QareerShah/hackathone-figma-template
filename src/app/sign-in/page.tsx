import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className="w-[80%] mx-auto">
    <div className="flex flex-col justify-center items-center text-center">
      <Image src="/images/Frame1.png" alt="logo-image" width={65} height={65} className="mb-1" />
      <h1 className="font-bold text-[18px] leading-relaxed tracking-wide">
        YOUR ACCOUNT <br /> FOR EVERYTHING <br />NIKE
      </h1>
      <input type="email" placeholder='Email adress' className='border-2 p-2 text-left w-[324px] h-[40px] text-[16px] mt-6 outline-none' />
      <input type="password" placeholder='Password' className='border-2 p-2 text-left w-[324px] h-[40px] text-[16px] mt-6 outline-none' />
      <div className="flex items-center gap-5  text-[12px]">
     <input type="checkbox" className="" />Keep me signed in
    <p className="ml-4 cursor-pointer">Forgotten your password?</p>
    </div>

    </div>
  </main>
  
  )
}

export default page