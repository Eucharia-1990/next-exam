import React from 'react'
import Header from "@/Components/Header/header";
import Navbar from "@/Components/Navbar/navbar";
import Footer from "@/Components/Footer/footer";
import Indivprod from '@/Components/Indivproduct/indivprod';
import Sectionsix from '@/Components/Sectionsix/sectionsix';
import Sectionseven from '@/Components/Sectionseven/sectionseven';

const Page = () => {
    
  return (
    <div>
        
    <Header />
    <Navbar />
     <Indivprod />
     <Sectionsix />
     <Sectionseven />
    <Footer />
    </div>
  )
}

export default Page