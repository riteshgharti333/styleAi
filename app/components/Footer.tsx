"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Zap,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Facebook,
  Copyright,
  ChevronUp,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Style Guide", href: "/style-guide" },
    { name: "FAQs", href: "/faq" },
    { name: "Support", href: "/support" },
  ],
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "API", href: "/api" },
    { name: "Status", href: "/status" },
  ],
};

const styleCategories = [
  {
    title: "Explore Style Directions",
    items: [
      "Casual Everyday",
      "Streetwear", 
      "Minimal / Clean",
      "Smart Casual / Office",
      "Aesthetic / Trendy",
      "Party / Night Out"
    ]
  },
  {
    title: "Body-Based Styling",
    items: [
      "Short Height",
      "Tall Height",
      "Slim Body",
      "Heavy / Bulky Build",
      "Broad Shoulders",
      "Narrow Shoulders"
    ]
  },
  {
    title: "Height & Proportion",
    items: [
      "Look Taller",
      "Balance Body Proportions",
      "Long Torso, Short Legs",
      "Short Torso, Long Legs",
      "Improve Outfit Silhouette"
    ]
  },
  {
    title: "Occasion-Based Styling",
    items: [
      "College / Daily Wear",
      "Office / Work",
      "Date Outfit",
      "Party / Night Event",
      "Wedding / Function"
    ]
  }
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          {/* Newsletter Section */}
          <div className="mb-16 md:mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-6"
              >
                <Sparkles className="h-4 w-4 text-indigo-500" />
                <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Stay Stylish
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Get Weekly Style Tips
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Join 50,000+ subscribers receiving AI-powered fashion advice and trend updates.
              </motion.p>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-6 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </div>
          </div>

          {/* Style Categories Grid */}
          <div className="mb-16 md:mb-20">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
            >
              Explore All Style Categories
            </motion.h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {styleCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                      <h5 className="text-lg font-semibold text-gray-900">
                        {category.title}
                      </h5>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 + index * 0.1 }}
                          whileHover={{ x: 4 }}
                        >
                          <Link
                            href={`/category/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors group/item"
                          >
                            <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                            <span>{item}</span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="col-span-2">
              <Link href="/" className="inline-block mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">S</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      StyleAI
                    </div>
                    <div className="text-xs text-gray-500">AI Fashion Assistant</div>
                  </div>
                </div>
              </Link>
              <p className="text-gray-600 mb-6">
                Your personal AI stylist powered by advanced machine learning. 
                Get personalized fashion advice for every body type and occasion.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={social.href}
                    aria-label={social.label}
                    className="h-10 w-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:shadow-md transition-all"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  {category}
                </h5>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-indigo-600 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-8 border-t border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                <Mail className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium text-gray-900">hello@styleai.com</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                <Phone className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="font-medium text-gray-900">+1 (555) 123-4567</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-medium text-gray-900">San Francisco, CA</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Copyright className="h-4 w-4" />
              <span className="text-sm">
                {new Date().getFullYear()} StyleAI. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-indigo-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-indigo-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-indigo-600 transition-colors">
                Cookie Policy
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 hover:text-indigo-600 transition-all"
            >
              <span className="text-sm">Back to top</span>
              <ChevronUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Made with love */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-sm text-gray-600"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
              </motion.div>
              <span>by the StyleAI team</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}