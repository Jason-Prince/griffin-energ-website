import HeaderLogo from "./HeaderLogo";
import Link from "next/link";
import NavMenu from "../navMenu/NavMenu";
import styles from "./header.module.scss";
import { useState } from "react";

const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderLogo />
          {!isNavMenuOpen && (
            <button
              onClick={() => setIsNavMenuOpen(true)}
              className={styles.button}
            >
              Menu
            </button>
          )}
          {isNavMenuOpen && (
            <button
              onClick={() => setIsNavMenuOpen(false)}
              className={styles.button}
            >
              Close
            </button>
          )}
          {isNavMenuOpen && <NavMenu />}
        </div>
      </div>
    </>
  );
};

export default Header;
