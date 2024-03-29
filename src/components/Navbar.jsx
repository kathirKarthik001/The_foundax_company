'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState ,useRef } from 'react';
// import { FaHamburgerMe , FaCross } from 'react-icons/fa';


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [dropbox , setDropbox] = useState(false);

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
    <header className='block text-[#0083CB] font-nunito w-full'>

      <nav className="w-full bg-white shadow-md fixed left-0 right-0 block  z-10">

        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 block">

          <div>

            <div className="flex items-center justify-between py-3 md:py-5 md:block">

              {/* LOGO */}
              <Link href="/">
                <Image
                      src='/logo1.png'
                      width={120}
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

              
                <li className="pb-2 text-xl  text-blue-600 py-2 md:px-3 text-center border-b-10 md:border-b-0    md:hover:border-b  border-blue-600 md:hover:bg-transparent ">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      Home
                    </Link>
                </li>
               

                <li className="pb-2 text-xl text-blue-600 py-2 px-6 text-center  border-b-0 md:border-b-0   md:hover:border-b border-10 border-blue-600 md:hover:bg-transparent ">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>

                <li className="pb-2 text-xl relative text-blue-600 py-2 px-6 text-center    md:hover:bg-transparent " >
                  {/* <Link href="/" > */}
                   <button onClick={toggleDropbox} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Services  </button>
                  {/* </Link> */}
                  {dropbox && (
                    <ul className="md:absolute sm:block z-10 left-0  bg-white border-y border-blue-600 sm:border-y-0  
                    rounded-md md:shadow-md" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                        <li className="py-2 cursor-pointer px-4 hover:border-b border-blue-600  hover:bg-gray-100">
                            <Link href="/services/marketing"onClick={() => {setNavbar(!navbar) ;toggleDropbox()}} >
                                Marketing
                            </Link>
                        </li>

                        <li className="py-2 px-4 cursor-pointer hover:border-b border-blue-600  hover:bg-gray-100">
                            <Link href="/services/tech" onClick={() =>{setNavbar(!navbar) ;toggleDropbox()} } >
                                 Websites
                             </Link>
                        </li>

                        <li className="py-2 px-4 cursor-pointer hover:border-t border-blue-600  hover:bg-gray-100">
                            <Link href="/services/designing" onClick={() => {setNavbar(!navbar) ;toggleDropbox()}} >
                               Designing
                            </Link> 
                        </li>
                    </ul>
                    )}
                </li>

                <li className="pb-2 text-xl text-blue-600 py-2 px-6 text-center  border-b-0 md:border-b-0 md:hover:border-b sm:hover border-blue-600 md:hover:bg-transparent">
                  <Link href="/mentorship" onClick={() => setNavbar(!navbar)}>
                    Mentorships
                  </Link>
                </li>

                <li className="pb-2 text-xl  text-blue-600 py-2 px-6 text-center  border-b-10 md:border-b-0 md:hover:border-b border-blue-600 md:hover:bg-transparent">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfQ1Uh4SvJJvIYZTWRW0oW9LIodaZ3fGJRjylgN61SZvM5TYQ/viewform?usp=sf_link " onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>

              </ul>
              
            </div>
          </div>
          
        </div>

      </nav>
    </header>
  );
}

export default NavBar;