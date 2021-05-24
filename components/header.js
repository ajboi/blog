import Link from "next/link";
import { useRouter } from "next/router";

const Layout = () => {
  let router = useRouter();

  return (
    <nav className="navbar">
      {/* <Link href="/" passHref>
        <a className="logo">
          <h1>Reasons & Rants</h1>
        </a>
      </Link> */}
      <ul className="nav-links">
        <li className={`nav-item `}>
          <Link href="/" passHref>
            <a className={`${router.pathname === "/" ? "active" : ""}`}>Home</a>
          </Link>
        </li>
        <li className={`nav-item`}>
          <Link href="/about" passHref>
            <a className={`${router.pathname === "/about" ? "active" : ""}`}>
              About
            </a>
          </Link>
        </li>
        <li className={`nav-item`}>
          <Link href="/archive" passHref>
            <a className={`${router.pathname === "/archive" ? "active" : ""}`}>
              Archive
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
