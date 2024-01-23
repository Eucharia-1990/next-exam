import React from 'react';
import One from '../../../public/imgs/newone.jpeg';
import Two from '../../../public/imgs/newtwo.jpeg';
import Three from '../../../public/imgs/newthree.jpeg';
import { LuAlarmClock } from 'react-icons/lu';
import { AiFillPicture } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

interface Detail {
  id: number;
  pic: StaticImageData;
  title: string;
  label: string;
  date: string;
  comment: string;
  button: string;
}

const SectionFour: React.FC = () => {
  const details: Detail[] = [
    {
      id: 1,
      pic: One,
      title: "Loudest à la Madison #1 (L'integral)",
      label: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comment: "10 comments",
      button: "Learn More",
    },
    {
      id: 2,
      pic: Two,
      title: "Loudest à la Madison #1 (L'integral)",
      label: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comment: "10 comments",
      button: "Learn More",
    },
    {
      id: 3,
      pic: Three,
      title: "Loudest à la Madison #1 (L'integral)",
      label: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comment: "10 comments",
      button: "Learn More",
    },
  ];

  return (
    <div>
      <div className='flex flex-col justify-center items-center py-5'>
        <p className='text-xs md:text-lg lg:text-lg xl:text-xl text-slate-500 tracking-wide'>Practice Advice</p>
        <p className='font-bold text-lg md:text-3xl lg:text-3xl xl:text-4xl tracking-wide'>Featured Posts</p>
      </div>

      <div className='grid lg:grid-cols-3 gap-4 px-10 pt-1 pb-5 md:px-20 md:pt-2 md:pb-16 lg:px-20 '>
        {details.map((datum) => (
          <div key={datum.id} className='flex flex-col items-center'>
            <Image src={datum.pic} alt="pic-img" />
            <div className='p-5 border border-slate-400 w-[100%] flex flex-col items-center gap-4'>
              <div className='flex items-center gap-6 w-[100%] text-xs md:text-lg lg:text-base'>
                <p className='text-blue'>Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>
              <p className='text-xs md:text-xl lg:text-sm w-[100%]'>{datum.title}</p>
              <p className='text-slate-500 text-xs md:text-xl lg:text-sm'>{datum.label}</p>
              <div className='flex flex-row items-center justify-between w-[100%]'>
                <div className='flex item-center gap-1'>
                  <LuAlarmClock className='w-[12px] h-[12px] md:w-[25px] md:h-[25px] mlg:w-[15px] lg:h-[15px] text-blue' />
                  <p className='text-slate-500 text-xs md:text-base lg:text-xs'>{datum.date}</p>
                </div>

                <div className='flex item-center gap-1'>
                  <AiFillPicture className='w-[12px] h-[12px] md:w-[25px] md:h-[25px] mlg:w-[15px] lg:h-[15px] text-green' />
                  <p className='text-xs md:text-base lg:text-xs'>{datum.comment}</p>
                </div>
              </div>
              <div className='w-[100%] flex items-center gap-1'>
                <p className='text-xs md:text-lg lg:text-base text-slate-500'>{datum.button}</p>
                <IoIosArrowForward className='text-blue' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
