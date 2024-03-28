import Link from 'next/link'
import React from 'react'
import styles from'@/app/about/about.module.css'
import { FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaInstagramSquare } from 'react-icons/fa';

const Aboutpage = () => {
  return (
    <>

        <div className={`${styles.content} h-fit my-0`}>
                <div className={`${styles.about} md:p-[100px] max-md:p-[50px]`}>
                    <h1 className="text-white text-center w-full text-4xl md:text-5xl font-bold"> ABOUT US </h1>
                </div>
        </div>


        <div className={styles.specialized}>
        <div className={styles.loream}>
            <p>Welcome to The Foundax Company, a digital marketing and technology agency where we make your brand start unique from the crowd !</p> <br/>
            <p>At Foundax, our formula is simple yet potent: Patience, Punctual , Perfect. We believe in understanding your needs patiently, delivering on promises punctually, and striving for perfection in every aspect of our work. It's not just a formula; it's our commitment to excellence.</p> <br/>
            <p>Join us at Foundax and embark on your brand's digital journey to new heights.</p>
        </div>
        </div>


        <div className={styles.team}>
        <div className={styles.container}>

            <div className={styles.header}>
                <h1 >Our Team</h1>
            </div>


            <div className={` columns-md   ${styles.subcontainer} w-full text-white flex flex-wrap justify-center  `}>

                
                        <div className={` ${styles.teams}`}>
                            <img src="/m-1.png" alt="" width={30} />
                            <div className={styles.name}>Hemakeerthika</div>
                            <div className={styles.about}>CO-FOUNDER & COO</div>

                            <div className={styles.sociallinks}>
                                <Link target="_blank" href={'https://www.linkedin.com/in/hema-keerthika?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} >
                                            <FaLinkedin style={{width:'30px',height:'30px'}}/>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.teams}>
                            <img src="/shyam.jpeg" alt=""/>
                            <div className={styles.name}>Sri Shyamnath</div>
                            <div className={styles.about}>CO-FOUNDER & COO</div>

                            <div className={styles.sociallinks}>
                                <Link target="_blank" href={'https://www.linkedin.com/in/srishyamnath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} >
                                            <FaLinkedin style={{width:'30px',height:'30px'}}/>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.teams}>
                            <img src="/Varun.jpeg" alt=""/>
                            <div className={styles.name}>Varun Murthi</div>
                            <div className={styles.about}>MANAGING DIRECTOR</div>

                            <div className={styles.sociallinks}>
                                <Link  target="_blank" href={'https://www.linkedin.com/in/varun-murthi-s-5967b9225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} >
                                            <FaLinkedin style={{width:'30px',height:'30px'}}/>
                                </Link>
                            </div>
                        </div>

                       

            </div>

            <div className={` columns-md   ${styles.subcontainer} w-full  text-white flex h-fit  py-0flex-wrap justify-center  `}>
            <div className={styles.teams}>
                            <img src="/m-4.png" alt=""height={200} width={40} />
                            <div className={styles.name}>Kathir Karthik</div>
                            <div className={styles.about}>Web Developer</div>

                            <div className={styles.sociallinks}>
                                <Link target="_blank" href={'https://www.linkedin.com/in/kathir-karthik-6b9b03257/'} >
                                            <FaLinkedin style={{width:'30px',height:'30px'}}/>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.teams}>
                            <img src="/m-5.png" alt=""/>
                            <div className={styles.name}>Mouniesh</div>
                            <div className={styles.about}>Web Developer</div>

                            <div className={styles.sociallinks}>
                                <Link target="_blank" href={'https://www.linkedin.com/in/mouniesh-vijayakumar-2447a2256/'} >
                                            <FaLinkedin style={{width:'30px',height:'30px'}}/>
                                </Link>
                            </div>
                        </div>
                        
                        <div className={styles.teams}>
                            <img src="IMG-20240311-WA0036.jpg" alt=""/>
                            <div className={styles.name}>XXXXXXXXXX</div>
                            <div className={styles.about}> CMO </div>

                            <div className={styles.sociallinks}>
                                <Link  target="_blank" href={'/'} >
                                            <FaLinkedin style={{width:'30px',height:'30px'}}/>
                                </Link>
                            </div>
                        </div>
            </div>

            
        </div>
    </div>




     {/* Blogs */}

     <section id="blog">
            <div className="blog-heading">
                <h1>Our Blogs</h1>
            </div>
            <div className="blog-container">
    
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/B3.jpeg" alt=""/>
                    </div>
                    <div className="blog-text">
                        <span>January 02, 2023</span>
                        <p>At KPRIET, Sri Shyamnath RK, our Co-founder & CEO, led a session on "Creating Your personal Brand on LinkedIn" shaping aspiring professionals' career paths.</p>
                        <Link href="https://www.linkedin.com/posts/activity-7016420086626365440-qtbU?utm_source=share&utm_medium=member_android">Read more</Link>
                    </div>
                </div>

                

                <div className="blog-box ">
                    <div className="blog-img">
                        <img src="B1.jpeg" alt=""/>
                    </div>
                    <div className="blog-text">
                        <span>July 07, 2023</span>
                        <p>The Foundax Company and Looptech organized a hands-on Arduino training at The Ideal Mount Litera Zee Senior Secondary Coimbatore School.</p>
                        <Link href="https://www.instagram.com/p/C2wYIxFSqws/?igsh=MXVyZzNnbzIyZngzdA==">Read more</Link>
                    </div>
                </div>
    
                <div className="blog-box max-md:h-fit">
                    <div className="blog-img">
                        <img src="B2.jpeg" alt=""/>
                    </div>
                    <div className="blog-text">
                        <span>August 24 & 25, 2023</span>
                        <p>The Foundax Company organized their second two-day workshop at Peruntholuvu Government School, Tiruppur.</p>
                        <Link href="https://www.linkedin.com/posts/the-foundax-company_ignitingminds-techworkshop-studentinnovation-activity-7101515885135204352-pq7G?utm_source=share&utm_medium=member_android">Read more</Link>
                    </div>
                </div>
               
    
            </div>
        </section>
    </>
  )
}

export default Aboutpage