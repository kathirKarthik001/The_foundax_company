import React from 'react'
import Link from 'next/link';
import { FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';


const Connect = () => {
  return (
    <div className='w-full h-fit p-[20px] flex bg-slate-200'>
        <div className='w-full text-center flex flex-col items-center py-[10px]'>
            <h1 className='text-[45px] md:text-[70px] animate-bounce z-0' >
                <Link href={'/'}    >
                Let's Connect !
                </Link>
            </h1>
            <p>We look forward to hearing from you!</p>
            <div className='flex items-center space-x-[20px] pt-6'>
                    <Link href={'/'} >
                        <FaLinkedin style={{width:'30px',height:'30px'}}/>
                    </Link>

                    <Link href={'/'} >
                        <FaEnvelope style={{width:'30px',height:'25px'}}/>
                    </Link>

                    <Link href={'/'} >
                        <FaMapMarkerAlt style={{width:'20px',height:'30px'}}/>
                    </Link>
            </div>
        </div>

    </div>
  )
}

export default Connect