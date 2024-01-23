import React from 'react';
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Sect from '../../../public/imgs/sect.jpeg';
import Image from 'next/image';

const SectionOne = () => {
  return (
    <div className='px-6 py-1 md:px-16 md:py-5 lg:px-24 lg:py-5 xl:px-28 xl:py-5'>
      <Image src={Sect} alt='pic-img' />
    </div>
  );
};

export default SectionOne;
