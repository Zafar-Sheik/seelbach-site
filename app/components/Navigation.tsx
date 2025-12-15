// components/Navigation.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileNavOpen]);

  // Close menu when route changes
  useEffect(() => {
    if (mobileNavOpen) {
      closeMobileMenu();
    }
  }, [pathname]);

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileNavOpen(false);
      setIsClosing(false);
    }, 300); // Match transition duration
  };

  const navLinks = [
    { label: "Startseite", href: "/" },
    { label: "Über Uns", href: "/about" },
    { label: "Destinationen", href: "/destinations" },
    { label: "Kontakt", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-lg border-b",
          isScrolled
            ? "bg-white/90 shadow-md border-gray-200"
            : "bg-transparent border-transparent"
        )}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo isScrolled={isScrolled} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                link={link}
                isScrolled={isScrolled}
                isActive={pathname === link.href}
              />
            ))}
            <PoweredBySection isScrolled={isScrolled} />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden p-2"
            aria-label="Menü öffnen">
            <Menu
              size={32}
              className={isScrolled ? "text-black" : "text-white"}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileNavOpen && (
        <div className="md:hidden">
          {/* Backdrop Overlay */}
          <div
            className={clsx(
              "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
              isClosing ? "opacity-0" : "opacity-100"
            )}
            onClick={closeMobileMenu}
          />

          {/* Sliding Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className={clsx(
              "fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-out",
              isClosing ? "translate-x-full" : "translate-x-0"
            )}>
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F9DD3F] border-2 border-[#DB1C08] flex items-center justify-center">
                  <span className="text-lg font-bold">ST</span>
                </div>
                <div>
                  <h3 className="font-header font-bold">Seelbach Tours</h3>
                  <p className="text-xs text-gray-600">Reisen mit Seele</p>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition"
                aria-label="Menü schließen">
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
              <div className="space-y-1 mb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={clsx(
                      "flex items-center justify-between py-4 px-3 rounded-lg transition",
                      pathname === link.href
                        ? "bg-[#DB1C08]/10 text-[#DB1C08]"
                        : "hover:bg-gray-50 text-gray-800"
                    )}>
                    <span className="font-header font-semibold text-lg">
                      {link.label}
                    </span>
                    {pathname === link.href && (
                      <div className="w-2 h-2 rounded-full bg-[#DB1C08]"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-header font-semibold text-gray-800 mb-4">
                  Kontaktinformationen
                </h4>
                <div className="space-y-3">
                  <a
                    href="tel:+49123456789"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                    <div className="w-10 h-10 bg-[#F9DD3F] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#DB1C08]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Telefon</p>
                      <p className="font-medium">+49 123 456 789</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@seelbachtours.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                    <div className="w-10 h-10 bg-[#F9DD3F] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#DB1C08]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">info@seelbachtours.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Powered By Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Powered By</p>
                    <p className="font-medium">Contact Online Solutions</p>
                  </div>
                  <div className="relative w-12 h-12">
                    <Image
                      src="/images/logo-color.png"
                      alt="Contact Online Solutions"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-8 block w-full bg-linear-to-r from-[#DB1C08] to-[#F9DD3F] text-white py-4 rounded-xl font-header font-semibold text-lg text-center shadow-lg hover:shadow-xl transition">
                Jetzt buchen
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F9DD3F] border-2 border-[#DB1C08] flex items-center justify-center">
        <span className="text-lg md:text-xl font-bold">ST</span>
      </div>
      <div>
        <h1
          className={clsx(
            "font-header text-xl md:text-2xl font-bold whitespace-nowrap",
            isScrolled ? "text-black" : "text-white"
          )}>
          Seelbach Tours
        </h1>
        <p
          className={clsx(
            "text-xs",
            isScrolled ? "text-gray-700" : "text-gray-200"
          )}>
          Reisen mit Seele
        </p>
      </div>
    </Link>
  );
}

interface NavLinkProps {
  link: {
    label: string;
    href: string;
  };
  isScrolled: boolean;
  isActive: boolean;
}

function NavLink({ link, isScrolled, isActive }: NavLinkProps) {
  return (
    <Link
      href={link.href}
      className={clsx(
        "font-header font-semibold transition relative",
        isActive
          ? isScrolled
            ? "text-[#DB1C08]"
            : "text-[#F9DD3F]"
          : isScrolled
          ? "text-black hover:text-[#DB1C08]"
          : "text-white hover:text-[#F9DD3F]"
      )}>
      {link.label}
      {isActive && (
        <span
          className={clsx(
            "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full",
            isScrolled ? "bg-[#DB1C08]" : "bg-[#F9DD3F]"
          )}
        />
      )}
    </Link>
  );
}

function PoweredBySection({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-300">
      <span
        className={clsx(
          "text-xs font-medium whitespace-nowrap",
          isScrolled ? "text-gray-600" : "text-gray-300"
        )}>
        Powered By
      </span>
      <div className="relative w-20 h-15">
        {/* Show color logo when scrolled, white logo when not scrolled */}
        {isScrolled ? (
          <img
            src="/images/logo-color.png"
            alt="Contact Online Solutions"
            className="object-contain"
          />
        ) : (
          <img
            src="/images/contact-logo-white-1.png"
            alt="Contact Online Solutions"
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
}
