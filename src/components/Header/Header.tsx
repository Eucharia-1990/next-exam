import React from 'react';
import styles from './header.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.subcont}>
                <div className='flex gap-5'>
                    <div className='flex justify-center items-center gap-1'>
                        <IoCallOutline className={styles.icon} />
                        <p>(225) 555-0118</p>
                    </div>

                    <div className='flex justify-center items-center gap-1'>
                        <AiOutlineMail className={styles.icon} />
                        <p>michelle.rivera@example.com</p>
                    </div>
                </div>

                <div className={styles.subcontone}>
                    <p>Follow Us and get a chance to win 80% off</p>
                </div>

                <div className='flex justify-center items-center gap-2 md:gap-4 '>
                    <p>Follow Us :</p>
                    <div className='flex justify-center items-center gap-2 '>
                        <FaInstagram className={styles.icon} />
                        <FaYoutube className={styles.icon} />
                        <FaFacebookF className={styles.icon} />
                        <FaTwitter className={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
