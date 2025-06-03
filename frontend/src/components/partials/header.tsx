"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navs = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/#intro" },
    { name: "Thể lệ", href: "/#overview" },
    // { name: "Đơn vị", href: "/#organizer" },
    { name: "Tin tức", href: "/news" },
    { name: "Hành trình", href: "/#lookback" },
    { name: "Liên hệ", href: "/#contact" },
  ];

  return (
    <header className="">
      <div className="max-w-[75rem] m-auto flex justify-between items-center mt-3 px-4">
        <Link href={"/"}>
          <div className="logo flex items-center gap-2">
            <img
              src="/02-robocus-2025-logo-white.png"
              className="h-[4rem]"
              alt="logo"
            />
          </div>
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-8 absolute md:static top-20 left-0 w-full md:w-auto bg-black/75 md:bg-transparent md:p-0 z-30 backdrop-blur-2xl rounded-lg`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            {navs.map((nav, index) => (
              <li key={index}>
                <Link href={nav.href} onClick={() => setIsMenuOpen(false)}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
