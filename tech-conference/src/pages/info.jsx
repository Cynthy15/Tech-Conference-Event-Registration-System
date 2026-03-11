import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function EventInfo() {
  const navigate = useNavigate();

  useEffect(() => {
    const existing = localStorage.getItem("registration");
    if (existing) {
      navigate("/my-registration");
    }
  }, [navigate]);

  return (
    <div className="text-white min-h-screen pt-32 pb-16 px-6 flex flex-col justify-center items-center overflow-hidden">

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 animate-slideFadeIn relative z-10">

        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2.5 py-2 px-4 bg-accent-primary/10 text-accent-primary rounded-full mb-8 border border-accent-primary/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse shadow-[0_0_8px_var(--color-accent-primary)]"></span>
            <span className="text-sm font-semibold tracking-wide uppercase">TechEvent 2026</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] mb-6 tracking-tight text-white drop-shadow-lg">
            Shape the Future of <br className="hidden sm:block" />
            <span className="inline-block mt-2 bg-gradient-to-r from-accent-primary via-purple-400 to-accent-secondary bg-clip-text text-transparent bg-[length:200%_auto]">
              Technology.
            </span>
          </h1>

          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl font-light leading-relaxed">
            Join thousands of developers, designers, and visionaries to explore the innovations defining tomorrow. Connect, learn, and build over 3 days of immersive experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link to="/register" className="w-full sm:w-auto">
              <button className="w-full bg-purple-500 sm:w-auto relative group overflow-hidden flex justify-center items-center gap-3 py-4 px-10 rounded-2xl font-medium text-white shadow-[0_4px_25px_rgba(139,92,246,0.4)] transition-all hover:shadow-[0_8px_35px_rgba(139,92,246,0.6)] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-300 group-hover:scale-[1.05]"></div>
                <span className="relative flex items-center gap-2 text-lg font-semibold">
                  Secure Your Spot
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </span>
              </button>
            </Link>

            <div className="flex items-center gap-3 text-text-secondary text-sm font-medium">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <span>March 10, Kigali</span>
            </div>
          </div>
        </div>

        
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000">
          
          <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden shine-effect">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-heading font-bold text-white">Conference Tracks</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
            </div>

            <div className="grid gap-4">
              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all cursor-pointer hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30 group-hover:bg-purple-500/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Artificial Intelligence</h4>
                  <p className="text-text-muted text-sm leading-relaxed">Explore ML models, generative AI, and the ethical implications of the new intelligence era.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all cursor-pointer hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Modern Web</h4>
                  <p className="text-text-muted text-sm leading-relaxed">The latest in frameworks, Edge computing, WebAssembly, and building exceptional UX.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all cursor-pointer hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:bg-emerald-500/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Cybersecurity</h4>
                  <p className="text-text-muted text-sm leading-relaxed">Zero-trust architecture, cryptography, and securing the next generation of applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EventInfo;