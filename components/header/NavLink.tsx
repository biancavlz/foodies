"use client";

import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path === href ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
