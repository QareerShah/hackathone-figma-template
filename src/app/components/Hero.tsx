import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Hero = () => {
  return (
    <main className="w-full mb-11">
      {/* Text */}
      <div className="bg-gray-200 text-center p-1 md:p-3">
        <p className="text-[13px] md:text-[15px] font-semibold">Hello Nike App</p>
        <p className="text-[12px] md:text-[13px]">
          Download the app to access everything Nike.{" "}
          <Link href="#" className="font-semibold underline">
            Get Your Great
          </Link>
        </p>
      </div>

      {/* Hero image */}
      <div className="flex justify-center w-[90%] mx-auto">
        <Image
          src="/images/Image.png"
          alt="hero-image"
          width={1344}
          height={700}
        />
      </div>


                      {/* Heading text */}
           
                      <div className="text-center mt-10 w-[90%] mx-auto">
  <p className="font-medium">First Look</p>
  <h1 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-[25px] font-medium">Nike Air Max Pulse</h1>
  <p className="lg:text-[13px] md:text-[12px] sm:text-[10px] text-[9px] ">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
    —designed to push you past your limits and help you go to the max.
  </p>
</div>

                           {/* Buttons */}
<div className="flex justify-center items-center  mt-8 space-x-7 text-white lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]">
  <button className="bg-black rounded-full p-3 w-[139px] sm:w-[120px]">Notify Me</button>
  <button className="bg-black rounded-full p-3 w-[139px] sm:w-[120px]">Shop Air Mask</button>
</div>


                
                            {/* carousel */}

<div className="flex  justify-between items-center w-[90%] mx-auto mt-10 ">
  <h2 className="lg:text-[24px] md:text-[22px] sm:text-[20px] text-[19px] font-medium">Best of Air Max</h2>
  <p className="font-semibold lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] ml-auto">Shop</p>
  
  {/* Arrow Buttons */}

         
  <div className='flex justify-end space-x-4 items-center ml-5 '> 
                       <button className='rounded-full bg-slate-200 p-2'>
                       <FaArrowLeft className='text-black' />
                        </button>
             
                       <button className='rounded-full bg-slate-200 p-2'>
                        <FaArrowRight className='text-black' />
                       </button>
                       </div>
  
</div>
                   
                   
                          {/* pictures */}

 <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-[90%] mx-auto mt-7  space-x-4 justify-between' >

                       {/* card 1 */}
               <div >
               <Image src="/images/Image1.png" alt='image1' width={400} height={400} className='w-full object-contain'/>
               <div className='flex justify-between items-center mx-1 font-bold mt-5'>
                <p>Nike Air Max Pulse</p>
                <p>₹ 13 995</p>
               </div>
               <p className='mx-1 font-semibold text-black opacity-60'>Men&apos;s Shoes</p>
               </div>


                   {/* card 2 */}
                   <div >
               <Image src="/images/Rectangle14.png" alt='image1' width={400} height={400} className='w-full object-contain'/>
               <div className='flex justify-between items-center mx-1 font-bold mt-5'>
                <p>Nike Air Max Pulse</p>
                <p>₹ 13 995</p>
               </div>
               <p className='mx-1 font-semibold text-black opacity-60'>Women&apos;s Shoes</p>
               </div>



                   {/* card 3 */}
                   <div >
               <Image src="/images/Image2.png" alt='image1' width={400} height={400} className='w-full object-contain'/>
               <div className='flex justify-between items-center mx-1 font-bold mt-5'>
                <p>Nike Air Max Pulse</p>
                <p>₹ 13 995</p>
               </div>
               <p className='mx-1 font-semibold text-black opacity-60'>Women&apos;s Shoes</p>
               </div>



                   {/* card 4 */}
                   <div >
               <Image src="/images/Rectangle.png" alt='image1' width={400} height={400} className='w-full object-contain'/>
               <div className='flex justify-between items-center mx-1 font-bold mt-5'>
                <p>Nike Air Max Pulse</p>
                <p>₹ 13 995</p>
               </div>
               <p className='mx-1 font-semibold text-black opacity-60'>Men&apos;s Shoes</p>
               </div>

            </div>   

    </main>
  );
};

export default Hero;
