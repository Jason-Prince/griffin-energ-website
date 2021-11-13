import Link from "next/link";

function NavLink({ title, href }) {
  return (
    <div className="group">
      <Link className="cursor-pointer text-grey-100" href={href}>
        <a className="">{title}</a>
      </Link>
    </div>
  );
}

export default NavLink;
