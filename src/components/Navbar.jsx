'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState ,useRef } from 'react';


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [dropbox , setDropbox] = useState(false);
  const timeoutRef = useRef(null);

  const toggleDropbox =() =>{
    setDropbox(!dropbox)
  }

  const handleMouseEnter = () => {
    setDropbox(true);
  };
  
  const handleMouseLeave = () => {
      setDropbox(false);
  };
  
  return (
    <div>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-10">

        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

          <div>

            <div className="flex items-center justify-between py-3 md:py-5 md:block">

              {/* LOGO */}
              <Link href="/">
                <Image
                      src='/TFC .jpeg'
                      width={110}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-blue-600 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image 
                    src="/cross.webp" 
                    width={23} 
                    height={30} 
                    alt="X" />
                  ) : (
                    <Image
                      src='/ham-menu.webp'
                      width={35}
                      height={40}
                      alt="Menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>

            </div>

          </div>


          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">

                <li className="pb-2 text-xl text-blue-600 py-2 md:px-3 text-center border-b-2 md:border-b-0  hover:bg-purple-900  md:hover:border-b border-10 border-blue-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>

                <li className="pb-2 text-xl text-blue-600 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  md:hover:border-b border-10 border-blue-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>

                <li className="pb-2 text-xl relative text-blue-600 py-2 px-6 text-center  border-b-2 md:border-b-0   sm:hover:border-b border-blue-600 md:hover:bg-transparent" >
                  <Link href="/" >
                   <button onClick={toggleDropbox} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Services &#9662; </button>
                  </Link>
                  {dropbox && (
                    <ul className="md:absolute sm:block z-10 left-0  bg-white border border-gray-200" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                        <li className="py-2 cursor-pointer px-4 hover:border-b border-blue-600  hover:bg-gray-100">Marketing</li>
                        <li className="py-2 px-4 cursor-pointer hover:border-b border-blue-600  hover:bg-gray-100">Websites</li>
                        <li className="py-2 px-4 cursor-pointer hover:border-b border-blue-600  hover:bg-gray-100">Designing</li>
                    </ul>
                    )}
                </li>

                <li className="pb-2 text-xl text-blue-600 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  md:hover:border-b border-blue-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Mentorships
                  </Link>
                </li>

                <li className="pb-2 text-xl  text-blue-600 py-2 px-6 text-center  border-b-10 md:border-b-0  hover:bg-purple-600  md:hover:border-b border-blue-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>

              </ul>
              
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;