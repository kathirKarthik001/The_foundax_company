import React from 'react';
import styles from './market.module.css';

const MarketingPage = () => {
  return (
    <section>
      <div className={styles.slicer}>
  
        <div className={`w-full max-md:text-[10px] md:p-[100px]   ${styles.slice}`}>
          <h4 className=' max-md:text-[30px] md:text-4xl  '> The seed for your brand's digital presence</h4>
          <p  className=' max-md:text-[17px] text-justify md:text-[20px] ' >In today's competitive world of digital marketing, we make your brand last in the minds of customers forever.</p>
        </div>
      </div>
  
      <div className={styles.container}>
        <h3 className={styles.heading}>What We Offer</h3>
        <div className={styles.boxContainer}>

          <div className={`h-[200px] max-md:h-fit  text-justify ${styles.box}`}>
            <h3>Social Media Management</h3>
            <p className='text-justify'>
              Navigate the social landscape effortlessly with our management services. We curate content that sparks conversations, fostering genuine connections and building a thriving online community.
              </p>
          </div>

          <div className={styles.box}>
            <h3>Search Engine Optimization</h3>
            <p>Climb the digital hierarchy with our SEO strategies. We meticulously optimize your online presence, ensuring your brand not only climbs higher in search engine rankings but stands out vividly in the digital landscape.</p>
          </div>


          <div className={styles.box}>
            <h3>Social Media Ads (Instagram, Facebook, Google, LinkedIn)</h3>
            <p>Our ads transcend the ordinary, generating not just clicks but meaningful conversations. Elevate your brand's narrative across Instagram, Facebook, Google, and LinkedIn with visually stunning and compelling campaigns.</p>
          </div>
        </div>
      </div>
  
      {/* <div className={styles.gradient}>
        <img className={styles.image} src="/photo1.jpg" alt="Your Image" />
        <div className={styles.overlay}>
          <h2>Join us in growing Your brand to the next level</h2>
          <a href="contact.html" className={styles.bn}>Let's connect</a>
        </div>
      </div> */}
    </section>
  );
}

export default MarketingPage;