import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);
  const { scrollY } = useScroll();
  const containerRef = useRef(null);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowNav(latest < window.innerHeight * 0.3);
    });
  }, [scrollY]);

  // Team members
  const teamMembers = [
    { name: "VISHV BODA", role: "Full Stack Developer", image: "/vishv.png", link: "https://www.linkedin.com/in/vishvboda" },

    { name: "DEEP PATEL", role: "Frontend Developer", image: "/deep.png", link: "https://www.linkedin.com/in/deeppateldw1611" },

    { name: "SUBRAT JAIN", role: "Backend Developer", image: "/subrat.png", link: "https://www.linkedin.com/in/subrat-jain-70078b267" },

    { name: "NIRAV SHAH", role: "UI/UX Designer", image: "/nirav.png", link: "https://www.linkedin.com/in/nirav-shah-b622a2291" }
  ];

  // Define the features with video placeholders
  const features = [
    {
      id: 1,
      title: "Real-Time Collaborative Writing",
      description: "Multiple writers can edit simultaneously with live cursor tracking and color-coded contributions, enabling seamless team collaboration.",
      videoUrl: "/a.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Reader Engagement & Voting",
      description: "Interactive voting system where readers influence story direction, creating dynamic and engaging narrative experiences.",
      videoUrl: "/a.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Role-Based Access Control",
      description: "Granular permission system with defined roles for Authors, Editors, Reviewers, and Readers ensuring organized collaboration.",
      videoUrl: "/a.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "AI-Powered Story Templates",
      description: "Intelligent templates and writing assistance powered by advanced AI to help structure and enhance your narratives.",
      videoUrl: "/a.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Export & Publishing Options",
      description: "Professional export capabilities to PDF, eBook formats, and integration with major publishing platforms.",
      videoUrl: "/a.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-black" />
      
      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 69, 189, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 69, 189, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top gradient orb */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Bottom gradient orb */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Professional Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-purple-500/20"
        animate={{
          y: showNav ? 0 : -100,
          opacity: showNav ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-[90%] a mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-white">StoryMosaic</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.button 
                className="text-gray-300 hover:text-white font-medium transition-colors"
                whileHover={{ y: -1 }}
              >
                Features
              </motion.button>
              <motion.button 
                className="text-gray-300 hover:text-white font-medium transition-colors"
                whileHover={{ y: -1 }}
              >
                Pricing
              </motion.button>
              <motion.button 
                className="text-gray-300 hover:text-white font-medium transition-colors"
                whileHover={{ y: -1 }}
              >
                About
              </motion.button>
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-purple-600/25"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(139, 69, 189, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/login')}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-12 pb-12 sm:pt-20 sm:pb-20 px-4 sm:px-6 lg:px-8  flex items-center">
          <div className="max-w-[90%] a mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h1 
                    className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="text-white">
                      Where Stories
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                      Come Alive Together
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    className="my-8 text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    The collaborative storytelling platform that brings writers and readers together. 
                    Create interactive narratives with real-time collaboration and AI assistance.
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <motion.button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl shadow-purple-600/25"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(139, 69, 189, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('/login')}
                    >
                      Start Creating
                    </motion.button>
                    <motion.button 
                      className="border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Watch Demo
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Video */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-purple-500/20 shadow-2xl">
                  <video 
                    className="w-full aspect-video object-cover"
                    autoPlay 
                    loop 
                    muted
                    playsInline
                  >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Play Icon Overlay */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div> */}
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Winner Badge Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-lg">
          <div className="max-w-[90%] a mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-8">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>Winner - SocioHack Hackathon 2025</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Recognized Excellence at
              </h2>
              <div className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-6">
                IIT Gandhinagar
              </div>
            </motion.div>

            {/* Images Section */}
            <div className="flex h-auto gap-8 py-8">
              <div className="w-[70%]">
                <img src="/stage-award.jpg" alt="Stage Award" className="w-full h-auto rounded-xl" />
              </div>
              <div className="w-[30%]">
                <img 
                  src="/awards.jpg" 
                  alt="Awards" 
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>


            {/* Team Members */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Meet Our Team</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-purple-500/20"
                  >
                    <div className="w-full flex items-center justify-center">
                      <img className='w-16 h-16 rounded-xl mb-2' 
                      src={`${member.image}`} 
                      alt={`Image of ${member.name}`} />
                    </div>
                    <a
                    href={`${member.link}`}
                    target='_blank' 
                    className="hover:underline font-bold text-white text-lg mb-1">{member.name}</a>
                    <p className="text-gray-300">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section with List Navigation */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" ref={containerRef}>
          <div className="max-w-[90%] a mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Powerful Features for
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Modern Storytelling
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Professional tools designed for collaborative writing and reader engagement
              </p>
            </motion.div>

            {/* Feature Display */}
            <div className="grid grid-cols-[40%_60%] gap-8">
              {/* Feature List */}
              <div className="lg:col-span-1 space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      currentFeature === index
                        ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40'
                        : 'bg-slate-800/30 border border-slate-700/30 hover:bg-slate-700/40'
                    }`}
                    onClick={() => setCurrentFeature(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        currentFeature === index
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-slate-700 text-gray-300'
                      }`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold transition-all duration-300 ${
                          currentFeature === index ? 'text-white' : 'text-gray-300'
                        }`}>
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Expandable Description */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: currentFeature === index ? 'auto' : 0,
                        opacity: currentFeature === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-purple-500/20">
                        <p className="text-gray-300 text-md leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Feature Video */}
              <div className="lg:col-span-1">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-purple-500/20 shadow-2xl">
                    <video 
                      key={currentFeature} // Force re-render when feature changes
                      className="w-full aspect-video object-cover"
                      autoPlay 
                      loop 
                      muted
                      playsInline
                    >
                      <source src={features[currentFeature].videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Overlay with Feature Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white">
                          {features[currentFeature].icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {features[currentFeature].title}
                        </h3>
                      </div>
                      <p className="text-gray-200 text-sm">
                        {features[currentFeature].description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl -z-10" />
                </motion.div>

                {/* Feature Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentFeature 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
                Ready to Transform
                <span className="block">Your Storytelling?</span>
              </h2>
              <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto">
                Join the future of collaborative writing and start creating engaging stories today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/login')}
                >
                  Start Creating
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
