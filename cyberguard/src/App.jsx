import React, { useState } from 'react';
import { Shield, Book, Brain, Users, ChevronRight, Mail, Phone, MapPin, Sun, Moon, Lock, ShieldCheck, Trophy } from 'lucide-react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const features = [
    {
      title: "Educational Content",
      description: "Access modules covering topics like phishing, malware, and safe browsing.",
      icon: <Book className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "Interactive Learning",
      description: "Engage with exercises and quizzes for real-time feedback.",
      icon: <Brain className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "AI Mentorship",
      description: "Get personalized guidance to tackle cybersecurity challenges.",
      icon: <Shield className="w-6 h-6 text-cyan-500" />
    }
  ];

  const stats = [
    { icon: <ShieldCheck className="w-8 h-8" />, value: "99.9%", label: "Security Rate" },
    { icon: <Users className="w-8 h-8" />, value: "50K+", label: "Active Users" },
    { icon: <Trophy className="w-8 h-8" />, value: "200+", label: "Awards" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`relative overflow-hidden ${
        isDarkMode ? 'bg-[#1a1f36]' : 'bg-blue-600'
      }`}>
        <nav className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">CyberGuard</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-emerald-300 transition">Features</a>
              <a href="#benefits" className="text-white hover:text-emerald-300 transition">Benefits</a>
              <a href="#testimonials" className="text-white hover:text-emerald-300 transition">Testimonials</a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? 
                  <Sun className="w-5 h-5 text-yellow-400" /> : 
                  <Moon className="w-5 h-5 text-white" />
                }
              </button>
              <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-full text-sm font-semibold transition text-white">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 text-white mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empower Your Digital Security Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Learn cybersecurity best practices with engaging content for all skill levels.
            </p>
            <div className="flex space-x-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full text-lg font-semibold transition flex items-center">
                Start Learning <ChevronRight className="ml-2" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              <div className={`absolute inset-0 rounded-full ${
                isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
              } opacity-20 blur-3xl`}></div>
              <img 
                src="/api/placeholder/346/346"
                alt="Cybersecurity Illustration" 
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`flex items-center space-x-4 p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-10'
              }`}>
                <div className="text-emerald-400">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-50"></div>
      </header>

      {/* Features Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#1a1f36]' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl transition-all ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-blue-50 hover:bg-blue-100'
              }`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-blue-100'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className={`p-8 rounded-xl ${
                isDarkMode 
                  ? 'bg-[#1a1f36] hover:bg-gray-800' 
                  : 'bg-white hover:bg-gray-50'
              } transition-all shadow-lg`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Sarah Chen</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      CTO, TechWave Solutions
                    </p>
                  </div>
                </div>
                <p className={`italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "This platform transformed our organization's approach to cybersecurity awareness. 
                  The interactive modules made learning engaging and effective."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#1a1f36]' : 'bg-blue-600'}`}>
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of individuals and organizations who have transformed their 
            cybersecurity awareness with our platform.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full text-lg font-semibold transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-gray-300`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-bold text-white">CyberGuard</span>
              </div>
              <p className="text-sm">
                Empowering individuals and organizations with essential cybersecurity knowledge.
              </p>
            </div>
            {/* Footer columns remain the same */}
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 CyberGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;