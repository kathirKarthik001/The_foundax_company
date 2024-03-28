import React from 'react'
import Link from 'next/link';
import { FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaInstagramSquare } from 'react-icons/fa';


const Connect = () => {
  return (
    <>
            <img src="./wave.png" alt="" className='  border-none w-full max-md:p-0 max-md:m-0 '/>
            <div className='w-full h-fit p-[20px] flex bg-[#0083CB] max-md:mt-0'>
                <div className='w-full text-center flex flex-col items-center py-[10px]'>
                    <h1 className='text-[45px] md:text-[70px] animate-bounce z-0' >
                        <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSfQ1Uh4SvJJvIYZTWRW0oW9LIodaZ3fGJRjylgN61SZvM5TYQ/viewform?usp=sf_link '}    >
                        Let's Connect !
                        </Link>
                    </h1>
                    <p className='text-white'>We look forward to hearing from you!</p>
                    <div className='flex items-center space-x-[20px] text-white pt-6'>
                            <Link target='_blank' href={'https://www.linkedin.com/company/the-foundax-company/'} >
                                <FaLinkedin style={{width:'30px',height:'30px'}}/>
                            </Link>

                            <Link target='_blank' href={'mailto:thefoundaxcompany@gmail.com'} >
                                <FaEnvelope style={{width:'30px',height:'25px'}}/>
                            </Link>

                            <Link target='_blank' href={'https://www.instagram.com/thefoundaxcompany?utm_source=qr&igsh=MWhjdnlleDR2YmR5Yg=='} >
                                <FaInstagramSquare style={{width:'30px',height:'30px'}}/>
                            </Link>
                    </div>
                </div>

            </div>

    </>
  )
}

export default Connect