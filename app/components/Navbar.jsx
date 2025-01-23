"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Navbar = ({ navItems = [], className }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let previousScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = scrollY.get();
      setHidden(currentScrollY > previousScrollY && currentScrollY > 50);
      previousScrollY = currentScrollY;
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex w-full bg-opacity-60 h-[5rem] backdrop-blur-md fixed top-0 inset-x-0 z-50 px-12 py-8 items-center font-space justify-between border-b-[1px] text-black",
          className
        )}
      >
        <span
          className="cursor-pointer tracking-tight font-bold flex gap-x-3 justify-center items-center px-4"
          onClick={() => router.push("/")}
        >
          <img src="./logo.png" className="w-12" alt="" />
          <h1 className="font-semibold text-[20px]">Engineering India</h1>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex cursor-pointer space-x-8">
          {navItems.map((item, index) => (
            <div
              className="hover:text-orange-600 transition-colors"
              onClick={() => router.push(`${item.to}`)}
              key={index}
            >
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Slider */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-[5rem] right-0 h-screen w-64 bg-white shadow-lg z-50 md:hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                {navItems.map((item, index) => (
                  <div
                    className="hover:text-orange-600 transition-colors px-4 py-2"
                    onClick={() => {
                      router.push(`${item.to}`);
                      setMobileMenuOpen(false);
                    }}
                    key={index}
                  >
                    <h1>{item.name}</h1>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
