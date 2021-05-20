import React from "react";
import Link from "next/link";
import Image from "next/Image";
export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="logo">
        <Image src="/basmala.png" width="80" height="100" />
      </Link>
      <span className="nav-links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/people">
          <a>List</a>
        </Link>
        <Link href="about">
          <a>About</a>
        </Link>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </span>
    </nav>
  );
}