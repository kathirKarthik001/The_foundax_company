import Link from 'next/link'
import React from 'react'

const Aboutpage = () => {
  return (
    <>
     {/* Blogs */}

     <section id="blog">
            <div class="blog-heading">
                <h1>Our Blogs</h1>
            </div>
            <div class="blog-container">
    
                <div class="blog-box">
                    <div class="blog-img">
                        <img src="/B3.jpeg" alt=""/>
                    </div>
                    <div class="blog-text">
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