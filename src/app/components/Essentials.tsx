import React from 'react'
import Image from 'next/image' 

const Essentials = () => {
  return (
    <main className='w-[90%] mx-auto '>
        {/* Heading text */}
           
        <div className="text-center mt-10 w-[90%] mx-auto">
  
  <h1 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-[25px] font-medium">FLIGHT ESSENTIALS</h1>
  <p className="lg:text-[13px] md:text-[12px] sm:text-[10px] text-[9px] ">
  Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
  </p>
</div>

                           {/* Buttons */}
<div className="flex justify-center items-center  mt-8 text-white lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]">
  <button className="bg-black rounded-full p-3 px-[50px] ">Shop</button>
</div>



                                  {/* Grid section */}

        <h2 className='lg:text-[27px] md:text-[22px] text-[19px] font-bold'>The Essentials</h2>       

        {/* pictures */}

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-4 justify-between mt-7">
  {/* Card 1 */}
  <div className="w-[400px] h-[400px]">
    <Image
      src="/images/Image10.png"
      alt="image1"
      width={400}
      height={400}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Card 2 */}
  <div className="w-[400px] h-[400px]">
    <Image
      src="/images/Image9.png"
      alt="image1"
      width={400}
      height={400}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Card 3 */}
  <div className="w-[400px] h-[400px]">
    <Image
      src="/images/Image12.png"
      alt="image1"
      width={400}
      height={400}
      className="w-full h-full object-cover"
    />
  </div>
</div>

 

                              {/* text flex section */}
<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mt-11 p-[100px] justify-between items-center mx-auto">
  {/* 1st part */}
  <div>
    <h2 className="text-[19px] font-medium">Icons</h2>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Air Force 1</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Huarache</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Air Max 90</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Air Max 95</p>
  </div>

  {/* 2nd part */}
  <div>
    <h2 className="text-[19px] font-medium">Shoes</h2>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">All Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Custom Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Jordan Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Running Shoes</p>
  </div>

  {/* 3rd part */}
  <div>
    <h2 className="text-[19px] font-medium">Clothing</h2>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">All Clothing</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Modest Wear</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Hoodies & Pullovers</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Shirts & Tops</p>
  </div>

  {/* 4th part */}
  <div>
    <h2 className="text-[19px] font-medium">Kids&#39;</h2>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Infant & Toddler Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Kids&#39; Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Kids&#39; Jordan Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Kids&#39; Basketball Shoes</p>
  </div>
</div>



    </main>
  )
}

export default Essentials