import React from 'react';
import ImageOne from '../../../public/imgs/blueone.jpeg';
import ImageTwo from '../../../public/imgs/bluetwo.jpeg';
import ImageThree from '../../../public/imgs/bluethree.jpeg';
import Image from 'next/image';

const SectionThree = () => {
  const details = [
        {
            id:1,
            pic:ImageOne ,
            title:"Easy Wins",
            label:"Get your best looking smile now!",
        },
        {
            id:2,
            pic:ImageTwo ,
            title:"Concrete",
            label:"Defalcate is most focused in helping you discover your most beautiful smile",
        },
        {
            id:3,
            pic:ImageThree,
            title:"Hack Growth",
            label:"Overcame any hurdle or any other problem.",
        }
    ]
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-1 lg:gap-1 py-5'>
        <p className='text-sm md:text-lg lg:text-lg xl:text-xl text-slate-500 tracking-wide'>Featured Products</p>
        <p className='font-bold text-lg md:text-xl lg:text-xl xl:text-2xl tracking-wide'>THE BEST SERVICES</p>
        <p className='text-xs md:text-lg lg:text-base xl:text-lg text-slate-500 tracking-wide'>Problems trying to resolve the conflict between </p>
      </div>

      <div className='grid lg:grid-cols-3 gap-4 px-10 pt-1 pb-5 md:px-20 md:pt-2 md:pb-16 lg:px-20 '>
        {details.map((datum) => (
          <div key={datum.id} className='flex flex-col items-center gap-1'>
            <Image src={datum.pic} className='w-[20%] lg:w-[30%]' alt="pic-img" />
            <p className='text-sm md:text-xl lg:text-lg font-bold tracking-wide'>{datum.title}</p>
            <p className='text-slate-500 text-xs md:text-xl  lg:text-sm w-[70%] text-center tracking-wide'>{datum.label}</p>
            
          </div>
        ))}
      </div>
    </div>
  )
};

export default SectionThree;
