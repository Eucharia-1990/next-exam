// use client
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Action from "@/components/ActionComp/Action";
import SectionOne from "@/components/SectionOne/SectionOne";
import SectionTwo from "@/components/SectionTwo/SectionTwo";
import SectionThree from "@/components/SectionThree/SectionThree";
import SectionFour from "@/components/SectionFour/SectionFour";
import SectionFive from "@/components/SectionFive/SectionFive";
import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Action />
      <Footer />
    </main>
  );
};

export default Home;
