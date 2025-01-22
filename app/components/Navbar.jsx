"use client"

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    name: "Our Events",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-opacity-0 sticky top-0 z-50 md:mt-3">
      <div className="mx-auto flex md:h-20 md:p-4 max-w-7xl items-center justify-between border-b-[1px] border-black">
        <div className="inline-flex items-center space-x-2">
          <span>
            <Link href="/">
              <img
                src="/logo.png"
                className="w-14 ml-4"
                alt="logo"
              />
            </Link>
          </span>
          <Link href="/">
            <span className="font-bold md:text-3xl text-xl">Engineering India YCCE</span>
          </Link>
        </div>
        <div className="hidden grow items-start lg:flex justify-end">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <span className="inline-flex items-center text-base font-semibold text-zinc-800 hover:text-black">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:hidden mx-4">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-orange-400 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <div className="inline-flex items-center">
                      <img
                        src="/logo.png"
                        width={30}
                        height={30}
                        alt="logo"
                        className="rounded-full"
                      />
                    </div>
                    <span className="font-bold">Engineering India YCCE</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <span className="-m-3 flex items-center rounded-md p-1 text-sm font-semibold hover:bg-gray-50 border-b-[1.5px] border-gray-200 m-[1px] text-center">
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
