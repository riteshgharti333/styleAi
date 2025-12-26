"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shirt,
  Scissors,
  Sparkles,
  Briefcase,
  TrendingUp,
  Moon,
  ChevronRight,
  Sparkle,
  Zap,
  ArrowRight,
} from "lucide-react";

const styleDirections = [
  {
    id: 1,
    title: "Casual Everyday",
    description:
      "Comfortable, practical outfits perfect for daily activities and relaxed settings.",
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-gradient-to-br from-blue-50/50 to-cyan-50/50",
    borderColor: "border-blue-100",
    icon: <Shirt className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-blue-400 to-cyan-400",
    prompt: "Suggest comfortable casual outfits for everyday wear",
  },
  {
    id: 2,
    title: "Streetwear",
    description:
      "Urban fashion with bold graphics, sneakers, and layered looks.",
    color: "from-gray-800 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-50/50 to-gray-100/50",
    borderColor: "border-gray-200",
    icon: <Sparkles className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-gray-800 to-gray-900",
    prompt: "Create trendy streetwear outfits with urban vibes",
  },
  {
    id: 3,
    title: "Minimal / Clean",
    description:
      "Simple, timeless pieces with neutral colors and clean silhouettes.",
    color: "from-stone-600 to-stone-700",
    bgColor: "bg-gradient-to-br from-stone-50/50 to-stone-100/50",
    borderColor: "border-stone-200",
    icon: <Scissors className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-stone-600 to-stone-700",
    prompt: "Design minimalist outfits with neutral color palettes",
  },
  {
    id: 4,
    title: "Smart Casual / Office",
    description:
      "Professional yet relaxed looks suitable for work environments.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-indigo-50/50 to-purple-50/50",
    borderColor: "border-indigo-100",
    icon: <Briefcase className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
    prompt: "Recommend smart casual outfits for office settings",
  },
  {
    id: 5,
    title: "Aesthetic / Trendy",
    description:
      "Fashion-forward looks inspired by current trends and aesthetics.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-pink-50/50 to-rose-50/50",
    borderColor: "border-pink-100",
    icon: <TrendingUp className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
    prompt: "Design trendy aesthetic outfits for social media",
  },
  {
    id: 6,
    title: "Party / Night Out",
    description:
      "Bold, glamorous outfits perfect for evenings and special events.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-violet-50/50 to-purple-50/50",
    borderColor: "border-violet-100",
    icon: <Moon className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    prompt: "Create stylish party outfits for night out events",
  },
];

export default function StyleDirections() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Static Background (removed animated motion.div) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-200/5 to-cyan-200/5 blur-lg" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-pink-200/5 to-rose-200/5 blur-lg" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-6"
          >
            <Zap className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Style Categories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="block text-gray-900">Explore Style</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Directions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Click any style to instantly chat with AI about that look. Get
            personalized recommendations tailored to each fashion direction.
          </motion.p>
        </div>

        {/* Style Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {styleDirections.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(style.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card Glow Effect - Using Framer Motion */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${style.color} blur`}
              />
              
              {/* Main Card */}
              <motion.div
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.1)"
                }}
                className={`
                  relative rounded-2xl border ${style.borderColor}
                  ${style.bgColor} backdrop-blur-sm
                  p-6 md:p-8 h-full
                `}
              >
                {/* Icon Badge */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`relative inline-flex p-3 rounded-xl ${style.iconBg} shadow-lg`}
                  >
                    <div className="relative z-10 text-white">{style.icon}</div>
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      whileHover={{ opacity: 1 }}
                      className={`absolute inset-0 ${style.color} rounded-xl blur`}
                    />
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {style.title}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: hoveredCard === style.id ? 45 : 0,
                        scale: hoveredCard === style.id ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`p-2 rounded-lg ${style.bgColor}`}
                    >
                      <ChevronRight
                        className={`h-5 w-5 ${
                          hoveredCard === style.id
                            ? "text-indigo-600"
                            : "text-gray-400"
                        }`}
                      />
                    </motion.div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {style.description}
                  </p>

                  {/* AI Prompt Preview */}
                  <div className="pt-4 border-t border-gray-100/50">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Sparkle className="h-4 w-4 text-indigo-400" />
                      <span className="font-medium">AI Prompt</span>
                    </div>
                    <div className="text-sm bg-white/50 rounded-lg p-3 border border-gray-100">
                      <p className="text-gray-700 line-clamp-2">
                        {style.prompt}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="pt-4"
                  >
                    <Link
                      href={`/chat?prompt=${encodeURIComponent(style.prompt)}`}
                      className="group/btn inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
                    >
                      <span className="relative">
                        Explore This Style
                        <motion.span
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
                        />
                      </span>
                      <motion.span
                        animate={{
                          x: hoveredCard === style.id ? 4 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`
                    absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                    bg-gradient-to-r ${style.color}
                  `}
                />
              </motion.div>

              {/* Floating Sparkle Effect */}
              {hoveredCard === style.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-2 -right-2 pointer-events-none"
                >
                  <Sparkle className="h-4 w-4 text-indigo-500" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Link
              href="/styles"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur"
              />
              <span>Explore All Style Categories</span>
              <motion.span
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
          </motion.div>

          {/* Stats Indicator */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative"
                >
                  <div className="relative h-3 w-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600" />
                </motion.div>
                <span className="font-medium">
                  <span className="text-gray-900">500+</span> Style Combinations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="relative"
                >
                  <div className="relative h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
                </motion.div>
                <span className="font-medium">
                  <span className="text-gray-900">Daily</span> New Inspirations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="relative"
                >
                  <div className="relative h-3 w-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600" />
                </motion.div>
                <span className="font-medium">
                  <span className="text-gray-900">24/7</span> AI Stylist
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}