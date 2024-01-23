"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Two from '../../../public/imgs/newtwo.jpeg'
import ho from '../../../public/imgs/ho.png'
import ly from '../../../public/imgs/ly.png'
import ta from '../../../public/imgs/ta.png'
import str from '../../../public/imgs/str.png'
import aws from '../../../public/imgs/aws.png'
import smil from '../../../public/imgs/smil.png'
import styles from './sectionseven.module.css'

const SectionSeven = () => {
    const [products, setProducts] = useState([]);

    const details = [
        {
            id:1,
            pic:ho,
        },
        {
            id:2,
            pic:ly,
        },
        {
            id:3,
            pic:ta,
        },
        {
            id:4,
            pic:str,
        },
        {
            id:5,
            pic:aws,
        },
        {
            id:6,
            pic:smil,
        },
    ]

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
  return (
    <div className={styles.main}>
        <p>BESTSELLER PRODUCTS</p>
        <div className='grid lg:grid-cols-4 gap-4 px-10 pt-1 pb-5 md:px-20 md:pt-2 md:pb-16 lg:px-20 '>
      {Array.isArray(products) && products.map(product => (
          <div key={product.id} className='flex flex-col items-center gap-1'>
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
        ))}
      </div>
      <div className='grid justify-center lg:grid-cols-6 lg:justify-center gap-2 py-10 '>
        {
            details.map((datum) => (
                <div key={datum.id} style={{ width: '100%', height: '10vh' }} className='flex items-center justify-center w-[100%]' >
                    <Image src={datum.pic} width={70}  // Set your desired width
                height={70} // Set your desired height
                alt='fade-img'
                />
                    </div>
            ))
        }
      </div>
    </div>
  )
}

export default SectionSeven