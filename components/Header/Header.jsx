import {
  FaBriefcase,
  FaChartBar,
  FaCog,
  FaHome,
  FaLinkedinIn,
  FaUsers,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import NavLink from "./NavLink";

function Header({ navLinks }) {
  return (
    <div className="container mx-auto">
      {/* Grid container */}
      <nav className="grid grid-rows-2 items-center justify-items-center">
        <Image src="/logo.svg" layout="intrinsic" width={350} height={50} />
        {/* Grid container */}
        <div className="grid grid-cols-7 items-center justify-items-center ">
          {Object.entries(navLinks).map(([key, { title, href, icon }]) => (
            // Grid items
            <NavLink key={key} title={title} href={href} icon={icon} />
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Header;
