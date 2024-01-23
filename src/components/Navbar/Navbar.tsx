"use client"

import React, { useState } from 'react';
import styles from './navbar.module.css';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';
import { MdOutlineSearch } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenuContent(!showMenuContent);
  };

  return (
    <div className={styles.main}>
      <div className={styles.textcont}>
        <div className='flex-1 '>
          <p className={styles.bold} id="animatedText">Bandage</p>
        </div>

        <div className='flex items-center justify-end gap-4 lg:hidden'>
          <MdOutlineSearch className={styles.mobicon} />
          <FiShoppingCart className={styles.mobicon} />
          <CiHeart className={styles.mobicon} />
        </div>

        <div>
          <IoIosMenu className={styles.menuicon} onClick={handleMenuClick} />
        </div>
      </div>

      {showMenuContent && (
        <div className={styles.mobilelistcont}>
          <ul className={styles.mobilelist}>
            <li className={styles.item}>
              <Link href={`/`} className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/contactus`} className={styles.link}>
                Shop
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/aboutus`} className={styles.link}>
                About
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/signup`} className={styles.link}>
                Blog
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/signup`} className={styles.link}>
                Pages
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className={styles.listcont}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={`/`} className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={`/contactus`} className={styles.link}>
              Shop
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={`/aboutus`} className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={`/signup`} className={styles.link}>
              Blog
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={`/signup`} className={styles.link}>
              Pages
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.lastcont}>
        <div className='hidden lg:block'>
          <p className={styles.text}>Login/Register</p>
        </div>
        <div className='hidden lg:flex items-center justify-center gap-4'>
          <MdOutlineSearch className={styles.icon} />
          <FiShoppingCart className={styles.icon} />
          <CiHeart className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
