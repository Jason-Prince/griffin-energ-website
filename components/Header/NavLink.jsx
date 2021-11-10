import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function NavLink({ title, href, icon }) {
  return (
    <div className="group ">
      <Link className="cursor-pointer" href={href}>
        <div className="grid grid-rows-2 items-center justify-items-center h-16">
          <FontAwesomeIcon
            icon={icon}
            className=" group-hover:animate-bounce w-7"
          />
          <a className="opacity-0 whitespace-nowrap group-hover:opacity-100">
            {title}
          </a>
        </div>
      </Link>
    </div>
  );
}

export default NavLink;
