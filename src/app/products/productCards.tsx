import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productsData } from './data';

const ProductCards = () => {
  return (
    <main>
      <div className="w-[90%] mx-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {productsData.map((product) => {
          return (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="rounded-lg cursor-pointer">
                <Image
                  src={product.image}
                  alt="product-Image"
                  width={348}
                  height={348}
                  className="w-full"
                />
                <h1 className="text-red-700 mt-3 text-[15px] font-medium">{product.title}</h1>
                <p className="text-black text-[15px] mt-1 font-medium">{product.name}</p>
                <p className="text-black opacity-70 text-[15px] mt-1">{product.text}</p>
                <p className="text-black opacity-70 text-[15px] mt-1">{product.colors}</p>
                <p className="text-black text-[15px] mt-5 font-medium">{product.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default ProductCards;
