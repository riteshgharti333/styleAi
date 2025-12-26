"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Text animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(99, 102, 241, 0.08) 0%, 
            rgba(255, 255, 255, 0) 50%
          ),
          linear-gradient(135deg, 
            #ffffff 0%, 
            #f8fafc 25%, 
            #f0f4ff 50%, 
            #eef2ff 75%, 
            #ffffff 100%
          )
        `,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-300/20 to-purple-300/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-200/10 to-rose-200/10 blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px),
                             linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div ref={textRef} className="space-y-8 md:space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Fashion Assistant
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900">
                  Your Personal
                </span>
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Style Expert
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Get personalized outfit recommendations, style advice, and fashion insights 
                powered by artificial intelligence. Perfect for every occasion, body type, 
                and personal taste.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
            >
              {/* Primary CTA */}
              <Link
                href="/chat"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-center font-semibold text-white shadow-2xl shadow-indigo-500/30 transition-all duration-500 hover:shadow-3xl hover:shadow-indigo-500/40 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center gap-3">
                  <svg
                    className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-lg">Ask AI Stylist</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
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

              {/* Secondary CTA */}
              <Link
                href="/how-it-works"
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white/80 px-8 py-4 text-center font-semibold shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-indigo-200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center gap-3">
                  <svg
                    className="h-5 w-5 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <span className="bg-gradient-to-r from-gray-700 to-gray-900 group-hover:from-indigo-600 group-hover:to-purple-600 bg-clip-text text-transparent transition-all duration-500">
                    How It Works
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 border-t border-gray-100"
            >
              <div className="flex flex-wrap items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-indigo-400 to-purple-400"
                        style={{ zIndex: 5 - i }}
                      />
                    ))}
                  </div>
                  <span className="font-medium">
                    <span className="text-gray-900">10,000+</span> Happy Users
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 p-2">
                    <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>98% Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Demo Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Chat Interface Mockup */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8">
                {/* Chat Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">StyleAI Assistant</div>
                    <div className="text-sm text-gray-500">Online • Ready to help</div>
                  </div>
                  <div className="ml-auto">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4">
                  {/* AI Message */}
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-indigo-600">AI</span>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                      <p className="text-gray-700">I recommend a navy blazer with tailored trousers for your business meeting.</p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                      <p className="text-white">What should I wear for a business meeting?</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-700">U</span>
                    </div>
                  </div>

                  {/* AI Response with Images */}
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-indigo-600">AI</span>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                      <p className="text-gray-700 mb-3">Here are some style options:</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-2"
                          >
                            <div className="h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-2" />
                            <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full mb-1" />
                            <div className="h-2 w-3/4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="mt-8">
                  <div className="flex gap-2">
                    <div className="flex-1 bg-white rounded-full border border-gray-200 px-4 py-3 shadow-inner">
                      <div className="h-2 w-1/2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full"></div>
                    </div>
                    <button className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">4.9</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-4 shadow-2xl"
            >
              <div className="text-center text-white">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs opacity-90">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-indigo-300 to-transparent"></div>
      </motion.div>
    </section>
  );
}