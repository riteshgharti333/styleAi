"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Sparkles,
  UserCircle,
  Zap,
  ArrowRight,
  CheckCircle,
  Bot,
  Palette,
  Star,
  TrendingUp,
  Shield,
  Rocket,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Ask the AI Stylist",
    description: "Describe your style needs, upload photos, or use our style prompts.",
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-gradient-to-br from-blue-50/50 to-cyan-50/50",
    borderColor: "border-blue-100",
    icon: <MessageSquare className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-blue-400 to-cyan-400",
    features: ["Natural language chat", "Photo upload", "Style prompts", "Quick questions"],
    action: "Start Chatting",
    stat: "Instant Responses"
  },
  {
    id: 2,
    title: "Receive Personalized Advice",
    description: "Get AI-powered fashion recommendations tailored just for you.",
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-gradient-to-br from-purple-50/50 to-pink-50/50",
    borderColor: "border-purple-100",
    icon: <Sparkles className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-purple-400 to-pink-400",
    features: ["Outfit suggestions", "Style analysis", "Trend insights", "Shopping links"],
    action: "View Examples",
    stat: "95% User Satisfaction"
  },
  {
    id: 3,
    title: "Save & Improve Your Profile",
    description: "Build your style profile for increasingly accurate recommendations.",
    color: "from-emerald-400 to-green-400",
    bgColor: "bg-gradient-to-br from-emerald-50/50 to-green-50/50",
    borderColor: "border-emerald-100",
    icon: <UserCircle className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-emerald-400 to-green-400",
    features: ["Style preferences", "Body measurements", "Wardrobe items", "Saved outfits"],
    action: "Create Profile",
    stat: "Personalized Over Time"
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background with connecting lines pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Connecting lines - visible on desktop */}
        <div className="hidden lg:block absolute inset-0">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M10% 50% C 30% 50%, 70% 50%, 90% 50%"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating animated elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-16 h-16 rounded-full border border-indigo-200/20"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-1/4 right-10 w-20 h-20 rounded-full border border-purple-200/20"
        />

        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-200/5 to-cyan-200/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-200/5 to-pink-200/5 blur-3xl" />
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
            <Rocket className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Simple & Effective
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="block text-gray-900">How It</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Three simple steps to transform your style with AI-powered fashion advice. 
            Get personalized recommendations that improve over time.
          </motion.p>
        </div>

        {/* Progress Timeline - Different Layout */}
        <div className="relative mb-20">
          {/* Progress Bar */}
          <div className="hidden lg:flex items-center justify-center mb-12">
            <div className="relative w-3/4">
              <div className="absolute inset-0 h-2 bg-gray-100 rounded-full" />
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute inset-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"
              />
              
              {/* Step Indicators */}
              <div className="absolute inset-0 flex justify-between items-center">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setActiveStep(step.id)}
                    className={`relative cursor-pointer ${
                      activeStep === step.id ? 'z-10' : ''
                    }`}
                  >
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      activeStep >= step.id 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' 
                        : 'bg-white border-2 border-gray-200 text-gray-400'
                    }`}>
                      {step.id}
                    </div>
                    <motion.div
                      animate={{ 
                        opacity: activeStep === step.id ? 1 : 0,
                        scale: activeStep === step.id ? 1 : 0
                      }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-gray-900"
                    >
                      {step.title}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps Grid - Vertical on mobile, Horizontal on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(step.id)}
                className="relative cursor-pointer"
              >
                {/* Step Number Badge */}
                <motion.div
                  animate={{ 
                    scale: activeStep === step.id ? 1.1 : 1,
                    backgroundColor: activeStep === step.id ? "var(--color-brand)" : "var(--color-gray-100)"
                  }}
                  className="absolute -top-4 -left-4 h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center shadow-lg border border-gray-200 z-10"
                >
                  <span className={`text-lg font-bold ${
                    activeStep === step.id ? 'text-white' : 'text-gray-700'
                  }`}>
                    {index + 1}
                  </span>
                </motion.div>

                {/* Main Card - Process Flow Design */}
                <motion.div
                  whileHover={{ 
                    y: -4,
                    borderColor: "var(--color-brand-light)",
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)"
                  }}
                  animate={{ 
                    borderColor: activeStep === step.id ? "var(--color-brand)" : step.borderColor,
                    backgroundColor: activeStep === step.id ? "rgba(99, 102, 241, 0.05)" : step.bgColor
                  }}
                  className={`
                    relative rounded-2xl border-2 ${step.borderColor}
                    ${step.bgColor} backdrop-blur-sm
                    pt-12 pb-8 px-8 h-full
                    transition-all duration-500
                    overflow-hidden
                  `}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`relative p-3 rounded-xl ${step.iconBg} shadow-lg`}
                    >
                      <div className="text-white">
                        {step.icon}
                      </div>
                      {activeStep === step.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center"
                        >
                          <CheckCircle className="h-2 w-2 text-indigo-500 fill-indigo-500" />
                        </motion.div>
                      )}
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Zap className="h-3 w-3 text-amber-500" />
                        <span className="text-xs font-medium text-gray-500">
                          {step.stat}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Palette className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm font-medium text-gray-700">Features</span>
                    </div>
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <motion.div
                            animate={{ 
                              scale: hoveredStep === step.id ? 1.2 : 1,
                              backgroundColor: hoveredStep === step.id ? "var(--color-brand)" : "var(--color-gray-300)"
                            }}
                            className="h-2 w-2 rounded-full bg-gray-300"
                          />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-6 border-t border-gray-100/50">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={index === 0 ? "/chat" : index === 1 ? "/examples" : "/profile"}
                        className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium hover:shadow-lg transition-shadow"
                      >
                        <span>{step.action}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Step Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                      <motion.div
                        animate={{ 
                          x: [0, 4, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-gray-400"
                      >
                        <ArrowRight className="h-6 w-6" />
                      </motion.div>
                    </div>
                  )}

                  {/* Active State Glow */}
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.1 }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 pointer-events-none"
                    />
                  )}
                </motion.div>

                {/* Mobile Step Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <motion.div
                      animate={{ 
                        y: [0, 10, 0],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="h-8 w-px bg-gradient-to-b from-indigo-300 to-purple-300"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl p-8 md:p-12 border border-indigo-100 shadow-xl shadow-indigo-500/10">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  See It In Action
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Watch how our AI stylist transforms simple requests into 
                  personalized fashion advice in seconds.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { text: "No technical skills needed", icon: Shield },
                    { text: "Gets smarter with each interaction", icon: TrendingUp },
                    { text: "Available 24/7", icon: Star },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
                        <item.icon className="h-4 w-4 text-indigo-500" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>View Live Demo</span>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/start"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold shadow-lg"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white overflow-hidden">
                  {/* Chat Mockup */}
                  <div className="space-y-4">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl rounded-br-none px-4 py-3 max-w-[80%]">
                        <p className="text-sm">What should I wear for a job interview?</p>
                      </div>
                    </div>
                    
                    {/* AI Response */}
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-gray-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200 mb-2">
                          For a job interview, I recommend:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-xs">Navy blue suit or blazer</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-xs">White or light blue shirt</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-xs">Closed-toe professional shoes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Time Indicator */}
                    <div className="text-center">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs text-gray-400"
                      >
                        AI Response: 2 seconds
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute -top-3 -right-3">
                    <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold shadow-lg">
                      98% Accuracy
                    </div>
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