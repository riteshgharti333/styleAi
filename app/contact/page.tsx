"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  User,
  Building2,
  Headphones,
  Globe,
  Shield,
  Star,
  Heart,
  CheckCircle,
  HelpCircle,
  FileText,
  AlertCircle,
  ChevronDown,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Youtube,
  Facebook,
  Bot,
  Users,
  Award,
  Rocket,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", category: "general", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      id: "email",
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours.",
      icon: <Mail className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-indigo-400 to-blue-400",
      color: "from-indigo-400 to-blue-400",
      bgColor: "bg-gradient-to-br from-indigo-50/50 to-blue-50/50",
      borderColor: "border-indigo-100",
      value: "hello@styleai.com",
      href: "mailto:hello@styleai.com",
      cta: "Send Email",
    },
    {
      id: "chat",
      title: "Live Chat",
      description: "Chat with our AI assistant or a human agent in real-time.",
      icon: <MessageSquare className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-purple-400 to-pink-400",
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-50/50 to-pink-50/50",
      borderColor: "border-purple-100",
      value: "Available 24/7",
      href: "/chat",
      cta: "Start Chat",
    },
    {
      id: "phone",
      title: "Call Us",
      description: "Speak directly with our support team during business hours.",
      icon: <Phone className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-emerald-400 to-green-400",
      color: "from-emerald-400 to-green-400",
      bgColor: "bg-gradient-to-br from-emerald-50/50 to-green-50/50",
      borderColor: "border-emerald-100",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      cta: "Call Now",
    },
    {
      id: "office",
      title: "Visit Us",
      description: "Come meet our team at our headquarters in San Francisco.",
      icon: <MapPin className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-400",
      color: "from-amber-400 to-orange-400",
      bgColor: "bg-gradient-to-br from-amber-50/50 to-orange-50/50",
      borderColor: "border-amber-100",
      value: "San Francisco, CA 94105",
      href: "https://maps.google.com",
      cta: "Get Directions",
    },
  ];

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "We typically respond to all inquiries within 24 hours. For urgent matters, our live chat is available 24/7 with instant AI responses and human agents available during business hours (9 AM - 6 PM PST).",
    },
    {
      question: "Can I get technical support?",
      answer: "Absolutely! Our technical support team is available via email, chat, and phone. Premium plan users get priority 24/7 support with a 4-hour response time guarantee. We also have extensive documentation and tutorials available.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes! We offer custom enterprise plans with dedicated account managers, custom integrations, white-label options, and SLAs. Contact our sales team through the enterprise contact form for a personalized consultation.",
    },
    {
      question: "How do I report a bug or suggest a feature?",
      answer: "We love feedback! You can report bugs through our contact form (select 'Bug Report' category) or directly through the app's feedback button. Feature suggestions are reviewed by our product team and influential suggestions are rewarded.",
    },
    {
      question: "Is my information secure when I contact you?",
      answer: "Yes, absolutely. All communications through our contact form are encrypted with 256-bit SSL encryption. We never share your contact information with third parties. See our privacy policy for more details.",
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-900" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
  ];

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
          <motion.div
            animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-amber-200/10 to-orange-200/10 blur-3xl"
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
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
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
                Let's Start a
              </span>
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Conversation
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
              Have questions, feedback, or need help? We'd love to hear from you. 
              Our team is here to help you look and feel your best.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-500"
          >
            {[
              { icon: Clock, text: "Response within 24 hours" },
              { icon: Headphones, text: "24/7 AI Support Available" },
              { icon: Shield, text: "Your data is secure" },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="h-4 w-4 text-indigo-400" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
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

      {/* Contact Methods Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-200/10 to-purple-200/10 blur-2xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative"
              >
                <motion.div
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)"
                  }}
                  className={`
                    relative rounded-2xl border-2 ${method.borderColor}
                    ${method.bgColor} backdrop-blur-sm
                    p-6 md:p-8 h-full overflow-hidden
                    transition-all duration-500 text-center
                  `}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl ${method.iconBg} shadow-lg mb-6`}
                  >
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {method.description}
                  </p>

                  <div className="text-sm font-semibold text-gray-900 mb-6">
                    {method.value}
                  </div>

                  <Link
                    href={method.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors group"
                  >
                    <span>{method.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  {/* Hover Glow */}
                  <motion.div
                    animate={{ 
                      opacity: hoveredCard === method.id ? 0.1 : 0,
                      scale: hoveredCard === method.id ? 1.05 : 1
                    }}
                    className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${method.color} blur-xl pointer-events-none -z-10`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/5 to-teal-200/5 blur-2xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 mb-6"
                      >
                        <CheckCircle className="h-12 w-12 text-green-500" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Name & Email Row */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="name"
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="block w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="block w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Category & Subject Row */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                            Category *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <HelpCircle className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                              id="category"
                              required
                              value={formState.category}
                              onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                              className="block w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                            >
                              <option value="general">General Inquiry</option>
                              <option value="support">Technical Support</option>
                              <option value="billing">Billing Question</option>
                              <option value="enterprise">Enterprise Sales</option>
                              <option value="feedback">Feedback & Suggestions</option>
                              <option value="bug">Bug Report</option>
                              <option value="partnership">Partnership</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                            Subject *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <FileText className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="subject"
                              required
                              value={formState.subject}
                              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                              className="block w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                              placeholder="How can we help?"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                          Message *
                        </label>
                        <div className="relative">
                          <div className="absolute top-4 left-4">
                            <MessageSquare className="h-5 w-5 text-gray-400" />
                          </div>
                          <textarea
                            id="message"
                            required
                            rows={6}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="block w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                            placeholder="Tell us more about your inquiry..."
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="flex items-center gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-center font-semibold text-white shadow-2xl shadow-indigo-500/30 transition-all duration-500 hover:shadow-3xl hover:shadow-indigo-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 inline-flex items-center gap-3"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                          <div className="relative flex items-center gap-3">
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5" />
                                <span>Send Message</span>
                                <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
                              </>
                            )}
                          </div>
                        </button>

                        <span className="text-sm text-gray-400">
                          We'll respond within 24 hours
                        </span>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact Info Sidebar - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Quick Info Card */}
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl shadow-indigo-500/30 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)`
                  }} />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full border border-white/20"
                />

                <div className="relative">
                  <Bot className="h-10 w-10 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="text-indigo-100 leading-relaxed mb-6">
                    Our AI assistant is available 24/7 to answer your questions instantly. 
                    For complex issues, we'll connect you with a human agent.
                  </p>
                  <Link
                    href="/chat"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Start Live Chat</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>

            

              {/* Social Links Card */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100">
                    <Globe className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Follow Us</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-gray-50 text-gray-600 ${social.color} transition-all duration-300 hover:shadow-lg border border-gray-100`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-200/10 to-pink-200/10 blur-2xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-6"
            >
              <HelpCircle className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Common Questions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="block text-gray-900">Frequently Asked</span>
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map/CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl shadow-gray-900/30 overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`
                }} />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-32 h-32 rounded-full border border-white/10"
              />

              <div className="relative">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-8">
                  <Rocket className="h-8 w-8" />
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Still Have Questions?
                </h3>
                
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Our team is ready to help you with any questions about StyleAI. 
                  Whether you need technical support, have billing questions, or want to explore enterprise options.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/chat"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-center font-semibold text-white shadow-2xl shadow-indigo-500/30 transition-all duration-500 hover:shadow-3xl hover:shadow-indigo-500/40 hover:scale-105 inline-flex items-center gap-3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center gap-3">
                      <Bot className="h-5 w-5" />
                      <span>Chat with AI Assistant</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </Link>
                  
                  <Link
                    href="/pricing"
                    className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-center font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:border-white/30 hover:bg-white/10"
                  >
                    <div className="relative flex items-center gap-3">
                      <Star className="h-5 w-5" />
                      <span>View Plans</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}