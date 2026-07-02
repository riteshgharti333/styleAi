"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle, Crown, Gem, Star, X, Shield } from "lucide-react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Perfect for trying out StyleAI and getting basic fashion advice.",
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: Sparkles,
      iconBg: "from-gray-400 to-gray-500",
      features: [
        { text: "10 AI style questions per month", included: true },
        { text: "Basic outfit recommendations", included: true },
        { text: "Body type analysis", included: true },
        { text: "Skin tone color guide", included: true },
        { text: "Email support (48hr response)", included: true },
        { text: "Virtual try-on", included: false },
        { text: "Unlimited AI chat", included: false },
        { text: "Wardrobe digitization", included: false },
        { text: "Shopping assistant", included: false },
      ],
      cta: "Get Started Free",
      buttonBg: "from-gray-900 to-gray-800",
    },
    {
      id: "pro",
      name: "Pro",
      description: "For fashion enthusiasts who want unlimited AI styling and advanced features.",
      monthlyPrice: 19,
      yearlyPrice: 15,
      icon: Crown,
      iconBg: "from-indigo-500 to-purple-500",
      badge: "Most Popular",
      features: [
        { text: "Unlimited AI style questions", included: true },
        { text: "Advanced outfit recommendations", included: true },
        { text: "Body type analysis", included: true },
        { text: "Skin tone color guide", included: true },
        { text: "Virtual try-on (50/month)", included: true },
        { text: "Unlimited AI chat 24/7", included: true },
        { text: "Wardrobe digitization (50 items)", included: true },
        { text: "Basic shopping assistant", included: true },
        { text: "Trend forecasting", included: true },
      ],
      cta: "Start Pro Trial",
      buttonBg: "from-indigo-600 to-purple-600",
      popular: true,
    },
    {
      id: "premium",
      name: "Premium",
      description: "For power users who want the ultimate AI fashion experience.",
      monthlyPrice: 39,
      yearlyPrice: 29,
      icon: Gem,
      iconBg: "from-amber-500 to-orange-500",
      badge: "Best Value",
      features: [
        { text: "Everything in Pro plan", included: true },
        { text: "Unlimited virtual try-on", included: true },
        { text: "Unlimited wardrobe digitization", included: true },
        { text: "Full shopping assistant", included: true },
        { text: "Trend forecasting + alerts", included: true },
        { text: "24/7 priority support (4hr)", included: true },
        { text: "1-on-1 stylist consultation", included: true },
        { text: "Early access to new features", included: true },
        { text: "API access", included: true },
      ],
      cta: "Start Premium Trial",
      buttonBg: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-16">
        <div className="relative mx-auto max-w-7xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-medium text-indigo-600">
              Simple & Transparent Pricing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900">
              Choose Your Perfect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Style Plan
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Start free and upgrade as your style needs grow. All plans include core AI styling features.
              No hidden fees, no contracts, cancel anytime.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`text-sm font-semibold transition-colors duration-300 ${
                billingCycle === "monthly" ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Monthly
            </button>
            
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30"
            >
              <motion.div
                animate={{ x: billingCycle === "yearly" ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="h-6 w-6 rounded-full bg-white shadow-md"
              />
            </button>
            
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`text-sm font-semibold transition-colors duration-300 ${
                billingCycle === "yearly" ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Yearly
            </button>
            
            <span className="ml-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-200">
              Save 25%
            </span>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-indigo-400" />
              <span className="font-medium">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-indigo-400" />
              <span className="font-medium">Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`px-6 py-2 rounded-full text-white text-sm font-bold shadow-2xl flex items-center gap-2 ${
                      plan.popular 
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-indigo-500/40" 
                        : "bg-gradient-to-r from-amber-500 to-orange-500 shadow-amber-500/40"
                    }`}>
                      {plan.popular && <Star className="h-4 w-4 fill-white" />}
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`
                    relative rounded-3xl border-2 p-8 md:p-10 h-full
                    transition-all duration-500 shadow-xl
                    ${plan.popular 
                      ? 'border-indigo-400 bg-gradient-to-br from-indigo-50 to-purple-50 md:-mt-4 md:mb-4 shadow-indigo-500/20' 
                      : 'border-gray-200 bg-white shadow-gray-200/50'
                    }
                  `}
                >
                  {/* Plan Header */}
                  <div className="mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.iconBg} shadow-lg mb-6`}>
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl md:text-6xl font-bold text-gray-900">
                        ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-lg text-gray-500 font-medium">
                        /month
                      </span>
                    </div>
                    {billingCycle === "yearly" && plan.yearlyPrice > 0 && (
                      <div className="mt-2">
                        <span className="text-sm text-gray-400 line-through">
                          ${plan.monthlyPrice}/month
                        </span>
                        <span className="ml-2 text-sm font-semibold text-green-600">
                          Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                        </span>
                      </div>
                    )}
                    {plan.id === "free" && (
                      <p className="text-sm text-gray-500 mt-2 font-medium">
                        Free forever, no credit card required
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mb-10">
                    <div className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                      What's included:
                    </div>
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          {feature.included ? (
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 border-t border-gray-100">
                    <Link
                      href={plan.id === "free" ? "/chat" : `/signup?plan=${plan.id}&billing=${billingCycle}`}
                      className={`group relative overflow-hidden rounded-xl px-8 py-4 text-center font-semibold text-white transition-all duration-500 block w-full text-lg bg-gradient-to-r ${plan.buttonBg} shadow-2xl hover:scale-105 ${
                        plan.popular ? 'shadow-indigo-500/30 hover:shadow-indigo-500/40' : 'shadow-gray-500/20 hover:shadow-gray-500/30'
                      }`}
                    >
                      <div className="relative flex items-center justify-center gap-3">
                        <span>{plan.cta}</span>
                        <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
                      </div>
                    </Link>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Shield className="h-4 w-4" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}