import {
  faBriefcase,
  faChartBar,
  faCog,
  faEnvelope,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default {
  home: {
    title: "Home",
    href: "/",
    icon: faHome,
  },
  services: {
    title: "Services",
    href: "/services",
    icon: faCog,
  },
  portfolio: {
    title: "Portfolio",
    href: "/portfolio",
    icon: faBriefcase,
  },
  aboutus: {
    title: "About Us",
    href: "/aboutus",
    icon: faUsers,
  },
  latitudestudy: {
    title: "Latitude Study",
    href: "/latitudestudy",
    icon: faChartBar,
  },
  contact: {
    title: "Contact",
    href: "/contact",
    icon: faEnvelope,
  },
  linkedin: {
    title: "Linkedin",
    href: "/linkedin",
    icon: faLinkedinIn,
  },
};
