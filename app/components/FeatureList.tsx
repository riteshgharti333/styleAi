"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Palette,
  Scissors,
  DollarSign,
  TrendingUp,
  Zap,
  Sparkles,
  CheckCircle,
  Shield,
  Clock,
  UserCheck,
  Award,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Body & Height-Aware Styling",
    description: "AI analyzes your proportions to suggest flattering outfits.",
    color: "from-indigo-400 to-blue-400",
    bgColor: "bg-gradient-to-br from-indigo-50/50 to-blue-50/50",
    icon: <Target className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-indigo-400 to-blue-400",
    benefits: ["Proportion analysis", "Height optimization", "Body shape matching"],
    efficiency: "98% accuracy",
    detail: "Uses advanced computer vision to analyze body proportions"
  },
  {
    id: 2,
    title: "Skin Tone-Based Color Suggestions",
    description: "Personalized color palettes that complement your complexion.",
    color: "from-rose-400 to-pink-400",
    bgColor: "bg-gradient-to-br from-rose-50/50 to-pink-50/50",
    icon: <Palette className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-rose-400 to-pink-400",
    benefits: ["Seasonal color analysis", "Contrast optimization", "Skin undertone matching"],
    efficiency: "Personalized palettes",
    detail: "Analyzes skin undertones for perfect color harmony"
  },
  {
    id: 3,
    title: "Fit & Proportion Guidance",
    description: "Detailed advice on clothing fit and silhouette enhancement.",
    color: "from-emerald-400 to-green-400",
    bgColor: "bg-gradient-to-br from-emerald-50/50 to-green-50/50",
    icon: <Scissors className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-emerald-400 to-green-400",
    benefits: ["Tailoring tips", "Silhouette balance", "Fit optimization"],
    efficiency: "Professional-level advice",
    detail: "Includes specific measurements and fit recommendations"
  },
  {
    id: 4,
    title: "Budget-Friendly Fashion Tips",
    description: "Smart styling that works within your budget constraints.",
    color: "from-amber-400 to-orange-400",
    bgColor: "bg-gradient-to-br from-amber-50/50 to-orange-50/50",
    icon: <DollarSign className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-amber-400 to-orange-400",
    benefits: ["Cost-effective alternatives", "Investment piece guidance", "Budget planning"],
    efficiency: "Save up to 40%",
    detail: "Suggests affordable alternatives and smart investments"
  },
  {
    id: 5,
    title: "Personalized Results Over Time",
    description: "AI learns your style preferences for better recommendations.",
    color: "from-purple-400 to-violet-400",
    bgColor: "bg-gradient-to-br from-purple-50/50 to-violet-50/50",
    icon: <TrendingUp className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-purple-400 to-violet-400",
    benefits: ["Adaptive learning", "Style evolution tracking", "Preference memory"],
    efficiency: "Improves with use",
    detail: "Machine learning algorithms adapt to your unique taste"
  },
];

export default function FeatureList() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Minimal background with subtle gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100/20 via-transparent to-purple-100/20" />
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-40 h-40 rounded-full border border-indigo-200/10"
        />
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-20 left-20 w-32 h-32 rounded-full border border-purple-200/10"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header - Minimal */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-6"
          >
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Advanced Features
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="block text-gray-900">Smart Style</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Features
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Powered by advanced AI algorithms that understand fashion, fit, and personal style.
          </motion.p>
        </div>

        {/* Features Grid - Light & Clean Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              onClick={() => setExpandedFeature(feature.id === expandedFeature ? null : feature.id)}
              className="relative cursor-pointer"
            >
              {/* Main Feature Card - Minimal Design */}
              <motion.div
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.05)"
                }}
                animate={{ 
                  borderColor: hoveredFeature === feature.id ? "var(--color-brand-light)" : "transparent",
                  backgroundColor: expandedFeature === feature.id ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)"
                }}
                className={`
                  relative rounded-2xl backdrop-blur-sm
                  border-2 ${expandedFeature === feature.id ? 'border-indigo-200' : 'border-transparent'}
                  p-8
                  transition-all duration-500
                  bg-white/80
                `}
              >
                {/* Feature Header */}
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative p-4 rounded-xl ${feature.iconBg} shadow-lg flex-shrink-0`}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                    {expandedFeature === feature.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center"
                      >
                        <CheckCircle className="h-3 w-3 text-indigo-500 fill-indigo-500" />
                      </motion.div>
                    )}
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: expandedFeature === feature.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Zap className="h-3 w-3 text-amber-500" />
                        <span className="text-sm font-medium text-gray-700">{feature.efficiency}</span>
                      </div>
                      <div className="h-4 w-px bg-gray-200" />
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-indigo-500" />
                        <span className="text-xs text-gray-500">Real-time analysis</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm font-medium text-gray-700">Key Benefits</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium border border-gray-200"
                      >
                        {benefit}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Expanded Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedFeature === feature.id ? "auto" : 0,
                    opacity: expandedFeature === feature.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 flex-shrink-0">
                        <Shield className="h-4 w-4 text-indigo-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">How It Works</div>
                        <p className="text-sm text-gray-600">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Hover Indicator Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-b-2xl"
                />
              </motion.div>

              {/* Background Glow Effect */}
              <motion.div
                animate={{ 
                  opacity: hoveredFeature === feature.id ? 0.1 : 0,
                  scale: hoveredFeature === feature.id ? 1.05 : 1
                }}
                className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${feature.color} blur-xl pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats & Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10M+", label: "Style Analyses", icon: Target, color: "from-indigo-500 to-blue-500" },
              { value: "98%", label: "Accuracy Rate", icon: CheckCircle, color: "from-emerald-500 to-green-500" },
              { value: "24/7", label: "AI Availability", icon: Clock, color: "from-purple-500 to-pink-500" },
              { value: "50K+", label: "Happy Users", icon: UserCheck, color: "from-amber-500 to-orange-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl p-8 md:p-12 border border-indigo-100 shadow-xl shadow-indigo-500/5">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Style?
            </h3>
            
            <p className="text-gray-600 mb-8">
              Experience AI-powered fashion advice that understands you better with every interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30"
              >
                <span>Start Free Trial</span>
                <Zap className="h-5 w-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold shadow-lg"
              >
                <span>See Pricing</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}