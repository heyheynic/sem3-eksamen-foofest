import Link from "next/link";

const HeaderMenu = ({ menuOpen, toggleMenu }) => {
  return (
    <ul className={`fixed flex flex-col gap-xs top-2xl right-0 h-full w-2/3 max-w-xs transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
      <li>
        <Link href="/tickets" className="halfround-left block w-full" onClick={toggleMenu}>
          Tickets
        </Link>
      </li>
      <li>
        <Link href="/line_up" className="halfround-left block w-full" onClick={toggleMenu}>
          Lineup
        </Link>
      </li>
      <li>
        <Link href="/about" className="halfround-left block w-full" onClick={toggleMenu}>
          About
        </Link>
      </li>
    </ul>
  );
};

export default HeaderMenu;
