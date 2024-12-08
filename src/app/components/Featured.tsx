import React from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Featured = () => {
  return (
    <main className='mt-7 w-[90%] mx-auto '>
        <h2 className='lg:text-[27px] md:text-[22px] text-[19px] font-bold'>Featured</h2>

        <div className='mt-6'>
            <Image src="/images/Image3.png" alt='featured-img' width={1344} height={700}/>
        </div>



                                  

                     {/* geer up heading */}


     <div>
     <h2 className='lg:text-[27px] md:text-[22px] text-[19px] font-semibold items-center my-8' >Geer Up</h2>
        </div>      


                     {/* arrow button section */}
     <div className='grid grid-cols-2 space-x-7 justify-evenly items-center'>

                     

                     {/* 1st section */}
<div className="col-span-1 flex items-center justify-center space-x-4">
  {/* Text */}
  <span>Shop Men&apos;s</span>

  {/* Arrow buttons */}
  <div className="flex space-x-2">
    <button className="rounded-full bg-slate-200 p-2">
      <FaArrowLeft className="text-black" />
    </button>
    <button className="rounded-full bg-slate-200 p-2">
      <FaArrowRight className="text-black" />
    </button>
  </div>
</div>



                            {/* 2nd section */}
                       
           {/* 1st section */}
<div className="col-span-1 flex items-center justify-center space-x-4">
  {/* Text */}
  <span>Shop Women&apos;s</span>

  {/* Arrow buttons */}
  <div className="flex space-x-2">
    <button className="rounded-full bg-slate-200 p-2">
      <FaArrowLeft className="text-black" />
    </button>
    <button className="rounded-full bg-slate-200 p-2">
      <FaArrowRight className="text-black" />
    </button>
  </div>
</div>



             </div>




               {/* pictures */}

 <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  mt-7  space-x-4 justify-between' >

{/* card 1 */}
<div className=' '>
<Image src="/images/Image7.png" alt='image1' width={400} height={400} className='w-full object-contain'/>
<div className='flex justify-between items-center mx-1 font-bold mt-5'>
<p>Nike Air Max Pulse</p>
<p>₹ 13 995</p>
</div>
<p className='mx-1 font-semibold text-black opacity-60'>Men&apos;s Shoes</p>
</div>


{/* card 2 */}
<div className=' '>
<Image src="/images/Image4.png" alt='image1' width={400} height={400} className='w-full object-contain'/>
<div className='flex justify-between items-center mx-1 font-bold mt-5'>
<p>Nike Air Max Pulse</p>
<p>₹ 13 995</p>
</div>
<p className='mx-1 font-semibold text-black opacity-60'>Women&apos;s Shoes</p>
</div>



{/* card 3 */}
<div className=' '>
<Image src="/images/Image6.png" alt='image1' width={400} height={400} className='w-full object-contain'/>
<div className='flex justify-between items-center mx-1 font-bold mt-5'>
<p>Nike Air Max Pulse</p>
<p>₹ 13 995</p>
</div>
<p className='mx-1 font-semibold text-black opacity-60'>Women&apos;s Shoes</p>
</div>



{/* card 4 */}
<div >
<Image src="/images/Image5.png" alt='image1' width={400} height={400} className='w-full object-contain'/>
<div className='flex justify-between items-center mx-1 font-bold mt-5'>
<p>Nike Air Max Pulse</p>
<p>₹ 13 995</p>
</div>
<p className='mx-1 font-semibold text-black opacity-60'>Men&apos;s Shoes</p>
</div>

</div>   

    </main>
  )
}

export default Featured