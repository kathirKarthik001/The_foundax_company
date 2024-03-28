import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
   {/* Hero content */}

    <div className="banner-card">
                  <img src={'/merge.png'} alt="hero image"  width="100%" height="725"/>
                  <div className="banner-text">
                        <h1>Let's get digital</h1>
                         <br/>
                         <h3>Foster your future with <br/> Foundax</h3> 
                        <Link href="/about" className="underline">LEARN MORE</Link>
                  </div>
      </div>

    {/* Featured in */}

    <div id="feature"  >
            <h1 className="sub-title">We got featured on</h1>
            <div className="ml-5">
            <div className="row1 text-center">
                <div className="box1 ">
                    <img src="feature1.jpeg" alt="" /><br/><br/>
                    <h3 >The First step</h3>
                </div>
                <div className="box1">
                    <img src="feature2.png" alt=""/><br/><br/>
                    <h3 >Ecell SASTRA</h3>
                </div>
                </div>
            </div>      
      </div>


    {/* Services */}

     <div id="serv">
            <div className="services">
                <h1 className="sub-title">Our Services</h1> <br/>

                <p>We Focus on making the best in all sectors</p>

                <div class="row">

                    <div className="box">
                        <Link href="/dm.html"><img src="serv11.jpg" alt="" /></Link><br/><br/>
                        <h3>Digital Marketing</h3>
                   </div>

                   <div className="box">
                        <Link href="/tec.html"><img src="serv22.jpg" alt=""/></Link><br/><br/>
                        <h3>Technology</h3>
                    </div>

                    <div className="box">
                        <Link href="/des.html"><img src="serv33.jpg" alt=""/></Link><br/><br/>
                        <h3>Designing</h3>
                    </div>

                </div>
            </div>
        </div>


        {/* Clients */}

        <div id="Clients">
        <h1 class="sub-title">Our Trusted Brands</h1> <br/>
        <div class="logos">
      
            <div class="logos-slide">
                <img src="/C1.png" />
              <img src="/C2.png" />
              <img src="/C3.jpg" />
              <img src="/C4.jpg" />
              <img src="/C5.jpg" />
              <img src="/C6.jpg" />
              <img src="/C7.png" />
              <img src="/C8.png" />
              <img src="/C9.png" />
              <img src="/C1.png" />
              <img src="/C2.png" />
              <img src="/C3.jpg" />
              <img src="/C4.jpg" />
              <img src="/C5.jpg" />
              <img src="/C6.jpg" />
              <img src="/C7.png" />
              <img src="/C8.png" />
              <img src="/C9.png" />
            </div>
          </div>
        </div>

        {/* Partners */}

        <div className="partner" >
          <h1 className="sub-title" >Our Partners</h1> <br/><br/>
            <div className="row3">
                <div className="box3">
                    <img src="blue.jpg" alt=""/>
                </div>
                <div className="box3">
                    <img src="f2.png" alt="" height="80%" width="80%"/>
                </div>
            </div>      
            {/* <img src="BS2.jpg" alt="" height="50%" width="50%">  */}
          </div> 
         

        {/* Studnets registration */}

    <div id="Clients2">
        <div className="logos2">
            <div className="logos-slide2">
              <a href="Mentorship.html"><p>Free Opportunity for Students! Click here </p></a>
            </div>
      
            <div className="logos-slide2">
                <a href="Mentorship.html"><p>Free Opportunity for Students! Click here </p></a>
            </div>

            <div className="logos-slide2">
                <a href="Mentorship.html"><p>Free Opportunity for Students! Click here </p></a>
            </div>

            <div className="logos-slide2">
                <a href="Mentorship.html"><p>Free Opportunity for Students! Click here </p></a>
            </div>
          </div>
      </div>
  
    {/* About - sample */}

    <div className="about">
        <h1 className="sub-title">About Foundax</h1>
        <div className="content">
            <div className="left">
                <p>Struggling to make your mark in the digital realm? Look no further than The Foundax Company – a premier digital marketing and technology agency. With a commitment to <span>patience, punctuality,</span> and <span>perfection,</span> we deliver clients an impeccable digital presence at an affordable cost.</p> <br/>
                <p1>The beginning of your brand's digital story</p1> <br/> <br/>
                <Link href={'/about'}>
                  <button className="btn">Learn more</button>
                </Link>

            </div>
            <div className="right">
                 <img src="About.png" alt=""/>
            </div>
        </div>
    </div>


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
  );
}
