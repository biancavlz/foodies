"use client";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo.png";
import styles from "./Header.module.css";
import HeaderBackground from "./HeaderBackground";
import NavLink from "./NavLink";

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
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
