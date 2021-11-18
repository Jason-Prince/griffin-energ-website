import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import NavLinks from "../navLinks/NavLinks";
import ServicesNavLinks from "../servicesNavLinks/ServicesNavLinks";
import { gsap } from "gsap";
import styles from "./menuToggle.module.scss";

gsap.registerPlugin(MorphSVGPlugin);

const MenuToggle = () => {
  return (
    <>
      <div className={styles.menuToggle}>
        {/* Hamburger */}
        <svg
          className={styles.menuToggleBurger}
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path
            id="menuPath"
            d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
          />
        </svg>
        {/* Cross */}
        <svg
          // onClick={(e) => closeMenu(e.target.lastChild)}
          className={styles.menuToggleCross}
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
        </svg>
      </div>
      <div className={styles.links}>
        <div>
          <div className={styles.navLinks}>
            <div className={styles.navLink}>
              <Link href="/">
                <a className={styles.navName}>Home</a>
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/services">
                <a className={styles.navName}>Service</a>
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/portfolio">
                <a className={styles.navName}>Porfolio</a>
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/aboutus">
                <a className={styles.navName}>About Us</a>
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/latitudestudy">
                <a className={styles.navName}>Latitude Study</a>
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/contact">
                <a className={styles.navName}>Contact</a>
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/linkedin">
                <a className={styles.navName}>LinkedIn</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.servicesNavLinks}>
          <div className={styles.servicesNavLink}>
            <Link href="/services/wholebuildingenergymodeling">
              <a className={styles.servicesNavName}>
                Whole Building Energy Modeling
              </a>
            </Link>
          </div>

          <div className={styles.servicesNavLink}>
            <Link href="/services/energyconsulting">
              <a className={styles.servicesNavName}>Energy Consulting</a>
            </Link>
          </div>

          <div className={styles.servicesNavLink}>
            <Link href="/services/hersrating">
              <a className={styles.servicesNavName}>HERS Rating</a>
            </Link>
          </div>

          <div className={styles.servicesNavLink}>
            <Link href="/services/buildingcertifications">
              <a className={styles.servicesNavName}>Building Certifications</a>
            </Link>
          </div>

          <div className={styles.servicesNavLink}>
            <Link href="/services/buildingcertifications">
              <a className={styles.servicesNavName}>Architectuaral Design</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuToggle;
