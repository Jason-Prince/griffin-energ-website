import Link from "next/link";
import styles from "./hamburger.module.scss";

const Hamburger = () => {
  return (
    <>
      <div className={styles.hamburgerMenu}>
        <div className={styles.menuSecondaryBackgroundColor}></div>
        <div className={styles.menuLayer}>
          <div className={styles.menuCityBackground}></div>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.menuLinks}>
                <nav>
                  <ul>
                    <li>
                      <Link href="/services">
                        <a>Service</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <a>Porfolio</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/aboutus">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/latitudestudy">
                        <a>Latitude Study</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/linkedin">
                        <a>LinkedIn</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className={styles.info}>
                  <h3>Our Promise</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iure ipsa corporis nobis dolore, dicta animi repellendus
                    alias rerum nihil soluta sit, doloremque vel atque
                    voluptates voluptatum deleniti iusto a eum!
                  </p>
                </div>
                <div className={styles.locations}>
                  Locations:
                  <span>Dallas</span>
                  <span>Austin</span>
                  <span>New York</span>
                  <span>San Francisco</span>
                  <span>Beijing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
