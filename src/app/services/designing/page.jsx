import React from 'react'
import styles from './design.module.css';

const DesignPage
 = () => {
  return (
    <>

<section>
    <div className={` ${styles.slicer}`}>
        <div className={` ${styles.slice}`}>
          <h4>Let your brand make a long lasting impression   </h4>
          <p> Trendy and attractive 
            designs made exotic for your brand at affordable prices. </p>

        </div>
    </div>
</section>


    <div className={` flex flex-col ${styles.container}`}>

        <h3 className={styles.heading}>What We Offer</h3>

        <div className={`flex justify-center  ${styles.boxcontainer}`}>



          <div className={`  border max-md:h-fit md:h-[300px] border-blue-600  ${styles.box}`}>
          <h3>UX/UI<br/>
              (User Experience/User Interface)</h3><br/>
          <p className='text-justify'>  Immerse your users in a visually enchanting digital world. Our UI/UX designs go beyond aesthetics, crafting delightful experiences that resonate with your audience and keep them coming back.</p>
          </div>

          <div className={`  border  max-md:h-fit  md:h-[300px] border-blue-600 ${styles.box}`}>
                <h3>Logo Design</h3><br/>
                <p className='text-justify'>    Unleash a visual emblem that echoes your brand's essence. Our logo designs are crafted with innovation and expertise, ensuring your identity leaves a lasting impression in the minds of your audience.</p><br/> 
              </div>

          <div className={`  border  max-md:h-fit md:h-[300px] border-blue-600 ${styles.box}`}>
                <h3>Brochure/Catalogue</h3><br/>
                    <p className='text-justify'>   Transform your offerings into captivating narratives. Our brochure and catalogue designs blend information seamlessly with creative visuals, unveiling your brand story in a compelling manner.</p>
              </div>
        </div>


        <div className={`flex justify-center  ${styles.boxcontainer}`}>

          <div className={`  border border-blue-600 md:h-[300px]  ${styles.box}`}>
                  <h3>Digital Posters/Banners</h3><br/>
                      <p className='text-justify'>   Make a bold digital statement with our eye-catching posters and banners. Our designs don't just grab attention; they convey your message with impact, leaving a lasting imprint on your audience.</p>
                </div>

          <div className={`  border border-blue-600 ${styles.box}`}>
                  <h3>Youtube Thumbnail</h3><br/>
                      <p className='text-justify'>   Elevate your video content with thumbnails that tell a story. Our designs not only entice clicks but encapsulate the essence of your videos, inviting viewers into a world of visual storytelling.</p>
            </div>

          <div className={`  border border-blue-600 ${styles.box}`}>
                  <h3>All Customized Design</h3><br/>
                      <p className='text-justify'> From graphics to bespoke designs, we bring your unique vision to life. Our customized creations ensure your brand stands out, making a distinctive mark in the dynamic digital landscape.</p>
                </div>

                
        </div>

    </div>

    </>
  )
}

export default DesignPage
