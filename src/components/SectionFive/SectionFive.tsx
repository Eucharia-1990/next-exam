import Image from 'next/image';
import React from 'react';
import All from '../../../public/imgs/all.jpeg';
import lad from '../../../public/imgs/lad.jpeg';
import { FaRegStar, FaStar } from 'react-icons/fa';

const SectionFive: React.FC = () => {
  return (
    <div className='flex flex-col px-10 py-10 gap-y-4 md:gap-y-8 lg:flex-row items-center md:py-10 md:px-28 lg:py-10 lg:px-44'>
      <div className='flex-1 flex flex-col gap-2 md:gap-3 lg:gap-4'>
        <p className='font-bold text-center text-sm md:text-lg lg:text-xl '>
          What they say about us
        </p>
        <div className='flex justify-center items-center'>
          <Image src={lad} className='w-[30%]' alt='pic-img' />
        </div>
        <div className='flex items-center justify-center gap-2 md:gap-3 lg:gap-2'>
          <FaStar
            color='yellow'
            className='w-[12px] h-[12px] md:w-[25px] md:h-[25px] lg:w-[20px] lg:h-[20px]'
          />
          <FaStar
            color='yellow'
            className='w-[12px] h-[12px] md:w-[25px] md:h-[25px] lg:w-[20px] lg:h-[20px]'
          />
          <FaStar
            color='yellow'
            className='w-[12px] h-[12px] md:w-[25px] md:h-[25px] lg:w-[20px] lg:h-[20px]'
          />
          <FaStar
            color='yellow'
            className='w-[12px] h-[12px] md:w-[25px] md:h-[25px] lg:w-[20px] lg:h-[20px]'
          />
          <FaRegStar
            color='yellow'
            className='w-[12px] h-[12px] md:w-[25px] md:h-[25px] lg:w-[20px] lg:h-[20px]'
          />
        </div>
        <div className='flex justify-center items-center '>
          <p className='text-center text-xs md:text-lg lg:text-sm w-[60%]'>
            Slate helps you see how many more days you need to work to reach your financial goal.
          </p>
        </div>
        <p className='text-center text-xs md:text-lg lg:text-sm text-blue '>Regina Miles</p>
        <p className='text-center text-xs md:text-lg lg:text-sm font-bold '>Designer</p>
      </div>
      <div className='flex-1'>
        <Image src={All} alt='pic-img' />
      </div>
    </div>
  );
};

export default SectionFive;
