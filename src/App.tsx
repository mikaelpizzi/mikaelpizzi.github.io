import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, WifiOff, Database, Radio, Server, Truck, CreditCard, GitBranch, Cloud } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-radial from-blue-600/8 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-lg font-semibold">Mikael Pizzi</span>
            <div className="flex items-center gap-2">
              <a href="https://linkedin.com/in/mikaelpizzi" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-400" />
              </a>
              <a href="https://github.com/mikaelpizzi" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                <Github className="w-5 h-5 text-slate-400" />
              </a>
              <a href="mailto:mikaelangelopizzi@gmail.com" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                <Mail className="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>
        </header>

        {/* Hero - The Engineer */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-center"
          >
            <p className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-6">
              Full Stack Software Engineer
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              Engineering
              <br />
              Scalable Systems
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Code is easy. System reliability is hard. I don't just build features; 
              I engineer stability. My work focuses on polyglot persistence, 
              defensive programming, and cutting through complexity to deliver value where it matters most.
            </p>
          </motion.div>
        </section>

        {/* The Masterpiece - Puente Platform */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Title */}
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-4 text-center">
                The Masterpiece
              </p>
              <h2 className="text-5xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Puente Platform
              </h2>
              <p className="text-xl md:text-2xl text-slate-500 text-center mb-16">
                A Production-Grade Microservices Ecosystem
              </p>

              {/* Full-Width Architecture Diagram */}
              <div className="mb-16 rounded-2xl border border-white/5 bg-slate-900/30 p-4 md:p-8 overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/mikaelpizzi/puente-architecture/main/public/architecture.svg"
                  alt="Puente Platform System Architecture"
                  className="w-full h-auto"
                />
              </div>

              {/* System Demo Video */}
              <div className="mb-24">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-6 text-center">
                  System Demo
                </p>
                <div className="rounded-2xl border border-white/5 bg-slate-900/30 overflow-hidden aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/EqynMRPtsZo"
                    title="Puente Platform System Demo"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* The Problem Statement */}
              <div className="max-w-4xl mx-auto text-center mb-24">
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                  A distributed logistics and fintech solution connecting <span className="text-slate-200">Sellers</span>, <span className="text-slate-200">Buyers</span>, and <span className="text-slate-200">Couriers</span> in 
                  Latin America's informal economy—where internet is unreliable, 
                  trust is earned through transparency, and every millisecond of downtime costs money.
                </p>
              </div>

              {/* Engineering Challenges - Horizontal Layout */}
              <div className="space-y-6 mb-24">
                {/* Challenge 1: Offline Routing */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                    {/* Challenge */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                          <WifiOff className="w-5 h-5 text-red-400" />
                        </div>
                        <span className="text-sm font-medium text-red-400 uppercase tracking-wider">Challenge</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2">Unreliable Networks</h3>
                      <p className="text-base md:text-lg text-slate-500">
                        LatAm couriers work in zones with spotty connectivity. Route calculations can't depend on external APIs.
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:flex items-center justify-center px-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rotate-90">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Solution</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">Self-Hosted OSRM + Haversine Fallback</h3>
                      <p className="text-base md:text-lg text-slate-400">
                        Venezuela's OSM data running locally. Automatic fallback to Haversine formula. <span className="text-emerald-400 font-medium">100% routing uptime.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge 2: Real-time Sync */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <Radio className="w-5 h-5 text-cyan-400" />
                        </div>
                        <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Challenge</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2">Real-time at Scale</h3>
                      <p className="text-base md:text-lg text-slate-500">
                        Buyers need live courier positions. Sellers need instant order updates. Thousands of concurrent connections.
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center px-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rotate-90">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Solution</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">WebSockets + Redis Pub/Sub</h3>
                      <p className="text-base md:text-lg text-slate-400">
                        Redis GEO commands for geo-spatial queries. Event-driven architecture. <span className="text-emerald-400 font-medium">Sub-second updates.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge 3: Data Complexity */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Database className="w-5 h-5 text-emerald-400" />
                        </div>
                        <span className="text-sm font-medium text-emerald-500 uppercase tracking-wider">Challenge</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2">Data Diversity</h3>
                      <p className="text-base md:text-lg text-slate-500">
                        Financial data needs ACID. Product catalogs need flexibility. Sessions need speed.
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center px-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rotate-90">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Solution</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">Polyglot Persistence</h3>
                      <p className="text-base md:text-lg text-slate-400">
                        PostgreSQL for finance, MongoDB for products, Redis for sessions. <span className="text-emerald-400 font-medium">Right tool for each job.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge 4: Service Isolation */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                          <Server className="w-5 h-5 text-violet-400" />
                        </div>
                        <span className="text-sm font-medium text-violet-400 uppercase tracking-wider">Challenge</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2">Monolith Hell</h3>
                      <p className="text-base md:text-lg text-slate-500">
                        Single codebase becomes unmaintainable. Teams can't deploy independently. One bug brings everything down.
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center px-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rotate-90">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Solution</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">6 Independent Microservices</h3>
                      <p className="text-base md:text-lg text-slate-400">
                        NestJS with strict DI and clean architecture. <span className="text-emerald-400 font-medium">Deploy any service without touching others.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge 5: Proof of Delivery */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <Truck className="w-5 h-5 text-amber-400" />
                        </div>
                        <span className="text-sm font-medium text-amber-400 uppercase tracking-wider">Challenge</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2">Delivery Disputes</h3>
                      <p className="text-base md:text-lg text-slate-500">
                        "I never received it" claims destroy trust. No paper trail in informal commerce.
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center px-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rotate-90">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Solution</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">Digital Proof of Delivery</h3>
                      <p className="text-base md:text-lg text-slate-400">
                        Signature capture + photo upload to Cloudinary. <span className="text-emerald-400 font-medium">Every delivery is verifiable.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge 6: Currency Volatility */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <CreditCard className="w-5 h-5 text-orange-400" />
                        </div>
                        <span className="text-sm font-medium text-orange-400 uppercase tracking-wider">Challenge</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2">Volatile Currency</h3>
                      <p className="text-base md:text-lg text-slate-500">
                        Venezuelan prices change hourly. Users need real USD/crypto equivalents always.
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center px-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rotate-90">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Solution</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">Real-time Crypto Rates</h3>
                      <p className="text-base md:text-lg text-slate-400">
                        Binance P2P + CoinGecko APIs with smart caching. <span className="text-emerald-400 font-medium">Always accurate, never stale.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge 7: CI/CD */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <GitBranch className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">Challenge</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2">Manual Deployments</h3>
                      <p className="text-base md:text-lg text-slate-500">
                        Pushing code manually means human error, inconsistent builds, and no audit trail.
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center px-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rotate-90">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Solution</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">GitHub Actions CI/CD</h3>
                      <p className="text-base md:text-lg text-slate-400">
                        Automated lint, test, Docker build → GHCR → Render/Fly.io. <span className="text-emerald-400 font-medium">Branch protection enforces green CI.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge 8: Zero-Cost Cloud */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                          <Cloud className="w-5 h-5 text-sky-400" />
                        </div>
                        <span className="text-sm font-medium text-sky-400 uppercase tracking-wider">Challenge</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2">Startup Budget Reality</h3>
                      <p className="text-base md:text-lg text-slate-500">
                        Free tiers expire, sleep policies kill demos, and costs explode at scale.
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center px-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rotate-90">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Solution</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">Multi-Cloud Franken-Stack</h3>
                      <p className="text-base md:text-lg text-slate-400">
                        Aiven (Postgres/Redis) + MongoDB Atlas + Render. <span className="text-emerald-400 font-medium">Permanent free tiers, zero monthly cost.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Stack - Contextual */}
              <div className="max-w-4xl mx-auto text-center mb-16">
                <p className="text-lg text-slate-500 leading-relaxed">
                  Built with <span className="text-slate-300">NestJS</span> for modular backend architecture, 
                  <span className="text-slate-300"> Docker</span> for container orchestration, 
                  <span className="text-slate-300"> React</span> as an offline-first PWA, and 
                  <span className="text-slate-300"> OpenTelemetry</span> for end-to-end observability.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <motion.a
                  href="https://puente-architecture.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors text-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Technical Case Study
                </motion.a>
                
                <motion.a
                  href="https://github.com/mikaelpizzi/puente-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-all text-lg"
                >
                  <Code2 className="w-5 h-5" />
                  Inspect the Code
                </motion.a>
              </div>

              {/* Infrastructure Note */}
              <p className="text-center text-sm text-slate-500">
                Fully containerized architecture. Showcased in a local Docker environment to demonstrate zero-dependency orchestration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Mikael Pizzi. Based in Latin America, working globally.
            </p>
            <div className="flex items-center gap-8">
              <a href="https://linkedin.com/in/mikaelpizzi" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/mikaelpizzi" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                GitHub
              </a>
              <a href="mailto:mikaelangelopizzi@gmail.com" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
