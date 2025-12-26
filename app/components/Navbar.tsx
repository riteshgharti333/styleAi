"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn] = useState(false); // replace with auth later
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-500/5"
          : "bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-md"
      }`}
      style={{
        borderBottom: isScrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo with animation */}
          <Link
            href="/"
            className="group relative"
            onClick={() => setActiveLink("home")}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                  <span className="text-lg font-bold text-white">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  StyleAI
                </span>
                <span className="text-xs text-gray-500 tracking-wider">
                  AI Fashion Assistant
                </span>
              </div>
            </div>
          </Link>

          {/* Navigation Links with animated underline */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/about", label: "About" },
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium transition-colors duration-300"
                onClick={() => setActiveLink(link.href)}
                style={{
                  color:
                    activeLink === link.href
                      ? "var(--color-brand)"
                      : "var(--color-text-secondary)",
                }}
              >
                <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                  {link.label}
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ${
                    activeLink === link.href
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Action Buttons with micro-interactions */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="relative overflow-hidden rounded-full group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative px-4 py-2 text-sm font-medium text-gray-700 group-hover:text-white transition-colors duration-300">
                    Dashboard
                  </div>
                </Link>
                <button className="relative h-10 w-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 shadow-sm overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                  <span className="relative text-gray-700 font-semibold">
                    U
                  </span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="group relative overflow-hidden rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                    Login
                  </span>
                  <div className="absolute inset-0 bg-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </Link>

                <Link
                  href="/chat"
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-2">
                    <svg
                      className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span>Ask AI</span>
                    <svg
                      className="h-4 w-4 ml-1 transition-transform duration-500 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </Link>

                {/* Mobile menu button */}
                <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg">
        <div className="px-4 py-3 space-y-2">
          {["About", "Features", "Pricing", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
