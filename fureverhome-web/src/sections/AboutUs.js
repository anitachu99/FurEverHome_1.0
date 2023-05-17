import catImage from './images/cat.png';
import dogImage from './images/dog.png';
import { forwardRef } from 'react';
import styles from './styling/AboutUs.module.scss';
import dogPickup from './images/dogPickup.jpg';
import dog2 from './images/dog2.jpg';
import kitten from './images/kitten.jpg';

const AboutUs = forwardRef((props, ref) => {
    return (
      <section ref={props.ref} id={styles.aboutUs_section}>
        <div className={styles.circleGroup1}>
          <div className={styles.circle}></div>
          <div className={styles.circle2}></div>
        </div>
        <div id={styles.headerWrapper}>
          <h1 id={styles.heading}>adopt your FUREVER friend</h1>
        </div> 
         <main>
          <article className={styles.dogPickupWrapper}>
            <div className={styles.rect}></div>
            <img id={styles.dogPickup} src={dogPickup} alt='' />
            <h1>Find</h1>
          </article>
          <article className={styles.dog2Wrapper}>
          <div className={styles.rect}></div>
            <img id={styles.dog2} src={dog2} alt='' />
            <h1>Introduce</h1>
          </article>
          <article className={styles.kittenWrapper}>
            <div className={styles.rect}></div>
            <img id={styles.kitten} src={kitten} alt='' />
            <h1>Adopt</h1>
          </article>
          <div className={styles.rect2Wrapper}>
            <div className={styles.rect2}>
              <h1>Contact: 1-888-FUR-EVER furEver@gmail.com</h1>
            </div>
          </div>
        </main>
      </section>
    )
});

export default AboutUs