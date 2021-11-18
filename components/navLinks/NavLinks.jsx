import { useEffect, useRef } from "react";

import Link from "next/link";
import styles from "./navLinks.module.scss";

const NavLinks = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default NavLinks;
