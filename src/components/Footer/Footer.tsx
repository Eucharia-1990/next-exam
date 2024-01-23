import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import { AiOutlineSend, AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialFacebook } from 'react-icons/ti';
import { CiTwitter } from 'react-icons/ci';
import { LiaLinkedinIn } from 'react-icons/lia';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.subone}>
          <p className={styles.label}>Company Info</p>
          <div className={styles.subcont}>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className={styles.subone}>
          <p className={styles.label}>Legal</p>
          <div className={styles.subcont}>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className={styles.subone}>
          <p className={styles.label}>Features</p>
          <div className={styles.subcont}>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        <div className={styles.subone}>
          <p className={styles.label}>Resources</p>
          <div className={styles.subcont}>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
        </div>
        <div className={styles.subone}>
          <p className={styles.label}>Get In Touch</p>
          <div className='flex items-center'>
            <input
              placeholder='Your Email'
              className='text-gray py-[10px] px-1 border border-slate-500 outline-none bg-slate-100'
            />
            <button className={styles.butt}>Subscribe</button>
          </div>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className={styles.lastcont}>
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
