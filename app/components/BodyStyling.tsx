"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ruler,
  User,
  Scissors,
  Armchair,
  Shield,
  Minimize2,
  Zap,
  ArrowRight,
  Sparkles,
  Target,
  Heart,
} from "lucide-react";

const bodyTypes = [
  {
    id: 1,
    title: "Short Height",
    description: "Style tips to elongate your silhouette and create balanced proportions.",
    color: "from-blue-400 to-teal-400",
    bgColor: "bg-gradient-to-br from-blue-50/50 to-teal-50/50",
    borderColor: "border-blue-100",
    icon: <Minimize2 className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-blue-400 to-teal-400",
    prompt: "What are the best clothing styles for short height?",
    tip: "Vertical lines, monochromatic outfits"
  },
  {
    id: 2,
    title: "Tall Height",
    description: "Learn to embrace your height with styles that create perfect proportions.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-gradient-to-br from-emerald-50/50 to-green-50/50",
    borderColor: "border-emerald-100",
    icon: <Ruler className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-500",
    prompt: "How to dress stylishly when you're tall?",
    tip: "Layered looks, horizontal details"
  },
  {
    id: 3,
    title: "Slim Body",
    description: "Add visual weight and create balanced proportions with strategic styling.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-violet-50/50 to-purple-50/50",
    borderColor: "border-violet-100",
    icon: <User className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
    prompt: "Best outfits for slim body types",
    tip: "Textured fabrics, layering"
  },
  {
    id: 4,
    title: "Heavy / Bulky Build",
    description: "Flattering styles that create clean lines and enhance your best features.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-50/50 to-orange-50/50",
    borderColor: "border-amber-100",
    icon: <Armchair className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    prompt: "Styling tips for heavy body build",
    tip: "Dark colors, proper fit"
  },
  {
    id: 5,
    title: "Broad Shoulders",
    description: "Balance your silhouette and draw attention to your best features.",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-rose-50/50 to-pink-50/50",
    borderColor: "border-rose-100",
    icon: <Shield className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
    prompt: "How to dress with broad shoulders?",
    tip: "V-necks, A-line silhouettes"
  },
  {
    id: 6,
    title: "Narrow Shoulders",
    description: "Create the illusion of width and build balanced proportions.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-indigo-50/50 to-blue-50/50",
    borderColor: "border-indigo-100",
    icon: <Minimize2 className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-indigo-500 to-blue-500",
    prompt: "Style advice for narrow shoulders",
    tip: "Shoulder pads, boat necks"
  },
];

export default function BodyStyling() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedBodyType, setSelectedBodyType] = useState<number | null>(null);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-50/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-50/30 to-transparent" />
        
        {/* Abstract shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-200/10 to-purple-200/10 blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/10 to-teal-200/10 blur-2xl"
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
            <Target className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Personalized Styling
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="block text-gray-900">Body-Based</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Styling
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Get personalized style advice tailored to your unique body type. 
            AI-powered recommendations to enhance your best features.
          </motion.p>
        </div>

        {/* Interactive Body Type Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {bodyTypes.map((bodyType, index) => (
            <motion.div
              key={bodyType.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(bodyType.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedBodyType(bodyType.id)}
              className="relative cursor-pointer"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{ y: -8 }}
                animate={{ 
                  scale: selectedBodyType === bodyType.id ? 1.02 : 1,
                  borderColor: selectedBodyType === bodyType.id ? "var(--color-brand)" : bodyType.borderColor
                }}
                className={`
                  relative rounded-2xl border-2 ${bodyType.borderColor}
                  ${bodyType.bgColor} backdrop-blur-sm
                  p-6 md:p-8 h-full overflow-hidden
                  transition-colors duration-300
                `}
                style={{
                  boxShadow: selectedBodyType === bodyType.id 
                    ? "0 20px 60px -15px rgba(99, 102, 241, 0.3)"
                    : "0 4px 20px rgba(0, 0, 0, 0.05)"
                }}
              >
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-white/10 to-transparent"
                />

                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.4 }}
                      className={`relative p-3 rounded-xl ${bodyType.iconBg} shadow-lg`}
                    >
                      <div className="relative z-10 text-white">
                        {bodyType.icon}
                      </div>
                      <motion.div
                        initial={{ opacity: 0.5 }}
                        whileHover={{ opacity: 1 }}
                        className={`absolute inset-0 ${bodyType.color} rounded-xl blur`}
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {bodyType.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <motion.div
                          animate={{ scale: hoveredCard === bodyType.id ? [1, 1.2, 1] : 1 }}
                          transition={{ duration: 0.6 }}
                          className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                        />
                        <span className="text-xs font-medium text-gray-500">
                          AI Personalized
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Selection Indicator */}
                  <motion.div
                    animate={{ 
                      scale: selectedBodyType === bodyType.id ? 1 : 0,
                      opacity: selectedBodyType === bodyType.id ? 1 : 0
                    }}
                    className="h-6 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center"
                  >
                    <Heart className="h-3 w-3 text-white fill-white" />
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: selectedBodyType === bodyType.id ? 1 : 0.8 }}
                  className="text-gray-600 leading-relaxed mb-6"
                >
                  {bodyType.description}
                </motion.p>

                {/* Quick Tip */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: selectedBodyType === bodyType.id ? "auto" : 0,
                    opacity: selectedBodyType === bodyType.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white/50 rounded-xl p-4 mb-6 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium text-gray-700">Quick Tip</span>
                    </div>
                    <p className="text-sm text-gray-600">{bodyType.tip}</p>
                  </div>
                </motion.div>

                {/* Action Area */}
                <div className="pt-4 border-t border-gray-100/50">
                  <div className="flex   flex-col gap-5">
                    <div className="text-sm">
                      <div className="flex items-center gap-2 text-gray-500 mb-1">
                        <Zap className="h-3 w-3 text-indigo-400" />
                        <span className="font-medium">AI Ready</span>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1">{bodyType.prompt}</p>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/chat?prompt=${encodeURIComponent(bodyType.prompt)}`}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-medium hover:shadow-lg transition-shadow"
                      >
                        <span>Try Style</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Selection Glow Effect */}
                {selectedBodyType === bodyType.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none"
                  />
                )}
              </motion.div>

              {/* Hover Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${bodyType.color} blur-xl pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        {/* Interactive Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              />
              <span className="text-sm text-gray-600">
                Click any body type to get detailed AI styling advice
              </span>
            </div>
          </div>
        </motion.div>

    
      </div>
    </section>
  );
}