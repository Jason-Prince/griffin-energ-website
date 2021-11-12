import { useEffect, useRef } from "react";

import { SplitText } from "gsap/dist/SplitText";
import { gsap } from "gsap";
import { useRouter } from "next/router";

gsap.registerPlugin(SplitText);

const Banner = () => {
  const $bannerLeft = useRef(null);
  const $bannerRight = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const bannerLeftSplitText = new SplitText($bannerLeft.current, {
      type: "chars",
    });
    const bannerRightSplitText = new SplitText($bannerRight.current, {
      type: "lines",
    });
    gsap
      .timeline()
      .from(bannerLeftSplitText.chars, {
        opacity: 0,
        y: 50,
        ease: "back(4)",
        stagger: { from: "start", each: 0.1 },
      })
      .from(
        bannerRightSplitText.lines,
        {
          duration: 0.5,
          opacity: 0,
          rotationX: -120,
          force3D: true,
          transformOrigin: "top center -150",
          stagger: 1,
        },
        4
      );
  }, []);
  return (
    <div>
      <div className="banner">
        <div ref={$bannerLeft} className="bannerLeft">
          <p>Saving the</p>
          <p>World One</p>
          <p>Building at</p>
          <p>a Time</p>
        </div>
        <div ref={$bannerRight} className="bannerRight">
          <p className="bannerRightItem">Save money</p>
          <p className="bannerRightItem">Save energy</p>
          <p className="bannerRightItem">Save the planet</p>
          <button
            onClick={() => router.push("/contact")}
            className="bannerButton"
          >
            START NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
