import React from 'react'
import Cup from '../../../public/imgs/cup.jpeg'
import styles from './sectionsix.module.css'
import Image from 'next/image'

const SectionSix = () => {
  return (
   <div className={styles.main}>
    <div className='flex items-end justify-center gap-2 md:gap-6 text-sm py-4 md:py-6'>
        <p className='text-xs md:text-lg'>Description</p>
        <p className='text-xs  md:text-lg'>Additional Information</p>
      <div className='flex items-center gap-1'>
      <p className='text-xs  md:text-lg'>Reviews</p>
        <p className='text-green text-xs  md:text-lg'>(0)</p>
      </div>
    </div>
    <div className={styles.line}></div>
     <div className='bg-white py-10 flex flex-col lg:flex-row gap-4'>
                <div className='flex-1'>
                  <p className='font-bold text-base md:text-2xl lg:text-xl xl:text-xl py-2 md:py-4'>the quick fox jumps over </p>
                  <p className='text-xs md:text-lg lg:text-base py-2 md:py-4 text-slate-600'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                  <div className='flex items-center'>
                    <div className={styles.linet}></div>
                  <p className='text-xs md:text-lg lg:text-base py-2 md:py-4 text-slate-600'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                  </div>
                  <p className='text-xs md:text-lg lg:text-base py-2 md:py-4 text-slate-600'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                </div>
                <div className='flex-1'>
                <Image src={Cup} alt='pic-img' className='w-[100%] h-[40vh] md:h-[50vh] lg:h-[70vh] xl:h-[50vh] rounded-lg' />

                </div>
            </div>
   </div>
  )
}

export default SectionSix