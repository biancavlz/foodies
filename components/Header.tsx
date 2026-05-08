import Link from "next/link";
import Logo from "@/assets/logo.png";

function Header() {
  return (
    <header>
      <Link href="/">
        <img src={Logo.src} alt="Logo" />
        Foodies
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
