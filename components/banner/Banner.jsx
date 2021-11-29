import { useEffect, useRef } from 'react';

import { SplitText } from 'gsap/dist/SplitText';
import { gsap } from 'gsap';
import styles from './banner.module.scss';
import { useRouter } from 'next/router';

gsap.registerPlugin(SplitText);

const Banner = () => {
  const $bannerFirst = useRef(null);
  const $bannerSecond = useRef(null);
  const $bannerThird = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const bannerFirstSplitText = new SplitText($bannerFirst.current, {
      type: 'chars',
    });
    const bannerSecondSplitText = new SplitText($bannerSecond.current, {
      type: 'lines',
    });
    gsap
      .timeline()
      .from(bannerFirstSplitText.chars, {
        opacity: 0,
        y: 50,
        ease: 'back(4)',
        stagger: { from: 'start', each: 0.1 },
      })
      .from(
        bannerSecondSplitText.lines,
        {
          duration: 0.5,
          opacity: 0,
          rotationX: -120,
          force3D: true,
          transformOrigin: 'top center -150',
          stagger: 1,
        },
        4
      );
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div ref={$bannerFirst} className={styles.first}>
          <p>Saving the</p>
          <p>World One</p>
          <p>Building at</p>
          <p>a Time</p>
        </div>
        <div ref={$bannerSecond} className={styles.second}>
          <p>Save money</p>
          <p>Save energy</p>
          <p>Save the planet</p>
          <button
            onClick={() => router.push('/contact')}
            className={styles.button}
          >
            START NOW
          </button>
        </div>
        <div ref={$bannerThird} className={styles.third}>
          <i className={styles.arrowDown}></i>
        </div>
      </div>
    </div>
  );
};

export default Banner;
