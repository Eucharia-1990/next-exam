"use client"

import React, { useState, useEffect } from 'react';
import styles from './indivproduct.module.css';
import Image from 'next/image';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';
import { useParams } from 'next/navigation';

const Indivprod = ({ id }) => {
  const [product, setProduct] = useState(null);
  const {productId} = useParams();
  

  
  useEffect(() => {
    // Fetch data for the individual product using the provided id
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        // Check if the response is successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [productId]);

  console.log(productId);

  if (!product) {
    return <div>Loading...</div>; // Add a loading state while fetching data
  }

  return (
    <div className={styles.main}>
      <div className='flex flex-col gap-y-4 lg:flex-row gap-x-5'>
        <div className='flex-1'>
          {/* Use the product.thumbnail from the API response */}
          <Image
            src={product.thumbnail}
            width={200}  // Set your desired width
            height={200} // Set your desired height
            alt='fade-img'
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            className='w-[100%] h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[60vh]'
          />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <p>{product.title}</p>
          <div className='flex items-center gap-2 md:gap-4'>
            <div className='flex items-center gap-2 md:gap-3 lg:gap-2'>
              <FaStar
                color='yellow'
                className='w-[12px] h-[12px] md:w-[25px] md:h-[25px]  lg:w-[20px] lg:h-[20px]'
              />
              {/* ... additional star icons */}
              <FaRegStar
                color='yellow'
                className='w-[12px] h-[12px] md:w-[25px] md:h-[25px]  lg:w-[20px] lg:h-[20px]'
              />
            </div>
            <p>{product.rating} reviews</p>
          </div>
          <p>${product.price}</p>
          <div className='flex items-center gap-2'>
            <p>Availability:</p>
            <p className='text-blue'>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          </div>
          <div className='pt-10 md:pt-40'>
            <div className={styles.line}></div>
          </div>
          <div className='flex items-center gap-4'>
                    <div>
                        <div className='bg-blue rounded-full h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[20px] lg:w-[20px]'></div>
                    </div>
                    <div>
                        <div className='bg-green rounded-full h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[20px] lg:w-[20px]'></div>
                    </div>
                    <div>
                        <div className='bg-orange-400 rounded-full h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[20px] lg:w-[20px]'></div>
                    </div>
                    <div>
                        <div className='bg-black rounded-full h-[15px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[20px] lg:w-[20px]'></div>
                    </div>
                    </div>

          <div className='flex items-center gap-4 pt-10'>
            <div>
              <button className='bg-blue text-white py-2 px-2 md:px-4 md:py-4 rounded-lg text-sm md:text-lg lg:text-base'>
                Select Options
              </button>
            </div>

            <div className='flex items-center gap-2 md:gap-4'>
              <div className='bg-slate-100 rounded-full h-[30px] w-[30px] md:h-[50px] md:w-[50px] lg:h-[40px] lg:w-[50px] flex items-center justify-center '>
                <CiHeart className={styles.mobicon} />
              </div>
              <div className='bg-slate-100 rounded-full h-[30px] w-[30px] md:h-[50px] md:w-[50px]  lg:h-[40px] lg:w-[40px] flex items-center justify-center '>
                <FiShoppingCart className={styles.mobicon} />
              </div>
              <div className='bg-slate-100 rounded-full h-[30px] w-[30px] md:h-[50px] md:w-[50px]  lg:h-[40px] lg:w-[40px] flex items-center justify-center '>
                <FaEye className={styles.mobicon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indivprod;
