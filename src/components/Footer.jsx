'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
Image

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  return (
    <>
   
    
    <div className="md:bg-blue-400  md:py-[10px] w-full  h-fit flex justify-evenly items-start  pt-0 mt-0
    max-md:flex-col max-md:items-center text-white  cursor-pointer ">
      {/* First Section */}
      <ul className="second-list max-md:text-center  w-[100%] bg-blue-400 text-center">

        <li className="first:text-2xl pb-2 w-[100%] first:text-blue-900  border-white text-center " onClick={() => toggleDropdown(1)}>
        Marketing 
        </li>
        <li className={`md:block  ${activeIndex === 1 ? 'block' : 'hidden'} `}>
          <Link href="/services/marketing">SEO</Link>
        </li>
        <li className={`md:block ${activeIndex === 1 ? 'block' : 'hidden'}`}>
          <Link href="/services/marketing">Ads</Link>
        </li>
        <li className={`md:block ${activeIndex === 1 ? 'block' : 'hidden'}`}>
          <Link href="/services/marketing">SEM</Link>
        </li>
      </ul>

      {/* Second Section */}
      <ul className="second-list max-md:text-center w-[100%] bg-blue-400 text-center">
        <li className="first:text-2xl pb-2 first:text-blue-900  border-white max-md:border-t-2" onClick={() => toggleDropdown(2)}>
          Websites
        </li>
        <li className={`md:block ${activeIndex === 2 ? 'block' : 'hidden'}`}>
          <Link href="/services/tech">Landing Sites</Link>
        </li>
        <li className={`md:block ${activeIndex === 2 ? 'block' : 'hidden'}`}>
          <Link href="/services/tech">Portfolio</Link>
        </li>
      </ul>

      {/* Third Section */}
      <ul className="third-list max-md:text-center w-[100%] bg-blue-400 text-center">
        <li className="first:text-2xl pb-2 first:text-blue-900  border-white  max-md:border-t-2" onClick={() => toggleDropdown(3)}>
           Designing
        </li>
        <li className={`md:block ${activeIndex === 3 ? 'block' : 'hidden'}`}>
          <Link href="/services/designing">Posters</Link>
        </li>
        <li className={`md:block ${activeIndex === 3 ? 'block' : 'hidden'}`}>
          <Link href="/services/designing">  Ui/Ux</Link>
        </li>
        <li className={`md:block ${activeIndex === 3 ? 'block' : 'hidden'}`}>
          <Link href="/services/designing">Media Posts</Link>
        </li>
      </ul>
 

      {/* Fourth Section */}
      <ul className="fourth-list max-md:text-center w-[100%] bg-blue-400 text-center">
        <li className="first:text-2xl pb-2 first:text-blue-900  border-white  max-md:border-t-2" onClick={() => toggleDropdown(4)}>
          Mentorship
        </li>
        <li className={`md:block ${activeIndex === 4 ? 'block' : 'hidden'} `}>
          <Link href="/mentorship"> Incubation</Link>
        </li> 
        <li className={`md:block ${activeIndex === 4 ? 'block' : 'hidden'}`}>
          <Link href="/mentorship">Guidance</Link>
        </li>
      </ul>
    </div>


   <div className='bg-white flex justify-between md:p-[20px] max-md:p-[10px] w-[100%] text-center'>

    <p className='md:w-[300px] text-start '>
    © 2023 - 2025 | All rights reserved by thefoundaxcompany
    </p>


   <Image
      src='/TFC .jpeg'
      width={80}
      height={30}
      alt="logo"
      className="focus:border-none active:border-none"
    />

  </div>
    </>
    
  );
};

export default Footer;
