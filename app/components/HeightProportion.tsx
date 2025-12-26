"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Scale,
  UserCheck,
  GitCompare,
  GitPullRequest,
  Zap,
  Maximize2,
  Sparkles,
  ArrowRight,
  Target,
  TrendingUp,
} from "lucide-react";

const proportionTypes = [
  {
    id: 1,
    title: "Look Taller",
    description: "Strategic styling techniques to create the illusion of height.",
    color: "from-indigo-400 to-blue-400",
    bgColor: "bg-gradient-to-br from-indigo-50/50 to-blue-50/50",
    borderColor: "border-indigo-100",
    icon: <ArrowUp className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-indigo-400 to-blue-400",
    techniques: ["Vertical lines", "Monochromatic outfits", "High-waisted pants"],
    difficulty: "Easy",
    benefit: "Instant height boost"
  },
  {
    id: 2,
    title: "Balance Body Proportions",
    description: "Create harmony between upper and lower body proportions.",
    color: "from-emerald-400 to-teal-400",
    bgColor: "bg-gradient-to-br from-emerald-50/50 to-teal-50/50",
    borderColor: "border-emerald-100",
    icon: <Scale className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-emerald-400 to-teal-400",
    techniques: ["Strategic layering", "Color blocking", "Proportion play"],
    difficulty: "Medium",
    benefit: "Perfect harmony"
  },
  {
    id: 3,
    title: "Long Torso, Short Legs",
    description: "Elongate legs and balance your natural proportions.",
    color: "from-violet-400 to-purple-400",
    bgColor: "bg-gradient-to-br from-violet-50/50 to-purple-50/50",
    borderColor: "border-violet-100",
    icon: <UserCheck className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-violet-400 to-purple-400",
    techniques: ["High-waisted bottoms", "Color continuity", "Pointed shoes"],
    difficulty: "Easy",
    benefit: "Leg lengthening"
  },
  {
    id: 4,
    title: "Short Torso, Long Legs",
    description: "Create torso length and proportional balance.",
    color: "from-rose-400 to-pink-400",
    bgColor: "bg-gradient-to-br from-rose-50/50 to-pink-50/50",
    borderColor: "border-rose-100",
    icon: <GitCompare className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-rose-400 to-pink-400",
    techniques: ["Cropped tops", "Belt placement", "Vertical details"],
    difficulty: "Medium",
    benefit: "Torso elongation"
  },
  {
    id: 5,
    title: "Improve Outfit Silhouette",
    description: "Create clean lines and flattering overall shape.",
    color: "from-amber-400 to-orange-400",
    bgColor: "bg-gradient-to-br from-amber-50/50 to-orange-50/50",
    borderColor: "border-amber-100",
    icon: <Maximize2 className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-amber-400 to-orange-400",
    techniques: ["Proper tailoring", "Silhouette awareness", "Fabric choice"],
    difficulty: "Advanced",
    benefit: "Professional polish"
  },
  {
    id: 6,
    title: "Create Visual Balance",
    description: "Draw attention where you want and create optical illusions.",
    color: "from-cyan-400 to-sky-400",
    bgColor: "bg-gradient-to-br from-cyan-50/50 to-sky-50/50",
    borderColor: "border-cyan-100",
    icon: <GitPullRequest className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-cyan-400 to-sky-400",
    techniques: ["Strategic accessories", "Pattern placement", "Focus points"],
    difficulty: "Advanced",
    benefit: "Masterful styling"
  },
];

export default function HeightProportion() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTechnique, setActiveTechnique] = useState<number | null>(null);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background with geometric pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal gradient lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-48 h-48 border border-indigo-200/20 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-purple-200/20 rounded-lg rotate-45"
        />
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
            <TrendingUp className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Proportion Mastery
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="block text-gray-900">Height &</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Proportion
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Master the art of optical illusions and proportional styling. 
            Learn techniques to enhance your natural proportions and create balanced looks.
          </motion.p>
        </div>

        {/* Interactive Proportion Cards - DIFFERENT DESIGN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
          {proportionTypes.map((proportion, index) => (
            <motion.div
              key={proportion.id}
              initial={{ opacity: 0, y: 40, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(proportion.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative perspective-1000"
            >
              {/* Card Shadow */}
              <motion.div
                animate={{ 
                  opacity: hoveredCard === proportion.id ? 0.2 : 0.1,
                  scale: hoveredCard === proportion.id ? 1.05 : 1
                }}
                className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl blur-lg"
              />

              {/* Main Card - Different Layout */}
              <motion.div
                whileHover={{ 
                  y: -12,
                  rotateX: 5,
                  rotateY: hoveredCard === proportion.id ? 2 : 0
                }}
                animate={{ 
                  borderColor: hoveredCard === proportion.id ? "var(--color-brand-light)" : proportion.borderColor
                }}
                className={`
                  relative rounded-2xl border-2 ${proportion.borderColor}
                  ${proportion.bgColor} backdrop-blur-sm
                  p-8 h-full overflow-hidden
                  transform-gpu transition-all duration-500
                  shadow-xl shadow-black/5
                `}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Top Ribbon with Difficulty */}
                <div className="absolute top-0 right-0">
                  <motion.div
                    animate={{ 
                      scale: hoveredCard === proportion.id ? 1.1 : 1,
                      backgroundColor: hoveredCard === proportion.id ? "var(--color-brand)" : "transparent"
                    }}
                    className={`
                      relative px-4 py-1.5 rounded-bl-lg rounded-tr-lg
                      ${hoveredCard === proportion.id ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-white/90'}
                      backdrop-blur-sm border-b border-r ${proportion.borderColor}
                    `}
                  >
                    <span className={`text-xs font-semibold ${hoveredCard === proportion.id ? 'text-white' : 'text-gray-700'}`}>
                      {proportion.difficulty}
                    </span>
                  </motion.div>
                </div>

                {/* Icon Circle - Different Position */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-full blur-md" />
                    <div className={`relative p-4 rounded-full ${proportion.iconBg} shadow-xl`}>
                      <div className="text-white transform-gpu">
                        {proportion.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Title and Description - Centered */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {proportion.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {proportion.description}
                  </p>
                </div>

                {/* Techniques Grid - Different Layout */}
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-700">Key Techniques</span>
                    <Sparkles className="h-4 w-4 text-amber-500" />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {proportion.techniques.map((technique, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                        whileHover={{ 
                          scale: 1.02,
                          x: 4,
                          backgroundColor: "rgba(255, 255, 255, 0.8)"
                        }}
                        onClick={() => setActiveTechnique(proportion.id === activeTechnique ? null : proportion.id)}
                        className={`
                          px-4 py-3 rounded-xl text-sm font-medium
                          ${activeTechnique === proportion.id 
                            ? 'bg-white shadow-md border border-gray-200' 
                            : 'bg-white/50 border border-gray-100'
                          }
                          cursor-pointer transition-all duration-300
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={{ 
                              scale: activeTechnique === proportion.id ? 1.2 : 1,
                              backgroundColor: activeTechnique === proportion.id ? "var(--color-brand)" : "var(--color-gray-200)"
                            }}
                            className="h-2 w-2 rounded-full bg-gray-300"
                          />
                          <span className="text-gray-700">{technique}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefit Badge - Bottom Section */}
                <div className="pt-6 border-t border-gray-100/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${proportion.bgColor}`}>
                        <Target className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Main Benefit</div>
                        <div className="text-sm font-semibold text-gray-900">
                          {proportion.benefit}
                        </div>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={`/guide/${proportion.title.toLowerCase().replace(/ /g, '-')}`}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:shadow-lg transition-shadow"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                {hoveredCard === proportion.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent pointer-events-none"
                  />
                )}
              </motion.div>

              {/* Corner Accent */}
              <motion.div
                animate={{ 
                  opacity: hoveredCard === proportion.id ? 1 : 0,
                  scale: hoveredCard === proportion.id ? 1 : 0
                }}
                className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-indigo-400 rounded-tl-lg"
              />
              <motion.div
                animate={{ 
                  opacity: hoveredCard === proportion.id ? 1 : 0,
                  scale: hoveredCard === proportion.id ? 1 : 0
                }}
                className="absolute -top-2 -right-2 h-6 w-6 border-t-2 border-r-2 border-indigo-400 rounded-tr-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* Interactive Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-xl shadow-indigo-500/5">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Master Proportion Styling
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Get step-by-step guides, visual examples, and personalized advice 
                  for mastering proportion-based styling techniques.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Visual Guides", "Before/After", "Video Tutorials", "AI Analysis"].map((feature, idx) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm font-medium border border-indigo-100"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                  <div className="absolute -top-3 -right-3 h-6 w-6 border-t-2 border-r-2 border-indigo-400 rounded-tr-lg" />
                  <div className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-purple-400 rounded-bl-lg" />
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-300 mb-1">Pro Tip</div>
                    <h4 className="text-xl font-bold mb-3">
                      Focus on vertical lines for instant height
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Monochromatic outfits create an uninterrupted vertical line, 
                      making you appear taller instantly.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-indigo-400 to-purple-400"
                        />
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Effectiveness: 85%</div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href="/proportion-masterclass"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg transition-shadow"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}