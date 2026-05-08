import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo.png";
import styles from "./Header.module.css";
import HeaderBackground from "./HeaderBackground";

function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={Logo} alt="Logo" priority />
          Foodies
        </Link>

        <nav className={styles.nav}>
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
    </>
  );
}

export default Header;
