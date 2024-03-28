import styles from './webTech.module.css';

const WebTechPage = () => {
  return (
    <>
      <section>
        <div className={styles.slicer}>
          <div className={styles.slice}>
            <h4> A Dream come true moment for your brand </h4>
            <p> Let your website be a reflection of your brand's unmatched speciality. </p>
          </div>
        </div>
      </section>
      
      <section>
        <div className={styles.container}>
          <h3 className={styles.heading}>What We Offer</h3>
          <div className={styles.boxContainer}>


            <div className={styles.box}>
              <h3>Web Applications</h3>
              <p>We go beyond coding to craft an immersive digital experience. Our web development services seamlessly blend technology and creativity, ensuring your online presence is not just functional but an engaging journey.</p>
            </div>

            <div className={styles.box}>
              <h3>Potfolio Pages</h3>
                <p>We specialize in crafting stunning portfolio websites that showcase your unique talents and achievements. Our  team combines technical expertise with creative flair to design and develop personalized portfolio websites that make a lasting impression.  </p>
            </div>
            
            <div className={styles.box}>
              <h3>Landing Sites</h3>
              <p><p>Crafting immersive digital experiences. Seamlessly blending technology and creativity to ensure your online presence is engaging and functional.</p></p>
            </div>


          </div>

      
          </div>

      </section>
      
      {/* <div className={styles.gradient}>
        <img className={styles.image} src="/photo1.jpg" alt="Web Image" />
        <div className={styles.overlay}>
          <h2>Join us to build your website</h2>
          <a href="contact.html" className={styles.bn}>Let's connect</a>
        </div>
      </div> */}
    </>
  );
};

export default WebTechPage;