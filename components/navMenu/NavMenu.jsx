import styles from './navMenu.module.scss';
import Link from 'next/link';
import { useState } from 'react';

const NavMenu = () => {
  const [isServicesMouseEnter, setIsServicesMouseEnter] = useState(false);
  console.log(isServicesMouseEnter);
  return (
    <nav className={styles.navMenu}>
      <div className={styles.navLinks}>
        
        <div onMouseEnter={() => setIsServicesMouseEnter(false)} className={styles.navLink}>
          <Link href="/">
            <a className={styles.navName}>Home</a>
          </Link>
        </div>

        <div onMouseEnter={() => setIsServicesMouseEnter(true)} className={styles.navLink}>
          <Link href="/services">
            <a className={styles.navName}>Service</a>
          </Link>
        </div>

        {isServicesMouseEnter && (
  <div className={styles.servicesNavLinks}>
    <div className={styles.servicesNavLink}>
      <Link href="/services/architecturaldesign">
        <a>Architectural Design</a>
      </Link>
    </div>
    <div className={styles.servicesNavLink}>
      <Link href="/services/buildingcertifications">
        <a>Building Certifications</a>
      </Link>
    </div>
    <div className={styles.servicesNavLink}>
      <Link href="/services/energyconsulting">
        <a>Energy Consulting</a>
      </Link>
    </div>
    <div className={styles.servicesNavLink}>
      <Link href="/services/wholebuildingenergymodeling">
        <a>Whole Building Energy Modeling</a>
      </Link>
    </div>
  </div>
)}

        <div onMouseEnter={() => setIsServicesMouseEnter(false)} className={styles.navLink}>
          <Link href="/portfolio">
            <a className={styles.navName}>Porfolio</a>
          </Link>
        </div>

        <div onMouseEnter={() => setIsServicesMouseEnter(false)} className={styles.navLink}>
          <Link href="/aboutus">
            <a className={styles.navName}>About Us</a>
          </Link>
        </div>

        <div onMouseEnter={() => setIsServicesMouseEnter(false)} className={styles.navLink}>
          <Link href="/latitudestudy">
            <a className={styles.navName}>Latitude Study</a>
          </Link>
        </div>

        <div onMouseEnter={() => setIsServicesMouseEnter(false)} className={styles.navLink}>
          <Link href="/contact">
            <a className={styles.navName}>Contact</a>
          </Link>
        </div>

        <div onMouseEnter={() => setIsServicesMouseEnter(false)} className={styles.navLink}>
          <Link href="/linkedin">
            <a className={styles.navName}>LinkedIn</a>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default NavMenu;


