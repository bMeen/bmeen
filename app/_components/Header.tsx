"use client";

import { Menu, X, Download } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const links: { name: string; href: string }[] = [
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((open) => !open);

  return (
    <div className="py-6 flex justify-between items-center w-full">
      <Logo />

      <Button className="p-2 lg:hidden" onClick={toggle}>
        {isOpen ? <X /> : <Menu />}
      </Button>

      <nav className="hidden lg:block">
        <ul className="lg:flex divide-x-2 divide-text-primary ">
          {links.map(({ name, href }, index) => (
            <Link href={href} key={index}>
              <li className="hover:text-orange mx-4">{name}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <Button className="gap-2 px-4 py-2 hidden lg:flex">
        <Download />
        <span>Download Resume</span>
      </Button>

      <nav
        className={`lg:hidden absolute top-[91px]  transform transition-transform duration-700 ease-in-out left-0 z-30 w-full bg-gray py-4  ${
          isOpen ? "translate-y-0" : "-translate-y-[calc(100%+91px)]"
        }`}
      >
        <ul className="px-4 md:text-center flex flex-col gap-3 mb-4">
          {links.map(({ name, href }, index) => (
            <Link href={href} key={index}>
              <li className="text-base" onClick={toggle}>
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
