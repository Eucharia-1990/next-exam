import React from 'react';
import styles from './action.module.css';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Cook from '../../../public/imgs/cook.jpeg';

const Action: React.FC = () => {
  return (
    <div className={styles.main}>
      <Image src={Cook} alt='pic-img' />
      <div className={styles.contone}>
        <div className={styles.subclass}>
          <p className={styles.text}>Bandage</p>
        </div>
        <div className='flex items-center gap-2 md:gap-4 '>
          <FaFacebookF className={styles.icon} />
          <FaInstagram className={styles.icon} />
          <FaTwitter className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Action;
