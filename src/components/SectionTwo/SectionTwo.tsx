"use client"

import React, { useState, useEffect } from 'react';
import Sect from '../../../public/imgs/sect.jpeg'
import Stool from '../../../public/imgs/stool.jpeg'
import Cup from '../../../public/imgs/cup.jpeg'
import Glass from '../../../public/imgs/glass.png'
import Lamp from '../../../public/imgs/lamp.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const SectionTwo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setProducts(data.products);  // Update to use data.products
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log('Products state:', products);
  if (!products) {
    return <div>Loading...</div>; // Add a loading state while fetching data
  }



  return (

    <div>
      <div className='flex flex-col justify-center items-center gap-1 lg:gap-1 py-5'>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl text-slate-500 tracking-wide'>Featured Products</p>
        <p className='font-bold text-lg md:text-lg lg:text-xl xl:text-2xl tracking-wide'>BESTSELLER PRODUCTS</p>
        <p className='text-xs md:text-sm lg:text-base xl:text-lg text-slate-500 tracking-wide'>Problems trying to resolve the conflict between </p>
      </div>

      <div className='grid lg:grid-cols-5 gap-4 px-10 pt-1 pb-5 md:px-20 md:pt-2 md:pb-16 lg:px-20  '>
      {Array.isArray(products) && products.map(product => (
          <Link key={product.id} href={`/product/${product.id}`}>
          <div key={product.id} className='flex flex-col items-center gap-1 hover:border border-b-slate-600 drop-shadow-lg'>
            <div className='' style={{ width: '100%', height: '30vh' }}>
              <Image
                src={product.thumbnail}
                width={200}  // Set your desired width
                height={200} // Set your desired height
                alt='fade-img'
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
           
            <div className=' h-[21vh] md:h-[18vh] lg:h-[50vh] xl:h-[30vh] pt-3'>
            <p className='text-xs md:text-xl lg:text-sm text-center h-[5vh] md:h-[4vh] lg:h-[10vh] xl:h-[6vh] '>{product.title}</p>
            <p className='text-slate-500 text-xs md:text-xl lg:text-sm text-center h-[10vh] lg:h-[30vh] xl:h-[20vh]'>{product.description}</p>
            <div className='flex flex-row justify-center items-center gap-2'>
              <p className='text-slate-500 text-xs md:text-xl lg:text-sm'>{`$${product.price}`}</p>
              <p className='text-xs md:text-xl lg:text-sm text-green'>{`$${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}`}</p>
            </div>
              </div>
          </div>
         </Link>
        ))}
      </div>
    </div>
  )
}

export default SectionTwo