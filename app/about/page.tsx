"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Heart,
  Users,
  Zap,
  ArrowRight,
  Bot,
  Shield,
  TrendingUp,
  Star,
  Clock,
  MessageSquare,
  Globe,
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Rocket,
} from "lucide-react";

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
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

  const teamMembers = [
    {
      id: 1, name: "Alexandra Chen", role: "Founder & CEO", initials: "AC",
      color: "from-indigo-400 to-blue-400", bgColor: "bg-gradient-to-br from-indigo-50/50 to-blue-50/50",
      social: { twitter: "#", linkedin: "#", github: "#" },
      bio: "Fashion tech entrepreneur with 10+ years in AI and style consulting."
    },
    {
      id: 2, name: "Marcus Johnson", role: "CTO", initials: "MJ",
      color: "from-purple-400 to-pink-400", bgColor: "bg-gradient-to-br from-purple-50/50 to-pink-50/50",
      social: { twitter: "#", linkedin: "#", github: "#" },
      bio: "AI researcher specializing in computer vision and fashion recommendation systems."
    },
    {
      id: 3, name: "Sofia Rodriguez", role: "Head of Design", initials: "SR",
      color: "from-emerald-400 to-teal-400", bgColor: "bg-gradient-to-br from-emerald-50/50 to-teal-50/50",
      social: { twitter: "#", linkedin: "#", github: "#" },
      bio: "Award-winning fashion designer bringing creative vision to AI-powered styling."
    },
    {
      id: 4, name: "David Park", role: "Lead AI Engineer", initials: "DP",
      color: "from-amber-400 to-orange-400", bgColor: "bg-gradient-to-br from-amber-50/50 to-orange-50/50",
      social: { twitter: "#", linkedin: "#", github: "#" },
      bio: "Machine learning expert focused on personalization and trend prediction."
    },
  ];

  const values = [
    { id: 1, title: "Innovation First", description: "Pushing boundaries with cutting-edge AI technology for fashion.", icon: <Rocket className="h-6 w-6 text-white" />, iconBg: "bg-gradient-to-br from-indigo-400 to-blue-400" },
    { id: 2, title: "Inclusive Design", description: "Fashion advice for every body type, style, and budget.", icon: <Heart className="h-6 w-6 text-white" />, iconBg: "bg-gradient-to-br from-rose-400 to-pink-400" },
    { id: 3, title: "Data Privacy", description: "Your style data is secure and never shared without consent.", icon: <Shield className="h-6 w-6 text-white" />, iconBg: "bg-gradient-to-br from-emerald-400 to-green-400" },
    { id: 4, title: "Continuous Learning", description: "Our AI evolves with every interaction to serve you better.", icon: <TrendingUp className="h-6 w-6 text-white" />, iconBg: "bg-gradient-to-br from-purple-400 to-violet-400" },
  ];

  const milestones = [
    { year: "2023", title: "Founded", description: "StyleAI was born with a mission to democratize fashion advice." },
    { year: "2024", title: "Beta Launch", description: "10,000 users joined our beta program with 95% satisfaction." },
    { year: "2025", title: "Global Expansion", description: "Expanded to 50+ countries with multi-language support." },
    { year: "2026", title: "1M Users", description: "Reached 1 million active users worldwide." },
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.08) 0%, rgba(255, 255, 255, 0) 50%), linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f0f4ff 50%, #eef2ff 75%, #ffffff 100%)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Our Story</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block text-gray-900">Revolutionizing Fashion</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">With AI Technology</span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                We&apos;re on a mission to make personalized fashion advice accessible to everyone. Powered by advanced AI, we help you look and feel your best, every day.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { value: "1M+", label: "Active Users", icon: Users, color: "from-indigo-500 to-blue-500" },
                { value: "50+", label: "Countries", icon: Globe, color: "from-purple-500 to-pink-500" },
                { value: "98%", label: "Satisfaction", icon: Star, color: "from-emerald-500 to-green-500" },
                { value: "24/7", label: "AI Support", icon: Clock, color: "from-amber-500 to-orange-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-indigo-300 to-transparent"></div>
        </motion.div>
      </section>

      {/* ========== MISSION SECTION ========== */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-200/10 to-purple-200/10 blur-2xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
                <Target className="h-4 w-4 text-indigo-500" />
                <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="block text-gray-900">Making Fashion</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Accessible to All</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">We believe everyone deserves to feel confident in their style. Our AI-powered platform removes the guesswork from getting dressed, providing personalized recommendations that consider your unique body type, preferences, and lifestyle.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Built by a team of fashion experts and AI engineers, StyleAI combines the art of personal styling with the precision of machine learning to deliver recommendations that get smarter over time.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/chat"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-center font-semibold text-white shadow-2xl shadow-indigo-500/30 transition-all duration-200 hover:scale-105 hover:shadow-indigo-500/40 inline-flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="relative flex items-center gap-3">Try StyleAI Now <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" /></span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-200 hover:-translate-y-2 hover:shadow-3xl">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 md:p-12 text-white">
                  <Bot className="h-12 w-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">The StyleAI Difference</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Zap, text: "Real-time personalized advice" },
                      { icon: Shield, text: "Privacy-first approach" },
                      { icon: TrendingUp, text: "Continuously improving AI" },
                      { icon: Heart, text: "Inclusive for all body types" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-3 transition-all duration-200 hover:translate-x-2"
                      >
                        <div className="p-2 rounded-lg bg-white/20"><item.icon className="h-5 w-5" /></div>
                        <span className="text-white/90">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== VALUES SECTION ========== */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-50/30 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-6"
            >
              <Heart className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Our Values</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="block text-gray-900">What We</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Stand For</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 p-8 shadow-lg transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`inline-flex p-3 rounded-xl ${value.iconBg} mb-6 transition-transform duration-500 hover:rotate-[360deg]`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-6"
            >
              <Users className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Our Team</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="block text-gray-900">Meet the</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Dream Team</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveTeamMember(member.id)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 p-8 shadow-lg overflow-hidden transition-all duration-200 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex justify-center mb-6">
                    <div className={`relative h-24 w-24 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-105`}>
                      <span className="text-3xl font-bold text-white">{member.initials}</span>
                      <div className={`absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center transition-all duration-200 ${
                        activeTeamMember === member.id ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }`}>
                        <Sparkles className="h-3 w-3 text-indigo-500" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{member.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm text-center leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    {[
                      { icon: Twitter, href: member.social.twitter },
                      { icon: Linkedin, href: member.social.linkedin },
                      { icon: Github, href: member.social.github },
                    ].map((social, idx) => (
                      <a key={idx} href={social.href}
                        className="p-2 rounded-lg bg-gray-50 text-gray-600 transition-all duration-200 hover:scale-110 hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md"
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TIMELINE SECTION ========== */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/10 to-teal-200/10 blur-2xl"
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-6"
            >
              <Clock className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Our Journey</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="block text-gray-900">The StyleAI</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Timeline</span>
            </motion.h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-200 hover:-translate-y-2 hover:shadow-xl">
                      <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg border-4 border-white transition-all duration-200 hover:scale-125" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT CTA ========== */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl p-8 md:p-12 border border-indigo-100 shadow-xl shadow-indigo-500/10 transition-all duration-200 hover:shadow-2xl">
              <div className="text-center mb-10">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 transition-transform duration-500 hover:rotate-[360deg]">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get In Touch</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">Have questions or want to collaborate? We&apos;d love to hear from you. Reach out to our team and we&apos;ll get back to you within 24 hours.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Mail, label: "Email", value: "hello@styleai.com", href: "mailto:hello@styleai.com" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                  { icon: MapPin, label: "Office", value: "San Francisco, CA", href: "#" },
                ].map((contact, idx) => (
                  <a key={idx} href={contact.href}
                    className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg text-center transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 mb-4">
                      <contact.icon className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                    <div className="text-gray-900 font-medium">{contact.value}</div>
                  </a>
                ))}
              </div>
              <div className="text-center">
                <Link href="/contact"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-center font-semibold text-white shadow-2xl shadow-indigo-500/30 transition-all duration-200 hover:scale-105 hover:shadow-indigo-500/40 inline-flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="relative flex items-center gap-3">Send Us a Message <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" /></span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}