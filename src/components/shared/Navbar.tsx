"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => (pathname === path ? "text-white2" : ""); // Add an active class

  return (
    <header className="bg-black text-white py-[30px]">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <h2 className="text-[40px] font-black uppercase">Logo</h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            className={`leading-5 font-medium uppercase text-white ${isActive(
              "/workout"
            )}`}
            href="/workout"
          >
            Workout
          </Link>
          <Link
            className={`leading-6 font-medium uppercase text-white ${isActive(
              "/shop"
            )}`}
            href="/shop"
          >
            Shop
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/signup"
            className="bg-primary px-2 py-1 lg:px-6 lg:py-4 border border-primary rounded-lg text-black leading-5 hover:bg-black hover:text-white transition-all duration-300"
          >
            Signup
          </Link>
          <Link
            href="/login"
            className="hover:bg-primary px-2 py-1 lg:px-6 lg:py-4 border border-primary rounded-lg hover:text-black leading-5 bg-black text-white transition-all duration-300"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center text-white"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black text-white px-4 py-6 container">
          <div className="flex flex-col gap-4">
            <Link
              className={`uppercase leading-6 font-medium ${isActive(
                "/workout"
              )}`}
              href="/workout"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Workout
            </Link>
            <Link
              className={`uppercase leading-6 font-medium ${isActive("/shop")}`}
              href="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <Link
              href="/login"
              className="px-4 py-2 border border-primary rounded-lg text-center leading-6 hover:bg-primary hover:text-black transiation-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 border border-primary bg-primary rounded-lg text-black text-center leading-6 hover:bg-black hover:text-white transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
