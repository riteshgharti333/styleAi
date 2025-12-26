"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Heart,
  Music,
  Gem,
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  Star,
  Zap,
  Target,
} from "lucide-react";

const occasions = [
  {
    id: 1,
    title: "College / Daily Wear",
    description: "Comfortable yet stylish outfits perfect for campus life and everyday activities.",
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-gradient-to-br from-blue-50/50 to-cyan-50/50",
    borderColor: "border-blue-100",
    icon: <GraduationCap className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-blue-400 to-cyan-400",
    dressCode: "Casual Comfort",
    time: "All Day",
    people: "Peers & Friends",
    essentials: ["Comfortable shoes", "Backpack-friendly", "Layer options"],
    vibe: "Effortlessly cool"
  },
  {
    id: 2,
    title: "Office / Work",
    description: "Professional attire that balances style with workplace appropriateness.",
    color: "from-indigo-400 to-purple-400",
    bgColor: "bg-gradient-to-br from-indigo-50/50 to-purple-50/50",
    borderColor: "border-indigo-100",
    icon: <Briefcase className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-indigo-400 to-purple-400",
    dressCode: "Business Casual",
    time: "9AM - 5PM",
    people: "Colleagues & Clients",
    essentials: ["Blazer", "Tailored pants", "Professional shoes"],
    vibe: "Polished & Professional"
  },
  {
    id: 3,
    title: "Date Outfit",
    description: "Romantic and confident looks that make a great first impression.",
    color: "from-rose-400 to-pink-400",
    bgColor: "bg-gradient-to-br from-rose-50/50 to-pink-50/50",
    borderColor: "border-rose-100",
    icon: <Heart className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-rose-400 to-pink-400",
    dressCode: "Smart Casual",
    time: "Evening",
    people: "Date Partner",
    essentials: ["Confidence piece", "Comfortable yet chic", "Conversation starter"],
    vibe: "Charming & Confident"
  },
  {
    id: 4,
    title: "Party / Night Event",
    description: "Bold, fashionable looks perfect for social gatherings and nightlife.",
    color: "from-violet-400 to-purple-500",
    bgColor: "bg-gradient-to-br from-violet-50/50 to-purple-50/50",
    borderColor: "border-violet-100",
    icon: <Music className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
    dressCode: "Night Out",
    time: "Evening - Night",
    people: "Friends & Social",
    essentials: ["Statement piece", "Danceable outfit", "Night accessories"],
    vibe: "Bold & Energetic"
  },
  {
    id: 5,
    title: "Wedding / Function",
    description: "Elegant and sophisticated attire for formal celebrations and ceremonies.",
    color: "from-amber-400 to-orange-400",
    bgColor: "bg-gradient-to-br from-amber-50/50 to-orange-50/50",
    borderColor: "border-amber-100",
    icon: <Gem className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-amber-400 to-orange-400",
    dressCode: "Formal / Semi-Formal",
    time: "Day - Evening",
    people: "Family & Guests",
    essentials: ["Elegant dress/suit", "Formal shoes", "Subtle accessories"],
    vibe: "Elegant & Sophisticated"
  },
  {
    id: 6,
    title: "Travel Outfit",
    description: "Comfort meets style for airport looks and travel adventures.",
    color: "from-emerald-400 to-teal-400",
    bgColor: "bg-gradient-to-br from-emerald-50/50 to-teal-50/50",
    borderColor: "border-emerald-100",
    icon: <Sparkles className="h-6 w-6" />,
    iconBg: "bg-gradient-to-br from-emerald-400 to-teal-400",
    dressCode: "Travel Comfort",
    time: "All Day",
    people: "Travel Companions",
    essentials: ["Comfort layers", "Easy shoes", "Functional accessories"],
    vibe: "Chic & Practical"
  },
];

export default function OccasionStyling() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeOccasion, setActiveOccasion] = useState<number | null>(null);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background with circular patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/5 to-purple-50/5" />
        
        {/* Floating dots pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, Math.random() * 30 - 15, 0],
                x: [0, Math.random() * 20 - 10, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
              className="absolute h-1 w-1 rounded-full bg-indigo-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Large circular gradients */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/10 to-cyan-200/10 blur-2xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-200/10 to-pink-200/10 blur-2xl"
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
            <Calendar className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Event Styling
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="block text-gray-900">Occasion-Based</span>
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
            Perfect outfits for every occasion. Get AI-powered styling advice tailored 
            to specific events, dress codes, and social settings.
          </motion.p>
        </div>

        {/* Occasion Cards - Different Circular Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(occasion.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveOccasion(occasion.id === activeOccasion ? null : occasion.id)}
              className="relative cursor-pointer"
            >
              {/* Outer Glow Ring */}
              <motion.div
                animate={{ 
                  scale: hoveredCard === occasion.id ? 1.05 : 1,
                  borderWidth: hoveredCard === occasion.id ? 2 : 0,
                  borderColor: hoveredCard === occasion.id ? occasion.color.replace("from-", "").split(" ")[0] : "transparent"
                }}
                className="absolute -ins-4 rounded-3xl bg-gradient-to-r opacity-20 blur-lg"
                style={{
                  background: `linear-gradient(135deg, ${occasion.color.replace("from-", "").replace("to-", "").replace(" ", ",")})`
                }}
              />

              {/* Main Card - Circular Inspired Design */}
              <motion.div
                whileHover={{ 
                  y: -8,
                  rotateZ: hoveredCard === occasion.id ? -2 : 0,
                  scale: hoveredCard === occasion.id ? 1.02 : 1
                }}
                animate={{ 
                  boxShadow: activeOccasion === occasion.id 
                    ? "0 25px 50px -12px rgba(99, 102, 241, 0.25)" 
                    : "0 10px 30px rgba(0, 0, 0, 0.08)"
                }}
                className={`
                  relative rounded-3xl ${occasion.bgColor} backdrop-blur-sm
                  border-2 ${occasion.borderColor}
                  p-8 h-full overflow-hidden
                  transition-all duration-500
                `}
                style={{
                  clipPath: activeOccasion === occasion.id 
                    ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    : "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)"
                }}
              >
                {/* Top Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${occasion.iconBg} transform rotate-45 -translate-y-1/2 translate-x-1/2`} />
                  <div className="absolute top-3 right-3">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Circular Icon Container */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    {/* Outer Ring */}
                    <motion.div
                      animate={{ 
                        rotate: hoveredCard === occasion.id ? 180 : 0,
                        scale: hoveredCard === occasion.id ? 1.1 : 1
                      }}
                      className="absolute inset-0 rounded-full border-2 border-dashed opacity-30"
                      style={{
                        borderColor: occasion.color.replace("from-", "").split(" ")[0]
                      }}
                    />
                    
                    {/* Icon Circle */}
                    <div className={`relative p-5 rounded-full ${occasion.iconBg} shadow-xl`}>
                      <div className="text-white">
                        {occasion.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Title and Description */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {occasion.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {occasion.description}
                  </p>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-3 rounded-xl bg-white/50">
                    <div className="flex justify-center mb-2">
                      <Target className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Dress Code</div>
                    <div className="text-sm font-semibold text-gray-900">{occasion.dressCode}</div>
                  </div>
                  
                  <div className="text-center p-3 rounded-xl bg-white/50">
                    <div className="flex justify-center mb-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Best Time</div>
                    <div className="text-sm font-semibold text-gray-900">{occasion.time}</div>
                  </div>
                  
                  <div className="text-center p-3 rounded-xl bg-white/50">
                    <div className="flex justify-center mb-2">
                      <Users className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="text-xs text-gray-500 mb-1">People</div>
                    <div className="text-sm font-semibold text-gray-900 line-clamp-1">{occasion.people}</div>
                  </div>
                  
                  <div className="text-center p-3 rounded-xl bg-white/50">
                    <div className="flex justify-center mb-2">
                      <Zap className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Vibe</div>
                    <div className="text-sm font-semibold text-gray-900 line-clamp-1">{occasion.vibe}</div>
                  </div>
                </div>

                {/* Essentials Tags */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-700">Key Essentials</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {occasion.essentials.slice(0, 3).map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-full bg-white text-gray-700 text-xs font-medium border border-gray-200 shadow-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 border-t border-gray-100/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Ready to style?</div>
                      <div className="text-sm font-semibold text-gray-900">
                        Get AI Recommendations
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={`/occasion/${occasion.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:shadow-lg transition-shadow"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Active State Overlay */}
                {activeOccasion === occasion.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-3xl bg-gradient-to-t from-white/30 to-transparent pointer-events-none"
                  />
                )}
              </motion.div>

              {/* Floating Corner Elements */}
              <motion.div
                animate={{ 
                  opacity: hoveredCard === occasion.id ? 1 : 0,
                  y: hoveredCard === occasion.id ? 0 : 10
                }}
                className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
              />
              <motion.div
                animate={{ 
                  opacity: hoveredCard === occasion.id ? 1 : 0,
                  y: hoveredCard === occasion.id ? 0 : 10
                }}
                className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
              />
              <motion.div
                animate={{ 
                  opacity: hoveredCard === occasion.id ? 1 : 0,
                  y: hoveredCard === occasion.id ? 0 : -10
                }}
                className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
              />
              <motion.div
                animate={{ 
                  opacity: hoveredCard === occasion.id ? 1 : 0,
                  y: hoveredCard === occasion.id ? 0 : -10
                }}
                className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl p-8 md:p-12 border border-indigo-100 shadow-xl shadow-indigo-500/10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-8 w-8 border border-indigo-200 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `scale(${0.5 + Math.random()})`
                  }}
                />
              ))}
            </div>

            <div className="relative">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Not Sure What to Wear?
              </h3>
              
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Tell us about your event, and our AI stylist will create personalized 
                outfit recommendations perfect for the occasion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/event-planner"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30"
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>Plan My Event Outfit</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/stylist-chat"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold shadow-lg"
                  >
                    <span>Chat with Event Stylist</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}