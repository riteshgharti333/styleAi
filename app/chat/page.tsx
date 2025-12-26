"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Sparkles,
  User,
  X,
  Menu,
  Send,
  ChevronRight,
  Heart,
  Bookmark,
  Share2,
  Zap,
  Target,
  Palette,
  Scissors,
  Moon,
  Briefcase,
  TrendingUp,
  ChevronLeft,
  Check,
  Shield,
} from "lucide-react";

// Style modes for sidebar
const styleModes = [
  { id: "casual", name: "Casual", icon: <User className="h-5 w-5" />, color: "from-blue-400 to-cyan-400" },
  { id: "streetwear", name: "Streetwear", icon: <Moon className="h-5 w-5" />, color: "from-gray-800 to-gray-900" },
  { id: "minimal", name: "Minimal", icon: <Scissors className="h-5 w-5" />, color: "from-stone-600 to-stone-700" },
  { id: "smart", name: "Smart Casual", icon: <Briefcase className="h-5 w-5" />, color: "from-indigo-500 to-purple-500" },
  { id: "aesthetic", name: "Aesthetic", icon: <TrendingUp className="h-5 w-5" />, color: "from-pink-500 to-rose-500" },
  { id: "party", name: "Party", icon: <Sparkles className="h-5 w-5" />, color: "from-violet-500 to-purple-600" },
];

// Suggested prompts for empty state
const suggestedPrompts = [
  "What should I wear for a job interview?",
  "Help me style these jeans for a casual day out",
  "Recommend outfits for a beach vacation",
  "What colors suit my skin tone?",
  "How to dress taller with my height?",
  "Suggest office outfits for summer",
];

// Dummy chat messages
const initialMessages = [
  {
    id: 1,
    role: "user",
    content: "What should I wear for a first date at a nice restaurant?",
    timestamp: "2:30 PM",
  },
  {
    id: 2,
    role: "ai",
    content: "For a first date at a nice restaurant, I'd recommend something that balances style with comfort. Here are my suggestions:",
    timestamp: "2:31 PM",
    suggestions: [
      "Classic navy blazer with tailored trousers",
      "Silk blouse with a-line midi skirt",
      "Dark denim with a structured blazer",
    ],
    details: "Choose fabrics that feel luxurious but not overly formal. Avoid anything too revealing or uncomfortable."
  },
];

export default function AIChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState("");
  const [activeStyle, setActiveStyle] = useState("casual");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showPersonalize, setShowPersonalize] = useState(false);
  const [userProfile, setUserProfile] = useState({
    height: "",
    bodyType: "",
    skinTone: "",
    stylePreferences: [],
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      role: "user",
      content: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Simulate AI response after 1 second
    setMessages([...messages, newUserMessage]);
    setInputText("");

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: "ai",
        content: "Thanks for sharing! Based on your request, here's my personalized advice...",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          "Consider the occasion and venue",
          "Think about comfort and confidence",
          "Choose colors that make you feel great",
        ],
        details: "Remember, the most important thing is to feel confident and comfortable in what you're wearing."
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputText(prompt);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleSaveAdvice = (messageId: number) => {
    // In a real app, this would save to user's profile
    console.log("Saving advice:", messageId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mb-20">
      {/* Main Layout */}
      <div className="flex h-screen">
        {/* Left Sidebar - Lightweight & Collapsible */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex flex-col border-r border-gray-200 bg-white/80 backdrop-blur-sm"
            >
              {/* Sidebar Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">StyleAI</div>
                      <div className="text-xs text-gray-500">Fashion Assistant</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Style Modes
                  </div>
                  {styleModes.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setActiveStyle(mode.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        activeStyle === mode.id
                          ? "bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${activeStyle === mode.id ? 'bg-gradient-to-r ' + mode.color : 'bg-gray-100'}`}>
                        <div className={`${activeStyle === mode.id ? 'text-white' : 'text-gray-600'}`}>
                          {mode.icon}
                        </div>
                      </div>
                      <span className={`font-medium ${activeStyle === mode.id ? 'text-indigo-700' : 'text-gray-700'}`}>
                        {mode.name}
                      </span>
                      {activeStyle === mode.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto"
                        >
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personalize Button - Only action in sidebar */}
              <div className="p-6 mt-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPersonalize(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all"
                >
                  <Target className="h-4 w-4" />
                  Personalize Results
                  <ChevronRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
                >
                  <Menu className="h-5 w-5 text-gray-700" />
                </button>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">AI Fashion Stylist</h1>
                  <div className="text-sm text-gray-500">Ready to help with your style questions</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-600">Online</span>
              </div>
            </div>
          </header>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {messages.length === 0 ? (
              // Empty State with Suggested Prompts
              <div className="max-w-3xl mx-auto pt-12 md:pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 mb-6">
                    <Sparkles className="h-8 w-8 text-indigo-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    How can I help with your style today?
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Ask me anything about fashion, styling, or outfit recommendations. 
                    I'm here to provide personalized advice.
                  </p>
                </motion.div>

                {/* Suggested Prompt Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {suggestedPrompts.map((prompt, index) => (
                    <motion.button
                      key={prompt}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      onClick={() => handleQuickPrompt(prompt)}
                      className="text-left p-6 rounded-2xl bg-white border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Zap className="h-5 w-5 text-indigo-500" />
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-gray-900 font-medium">{prompt}</p>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              // Chat Messages
              <div className="max-w-3xl mx-auto space-y-8">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${message.role === "user" ? "ml-auto" : ""}`}
                  >
                    {/* User Message */}
                    {message.role === "user" && (
                      <div className="flex justify-end">
                        <div className="max-w-[80%]">
                          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl rounded-br-none px-6 py-4">
                            <p className="text-white">{message.content}</p>
                          </div>
                          <div className="text-xs text-gray-500 mt-2 text-right">
                            {message.timestamp}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* AI Response - Editorial Style Content Blocks */}
                    {message.role === "ai" && (
                      <div className="space-y-6">
                        {/* Main Response Block */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                          <div className="p-6 md:p-8">
                            <div className="flex items-start gap-4 mb-6">
                              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold text-gray-900">StyleAI Assistant</span>
                                  <div className="h-2 w-2 rounded-full bg-green-500" />
                                </div>
                                <div className="text-sm text-gray-500">{message.timestamp}</div>
                              </div>
                            </div>
                            
                            <div className="prose prose-lg max-w-none">
                              <p className="text-gray-700 leading-relaxed mb-6">
                                {message.content}
                              </p>
                              
                              {message.suggestions && (
                                <div className="mb-6">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Target className="h-5 w-5 text-indigo-500" />
                                    <h3 className="text-lg font-semibold text-gray-900">My Suggestions</h3>
                                  </div>
                                  <ul className="space-y-3">
                                    {message.suggestions.map((suggestion, idx) => (
                                      <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-3"
                                      >
                                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                                          <Check className="h-3 w-3 text-indigo-600" />
                                        </div>
                                        <span className="text-gray-700">{suggestion}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {message.details && (
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Palette className="h-5 w-5 text-indigo-500" />
                                    <h4 className="font-semibold text-gray-900">Style Insight</h4>
                                  </div>
                                  <p className="text-gray-700">{message.details}</p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="px-6 md:px-8 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handleSaveAdvice(message.id)}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                              >
                                <Bookmark className="h-4 w-4" />
                                Save
                              </button>
                              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                                <Heart className="h-4 w-4" />
                                Like
                              </button>
                              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                                <Share2 className="h-4 w-4" />
                                Share
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Follow-up Suggestions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["Tell me more about color matching", "Show me outfit examples", "Help me shop for these items"].map((followUp, idx) => (
                            <motion.button
                              key={followUp}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 + 0.5 }}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => handleQuickPrompt(followUp)}
                              className="p-4 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-sm transition-all text-left"
                            >
                              <div className="text-sm font-medium text-gray-900">{followUp}</div>
                              <ChevronRight className="h-4 w-4 text-gray-400 mt-2" />
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Bar - Persistent Bottom */}
          <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm p-4 md:p-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about fashion, styling, or outfit advice..."
                      className="w-full px-6 py-4 pr-12 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all text-gray-900 placeholder-gray-500"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleSendMessage}
                      disabled={!inputText.trim()}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl flex items-center justify-center ${
                        inputText.trim()
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                          : "bg-gray-100 text-gray-400"
                      } transition-all`}
                    >
                      <Send className="h-5 w-5" />
                    </motion.button>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 px-2">
                    Press Enter to send • Shift + Enter for new line
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Personalization Drawer - Only appears after value is delivered */}
      <AnimatePresence>
        {showPersonalize && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPersonalize(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white shadow-2xl z-50"
            >
              <div className="h-full flex flex-col">
                {/* Drawer Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Personalize Your Style</h2>
                      <p className="text-gray-600">Get better recommendations by sharing your preferences</p>
                    </div>
                    <button
                      onClick={() => setShowPersonalize(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>

                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium text-indigo-600">Step 1 of 2</div>
                    <div className="text-sm text-gray-500">Registration → Profile</div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "50%" }}
                      animate={{ width: "50%" }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  </div>
                </div>

                {/* Drawer Content - Registration First */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="max-w-md mx-auto">
                    <div className="text-center mb-8">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 mb-6">
                        <User className="h-8 w-8 text-indigo-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Create Your Account</h3>
                      <p className="text-gray-600">
                        Save your style preferences and access personalized recommendations anytime.
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                      />
                      <input
                        type="password"
                        placeholder="Create password"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 mb-4"
                    >
                      Continue to Profile Setup
                    </motion.button>

                    <div className="text-center text-sm text-gray-500">
                      Already have an account?{" "}
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span>Your data is secure and never shared with third parties</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}