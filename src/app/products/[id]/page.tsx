'use client';

import { useParams } from 'next/navigation';
import { productsData } from '../data';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';

const ProductDetails = () => {
  const { id } = useParams();  

  // Find the product using the id
  const product = productsData.find((item) => item.id === parseInt(id as string));

  // If product is not found
  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="w-[80%] mx-auto p-4 my-[100px]">
  <div className="flex flex-col md:flex-row gap-[100px] items-start text-center md:text-left">
    <Image src={product.image} alt={product.name} width={450} height={450} className="rounded-lg mx-auto md:mx-0" />
    <div className="md:text-left">
      <h1 className="text-[35px] font-medium mt-4">{product.name}</h1>
      <p className="w-full md:w-[370px] h-auto text-[15px] tracking-wide leading-relaxed text-left mx-auto mt-6">{product.detail}</p>
      <h2 className="font-medium text-[30px] text-left mt-6">{product.price}</h2>
      <button className="flex items-center justify-center gap-2 text-[14px] mt-4 text-white font-medium bg-black p-1 px-5 py-2 hover:bg-gray-300 hover:text-black rounded-full w-full md:w-auto mx-auto md:mx-0">
        <span><FaCartShopping /></span>Add to Cart
      </button>
    </div>
  </div>
</div>


  );
};

export default ProductDetails;
