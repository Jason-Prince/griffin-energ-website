import Link from "next/link";
import Logo from "../Header/logo/Logo";
import Menu from "../Header/menu/Menu";
import styles from "./burger.module.scss";
import { useState } from "react";

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  console.log("isOpen: ", isOpen);
  return (
    <div className={styles.body}>
      <div className={styles.grid}>
        <Logo />
        <div></div>
        <Menu />
        <div className={styles.menuWide}>
          <Link href="/">
            <a className="link">Home</a>
          </Link>
          <Link href="/services">
            <a className="link">Services</a>
          </Link>
          <Link href="/portfolio">
            <a className="link">Portfolio</a>
          </Link>
          <Link href="/aboutus">
            <a className="link">About Us</a>
          </Link>
          <Link href="/latitudestudy">
            <a className="link">Latitude Study</a>
          </Link>
          <Link href="/contact">
            <a className="link">Contact</a>
          </Link>
          <Link href="/linkedin">
            <a className="link">Linkedin</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Burger;
