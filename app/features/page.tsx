"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Target,
  Palette,
  Scissors,
  DollarSign,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  UserCheck,
  Award,
  MessageSquare,
  Bot,
  Star,
  Heart,
  Ruler,
  Users,
  Calendar,
  Music,
  Gem,
  GraduationCap,
  Briefcase,
  Maximize2,
  Minimize2,
  Armchair,
  GitCompare,
  GitPullRequest,
  Scale,
  ArrowUp,
  Search,
  Filter,
  Sliders,
  Eye,
  Camera,
  ShoppingBag,
  BookOpen,
  Lightbulb,
  Gift,
  Crown,
  Rocket,
} from "lucide-react";

export default function FeaturesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const categories = [
    { id: "all", label: "All Features", icon: Sparkles },
    { id: "body", label: "Body & Fit", icon: Ruler },
    { id: "color", label: "Color & Style", icon: Palette },
    { id: "occasion", label: "Occasions", icon: Calendar },
    { id: "smart", label: "Smart Features", icon: Zap },
  ];

  const allFeatures = [
    // Body & Fit Features
    {
      id: 1,
      category: "body",
      title: "Body-Aware Styling",
      description: "AI analyzes your body proportions to suggest the most flattering outfits for your unique shape.",
      longDescription: "Our advanced AI uses computer vision to analyze your body proportions, including shoulder width, torso length, and overall silhouette. It then recommends clothing styles, cuts, and fits that enhance your natural features and create balanced proportions.",
      color: "from-indigo-400 to-blue-400",
      bgColor: "bg-gradient-to-br from-indigo-50/50 to-blue-50/50",
      borderColor: "border-indigo-100",
      icon: <Target className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-indigo-400 to-blue-400",
      features: ["Proportion analysis", "Height optimization", "Body shape matching", "Fit recommendations"],
      efficiency: "98% accuracy",
      badge: "Most Popular",
    },
    {
      id: 2,
      category: "body",
      title: "Height Proportion Guide",
      description: "Master optical illusions and styling techniques to enhance your natural height and proportions.",
      longDescription: "Learn professional styling techniques used by fashion experts to create the illusion of height. From vertical lines to monochromatic dressing, our AI provides specific recommendations tailored to your height and body type.",
      color: "from-emerald-400 to-teal-400",
      bgColor: "bg-gradient-to-br from-emerald-50/50 to-teal-50/50",
      borderColor: "border-emerald-100",
      icon: <ArrowUp className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-400",
      features: ["Vertical line techniques", "Proportion balancing", "Shoe recommendations", "Pattern guidance"],
      efficiency: "Pro techniques",
      badge: null,
    },
    {
      id: 3,
      category: "body",
      title: "Fit & Tailoring Advice",
      description: "Detailed guidance on how clothes should fit your body type for a polished, professional look.",
      longDescription: "Get specific measurements and fit recommendations for every garment type. Our AI considers your body measurements and preferences to suggest ideal fits, from slim to relaxed, and everything in between.",
      color: "from-violet-400 to-purple-400",
      bgColor: "bg-gradient-to-br from-violet-50/50 to-purple-50/50",
      borderColor: "border-violet-100",
      icon: <Scissors className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-400",
      features: ["Measurement analysis", "Tailoring tips", "Size recommendations", "Alteration guidance"],
      efficiency: "Professional",
      badge: null,
    },
    {
      id: 4,
      category: "body",
      title: "Body Shape Matching",
      description: "Identify your body shape and get styles that celebrate your unique proportions.",
      longDescription: "Whether you're pear-shaped, apple-shaped, rectangular, hourglass, or inverted triangle, our AI provides personalized recommendations that highlight your best features and create balanced silhouettes.",
      color: "from-rose-400 to-pink-400",
      bgColor: "bg-gradient-to-br from-rose-50/50 to-pink-50/50",
      borderColor: "border-rose-100",
      icon: <Maximize2 className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-rose-400 to-pink-400",
      features: ["Shape identification", "Flattering cuts", "Problem area solutions", "Confidence boosters"],
      efficiency: "Personalized",
      badge: "New",
    },

    // Color & Style Features
    {
      id: 5,
      category: "color",
      title: "Skin Tone Color Analysis",
      description: "Discover your perfect color palette based on your unique skin tone and undertones.",
      longDescription: "Using advanced color theory and AI analysis, we determine your skin's undertone (warm, cool, or neutral) and recommend colors that make you glow. Get seasonal color palettes that complement your natural coloring.",
      color: "from-amber-400 to-orange-400",
      bgColor: "bg-gradient-to-br from-amber-50/50 to-orange-50/50",
      borderColor: "border-amber-100",
      icon: <Palette className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-400",
      features: ["Undertone detection", "Seasonal palettes", "Color harmony", "Contrast analysis"],
      efficiency: "AI-Powered",
      badge: "Premium",
    },
    {
      id: 6,
      category: "color",
      title: "Pattern & Print Guidance",
      description: "Learn which patterns, prints, and textures work best for your body type and style.",
      longDescription: "Not all patterns are created equal. Our AI analyzes which print sizes, patterns, and textures will be most flattering for your proportions, helping you make confident choices when shopping.",
      color: "from-cyan-400 to-sky-400",
      bgColor: "bg-gradient-to-br from-cyan-50/50 to-sky-50/50",
      borderColor: "border-cyan-100",
      icon: <Eye className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-cyan-400 to-sky-400",
      features: ["Pattern scaling", "Print placement", "Texture matching", "Visual weight"],
      efficiency: "Expert level",
      badge: null,
    },
    {
      id: 7,
      category: "color",
      title: "Style Personality Quiz",
      description: "Discover your unique style personality and get recommendations that match your aesthetic.",
      longDescription: "Take our interactive style quiz to identify whether you're classic, bohemian, minimalist, edgy, romantic, or a blend of styles. Your style DNA informs every recommendation we make.",
      color: "from-pink-400 to-rose-400",
      bgColor: "bg-gradient-to-br from-pink-50/50 to-rose-50/50",
      borderColor: "border-pink-100",
      icon: <Heart className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-pink-400 to-rose-400",
      features: ["Style DNA", "Aesthetic matching", "Wardrobe alignment", "Trend adaptation"],
      efficiency: "Fun & accurate",
      badge: "Interactive",
    },
    {
      id: 8,
      category: "color",
      title: "Wardrobe Color Planning",
      description: "Build a cohesive wardrobe with colors that mix and match perfectly.",
      longDescription: "Create a capsule wardrobe where every piece works together. Our AI helps you choose a base color palette and accent colors that create endless outfit combinations from fewer pieces.",
      color: "from-purple-400 to-violet-400",
      bgColor: "bg-gradient-to-br from-purple-50/50 to-violet-50/50",
      borderColor: "border-purple-100",
      icon: <Sliders className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-purple-400 to-violet-400",
      features: ["Capsule planning", "Color coordination", "Mix & match", "Shopping efficiency"],
      efficiency: "Smart system",
      badge: null,
    },

    // Occasion Features
    {
      id: 9,
      category: "occasion",
      title: "Event Outfit Planner",
      description: "Get perfect outfit recommendations for any event, from casual brunches to black-tie galas.",
      longDescription: "Tell us about your event—the dress code, venue, weather, and your preferences—and our AI creates multiple outfit options complete with accessories and styling tips for each.",
      color: "from-blue-400 to-indigo-400",
      bgColor: "bg-gradient-to-br from-blue-50/50 to-indigo-50/50",
      borderColor: "border-blue-100",
      icon: <Calendar className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-blue-400 to-indigo-400",
      features: ["Dress code decoder", "Venue consideration", "Weather adaptation", "Complete looks"],
      efficiency: "Event-ready",
      badge: "Popular",
    },
    {
      id: 10,
      category: "occasion",
      title: "Work & Professional Wear",
      description: "Navigate office dress codes with confidence and build a powerful professional wardrobe.",
      longDescription: "From business formal to casual Friday, our AI understands workplace dress codes across industries. Get recommendations that project professionalism while expressing your personal style.",
      color: "from-slate-400 to-gray-400",
      bgColor: "bg-gradient-to-br from-slate-50/50 to-gray-50/50",
      borderColor: "border-slate-100",
      icon: <Briefcase className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-slate-400 to-gray-400",
      features: ["Industry guidance", "Dress code levels", "Power dressing", "Comfort balance"],
      efficiency: "Career-boosting",
      badge: null,
    },
    {
      id: 11,
      category: "occasion",
      title: "Date Night & Social Events",
      description: "Make unforgettable impressions with outfits that boost your confidence for any social setting.",
      longDescription: "Whether it's a first date, girls' night out, or networking event, get outfit suggestions that match the vibe and make you feel amazing. Includes conversation-starting style tips.",
      color: "from-rose-400 to-pink-400",
      bgColor: "bg-gradient-to-br from-rose-50/50 to-pink-50/50",
      borderColor: "border-rose-100",
      icon: <Music className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-rose-400 to-pink-400",
      features: ["Vibe matching", "Confidence boosters", "Conversation pieces", "Photo-ready looks"],
      efficiency: "Impression-making",
      badge: null,
    },
    {
      id: 12,
      category: "occasion",
      title: "Wedding & Formal Events",
      description: "Navigate wedding guest attire, formal galas, and special celebrations with elegance.",
      longDescription: "From decoding 'beach formal' to understanding 'black tie optional,' our AI ensures you're perfectly dressed for every formal occasion. Includes etiquette tips and accessory coordination.",
      color: "from-amber-400 to-yellow-400",
      bgColor: "bg-gradient-to-br from-amber-50/50 to-yellow-50/50",
      borderColor: "border-amber-100",
      icon: <Gem className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-amber-400 to-yellow-400",
      features: ["Dress code mastery", "Etiquette guidance", "Accessory pairing", "Seasonal appropriateness"],
      efficiency: "Elegance assured",
      badge: "Premium",
    },

    // Smart Features
    {
      id: 13,
      category: "smart",
      title: "Virtual Try-On",
      description: "See how outfits look on you before buying with our AI-powered virtual try-on technology.",
      longDescription: "Upload a photo and see how different outfits, colors, and styles look on your actual body. Our AI renders realistic previews that help you shop with confidence and reduce returns.",
      color: "from-indigo-400 to-purple-400",
      bgColor: "bg-gradient-to-br from-indigo-50/50 to-purple-50/50",
      borderColor: "border-indigo-100",
      icon: <Camera className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-indigo-400 to-purple-400",
      features: ["Photo upload", "Realistic rendering", "Outfit preview", "Side-by-side comparison"],
      efficiency: "Game-changing",
      badge: "Beta",
    },
    {
      id: 14,
      category: "smart",
      title: "Smart Shopping Assistant",
      description: "Get real-time shopping recommendations with links to buy recommended items within your budget.",
      longDescription: "Our AI searches thousands of retailers to find pieces that match our recommendations. Set your budget, preferred brands, and size, and get personalized shopping links with price comparisons.",
      color: "from-emerald-400 to-green-400",
      bgColor: "bg-gradient-to-br from-emerald-50/50 to-green-50/50",
      borderColor: "border-emerald-100",
      icon: <ShoppingBag className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-emerald-400 to-green-400",
      features: ["Budget filtering", "Brand preferences", "Size availability", "Price alerts"],
      efficiency: "Save 40% time",
      badge: "Money-saver",
    },
    {
      id: 15,
      category: "smart",
      title: "Wardrobe Digitization",
      description: "Digitize your existing wardrobe and get outfit suggestions using clothes you already own.",
      longDescription: "Upload photos of your wardrobe items and our AI catalogs everything. Get daily outfit suggestions from your existing clothes, identify gaps in your wardrobe, and shop smarter.",
      color: "from-violet-400 to-purple-400",
      bgColor: "bg-gradient-to-br from-violet-50/50 to-purple-50/50",
      borderColor: "border-violet-100",
      icon: <BookOpen className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-400",
      features: ["Wardrobe catalog", "Outfit generation", "Gap analysis", "Wear tracking"],
      efficiency: "Wardrobe maxed",
      badge: "New",
    },
    {
      id: 16,
      category: "smart",
      title: "Trend Forecast & Adaptation",
      description: "Stay ahead of fashion trends and learn how to incorporate them into your personal style.",
      longDescription: "Our AI analyzes global fashion trends, runway shows, and street style to predict upcoming trends. Get recommendations on which trends suit your style and how to wear them authentically.",
      color: "from-orange-400 to-red-400",
      bgColor: "bg-gradient-to-br from-orange-50/50 to-red-50/50",
      borderColor: "border-orange-100",
      icon: <TrendingUp className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-orange-400 to-red-400",
      features: ["Trend analysis", "Personalized adaptation", "Seasonal updates", "Investment guidance"],
      efficiency: "Always current",
      badge: "Pro",
    },
    {
      id: 17,
      category: "smart",
      title: "AI Style Chat 24/7",
      description: "Chat with our AI stylist anytime for instant fashion advice, outfit emergencies, and style tips.",
      longDescription: "Like having a personal stylist in your pocket. Ask anything—what to wear to an interview tomorrow, how to style a statement piece, or whether two items go together. Available 24/7 with instant responses.",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50/50 to-cyan-50/50",
      borderColor: "border-blue-100",
      icon: <MessageSquare className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-400",
      features: ["Instant responses", "Photo analysis", "Voice input", "Style emergency mode"],
      efficiency: "Always available",
      badge: "Core Feature",
    },
    {
      id: 18,
      category: "smart",
      title: "Budget-Friendly Alternatives",
      description: "Get style recommendations that work within your budget with smart alternatives to expensive pieces.",
      longDescription: "Love a designer look but working with a budget? Our AI finds affordable alternatives that capture the same aesthetic. Set your price range and get recommendations that don't break the bank.",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-50/50 to-emerald-50/50",
      borderColor: "border-green-100",
      icon: <DollarSign className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-400",
      features: ["Budget settings", "Alternative finds", "Investment pieces", "Cost-per-wear analysis"],
      efficiency: "Save up to 60%",
      badge: "Smart Saver",
    },
  ];

  const filteredFeatures = activeCategory === "all" 
    ? allFeatures 
    : allFeatures.filter(feature => feature.category === activeCategory);

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section
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
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-300/20 to-purple-300/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-200/10 to-rose-200/10 blur-3xl"
          />
          
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px),
                               linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-8"
          >
            <Zap className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block text-gray-900">
                Everything You Need
              </span>
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                To Master Your Style
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              From body-aware styling to virtual try-ons, discover all the powerful features 
              that make StyleAI your personal fashion companion.
            </p>
          </motion.div>

          {/* Feature Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            {[
              { icon: Sparkles, text: "18+ Features" },
              { icon: Shield, text: "Privacy First" },
              { icon: Clock, text: "24/7 Available" },
              { icon: Star, text: "4.9/5 Rating" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-indigo-500" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-indigo-300 to-transparent"></div>
        </motion.div>
      </section>

      {/* Features Grid Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-200/10 to-purple-200/10 blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/10 to-teal-200/10 blur-2xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-200 hover:text-indigo-600"
                  }
                `}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                  className="relative cursor-pointer"
                >
                  {/* Feature Card */}
                  <motion.div
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)"
                    }}
                    animate={{ 
                      borderColor: expandedFeature === feature.id ? "var(--color-brand-light)" : feature.borderColor,
                      scale: expandedFeature === feature.id ? 1.02 : 1,
                    }}
                    className={`
                      relative rounded-2xl border-2 ${feature.borderColor}
                      ${feature.bgColor} backdrop-blur-sm
                      p-8 h-full overflow-hidden
                      transition-all duration-500
                    `}
                  >
                    {/* Badge */}
                    {feature.badge && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                          {feature.badge}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex p-3 rounded-xl ${feature.iconBg} shadow-lg mb-6`}
                    >
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {expandedFeature === feature.id ? feature.longDescription : feature.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {feature.features.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Efficiency Badge & CTA */}
                    <div className="pt-6 border-t border-gray-100/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span className="text-sm font-medium text-gray-700">
                            {feature.efficiency}
                          </span>
                        </div>
                        
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="text-indigo-500"
                        >
                          <Link
                            href="/chat"
                            className="inline-flex items-center gap-1 text-sm font-medium"
                          >
                            <span>Try Now</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    <motion.div
                      animate={{ rotate: expandedFeature === feature.id ? 180 : 0 }}
                      className="absolute bottom-4 right-4 text-gray-400"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Hover Glow */}
                  <motion.div
                    animate={{ 
                      opacity: hoveredFeature === feature.id ? 0.1 : 0,
                      scale: hoveredFeature === feature.id ? 1.05 : 1
                    }}
                    className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${feature.color} blur-xl pointer-events-none`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl p-8 md:p-12 border border-indigo-100 shadow-xl shadow-indigo-500/10 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Style?
              </h3>
              
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Start using all these amazing features today. Get personalized fashion 
                advice powered by AI that understands your unique style.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/chat"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-center font-semibold text-white shadow-2xl shadow-indigo-500/30 transition-all duration-500 hover:shadow-3xl hover:shadow-indigo-500/40 hover:scale-105 inline-flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-3">
                    <Sparkles className="h-5 w-5" />
                    <span>Start Free Trial</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </Link>
                
                <Link
                  href="/pricing"
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white/80 px-8 py-4 text-center font-semibold shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-indigo-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-3">
                    <Crown className="h-5 w-5 text-indigo-500" />
                    <span className="bg-gradient-to-r from-gray-700 to-gray-900 group-hover:from-indigo-600 group-hover:to-purple-600 bg-clip-text text-transparent transition-all duration-500">
                      View Pricing
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}