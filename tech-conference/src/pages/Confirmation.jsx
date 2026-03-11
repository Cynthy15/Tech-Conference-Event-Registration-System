import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className=" text-white min-h-screen flex items-center justify-center p-8 py-12">
      <div className="bg-[#13141f]/60 backdrop-blur-xl border border-white/10 rounded-2xl py-16 px-10 w-full max-w-[580px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden animate-slideFadeIn shine-effect text-center">

        <h1 className="bg-gradient-to-br from-text-primary to-text-muted bg-clip-text text-transparent mb-4 text-center text-4xl leading-tight">
          Registration Confirmed!
        </h1>

        <p className="text-text-secondary text-lg mb-10 font-light">
          Thank you for securing your spot. We've saved your details locally. See you at the Tech Innovation Conference!
        </p>

        <Link to="/my-registration" className="inline-block w-full max-w-[250px] mx-auto">
          <button className="w-full flex justify-center items-center gap-2 py-3.5 px-6 rounded-xl font-medium text-white bg-gradient-to-br from-accent-primary to-accent-secondary hover:-translate-y-0.5 active:translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(139,92,246,0.4)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.5)]">
            View My Ticket
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Confirmation;