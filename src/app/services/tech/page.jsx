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
              <h3>Web Development</h3>
              <p>We go beyond coding to craft an immersive digital experience. Our web development services seamlessly blend technology and creativity, ensuring your online presence is not just functional but an engaging journey.</p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.gradient}>
        <img className={styles.image} src="/photo1.jpg" alt="Web Image" />
        <div className={styles.overlay}>
          <h2>Join us to build your website</h2>
          <a href="contact.html" className={styles.bn}>Let's connect</a>
        </div>
      </div>
    </>
  );
};

export default WebTechPage;
