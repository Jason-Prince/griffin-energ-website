import Link from "next/link";
import styles from "./servicesnavlinks.module.scss";

const ServicesNavLinks = () => {
  return (
    <>
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
    </>
  );
};

export default ServicesNavLinks;
