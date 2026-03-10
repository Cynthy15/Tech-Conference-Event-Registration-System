import React from "react";
import { useNavigate } from "react-router-dom";

function MyRegistration() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("registration"));

  if (!data) {
    return (
      <div className=" text-white min-h-screen flex items-center justify-center p-8 py-12">
        <div className="bg-[#13141f]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-10 w-full max-w-[580px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden animate-slideFadeIn shine-effect text-center">
          <h2 className="bg-gradient-to-br from-text-primary to-text-muted bg-clip-text text-transparent mb-4 text-3xl">
            No Registration Found
          </h2>
          <p className="text-text-secondary text-lg mb-8 font-light">
            You haven't registered for the conference yet.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex justify-center items-center mx-auto gap-2 py-3.5 px-8 rounded-xl font-medium text-white bg-gradient-to-br from-accent-primary to-accent-secondary hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(139,92,246,0.4)]"
          >
            Register Now
          </button>
        </div>
      </div>
    );
  }

  const cancelRegistration = () => {
    if (window.confirm("Are you sure you want to cancel your registration?")) {
      localStorage.removeItem("registration");
      navigate("/");
    }
  };

  const reviewItemClass = "flex flex-col pb-4 border-b border-white/5 last:border-b-0";
  const labelClass = "text-xs uppercase tracking-wider text-text-muted mb-1 font-semibold";
  const valueClass = "text-[1.1rem] font-medium text-white";

  return (
    <div className="min-h-screen flex items-center justify-center p-8 py-12">
      <div className="bg-[#13141f]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-10 w-full max-w-[580px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden animate-slideFadeIn shine-effect">

        <div className="text-center mb-8">
          <div className="inline-flex py-1.5 px-4 bg-accent-primary/10 text-accent-primary font-bold tracking-widest text-sm rounded-full mb-4 border border-accent-primary/20">
            TICKET: {data.ticket.toUpperCase()}
          </div>
          <h2 className="bg-gradient-to-br from-text-primary to-text-muted bg-clip-text text-transparent text-3xl leading-tight">
            Your Registration
          </h2>
        </div>

        <div className="grid gap-5 bg-black/20 p-6 rounded-xl border border-white/5 mb-10 shadow-inner">
          <div className={reviewItemClass}>
            <span className={labelClass}>Attendee Name</span>
            <span className={valueClass}>{data.name}</span>
          </div>

          <div className={reviewItemClass}>
            <span className={labelClass}>Email Address</span>
            <span className={valueClass}>{data.email}</span>
          </div>

          {(data.diet || data.notes) && (
            <div className={reviewItemClass}>
              <span className={labelClass}>Special Requests</span>
              <span className="text-[0.95rem] text-text-secondary mt-1">
                {data.diet && <div className="mb-1"><strong className="text-white/70">Diet:</strong> {data.diet}</div>}
                {data.notes && <div><strong className="text-white/70">Notes:</strong> {data.notes}</div>}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/register")}
            className="w-full sm:w-1/2 py-3.5 px-6 rounded-xl font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-center"
          >
            Edit Registration
          </button>
          <button
            onClick={cancelRegistration}
            className="w-full sm:w-1/2 py-3.5 px-6 rounded-xl font-medium text-red-500 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all text-center"
          >
            Cancel Registration
          </button>
        </div>

      </div>
    </div>
  );
}

export default MyRegistration;