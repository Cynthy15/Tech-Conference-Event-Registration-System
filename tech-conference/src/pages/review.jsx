import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Review() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const confirmRegistration = () => {
    localStorage.setItem("registration", JSON.stringify(data));
    localStorage.removeItem("registration_draft"); // Clear draft on successful registration
    navigate("/confirmation");
  };

  if (!data) {
    return (
      <div className=" text-white min-h-screen flex items-center justify-center p-8 py-12">
        <div className="bg-[#13141f]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-10 w-full max-w-[580px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden animate-slideFadeIn shine-effect text-center">
          <h2 className="text-3xl mb-4">No Data Found</h2>
          <button onClick={() => navigate("/")} className="mt-4 flex justify-center items-center mx-auto gap-2 py-3 px-8 rounded-xl font-medium text-white bg-gradient-to-br from-accent-primary to-accent-secondary hover:-translate-y-0.5 transition-all shadow-lg">
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const reviewItemClass = "flex flex-col pb-4 border-b border-white/10 last:border-b-0";
  const labelClass = "text-xs uppercase tracking-wider text-text-muted mb-1 font-semibold";
  const valueClass = "text-[1.1rem] font-medium text-text-primary";

  return (
    <div className=" text-white min-h-screen flex items-center justify-center p-8 py-12">
      <div className="bg-[#13141f]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-10 w-full max-w-[580px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden animate-slideFadeIn shine-effect">

        <h2 className="bg-gradient-to-br from-text-primary to-text-muted bg-clip-text text-transparent mb-8 text-center text-3xl leading-tight">
          Review Registration
        </h2>

        <div className="grid gap-5 mb-8">
          <div className={reviewItemClass}>
            <span className={labelClass}>Full Name</span>
            <span className={valueClass}>{data.name}</span>
          </div>

          <div className={reviewItemClass}>
            <span className={labelClass}>Email Address</span>
            <span className={valueClass}>{data.email}</span>
          </div>

          {data.phone && (
            <div className={reviewItemClass}>
              <span className={labelClass}>Phone Number</span>
              <span className={valueClass}>{data.phone}</span>
            </div>
          )}

          {data.organization && (
            <div className={reviewItemClass}>
              <span className={labelClass}>Organization</span>
              <span className={valueClass}>{data.organization}</span>
            </div>
          )}

          <div className={reviewItemClass}>
            <span className={labelClass}>Ticket Type</span>
            <span className={`${valueClass} text-accent-primary`}>{data.ticket}</span>
          </div>

          {data.diet && (
            <div className={reviewItemClass}>
              <span className={labelClass}>Dietary Requirements</span>
              <span className={valueClass}>{data.diet}</span>
            </div>
          )}

          {data.notes && (
            <div className={reviewItemClass}>
              <span className={labelClass}>Notes</span>
              <span className={valueClass}>{data.notes}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={() => navigate("/register", { state: data })}
            className="w-full sm:w-1/3 py-3.5 px-6 rounded-xl font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-center"
          >
            Edit Details
          </button>

          <button
            onClick={confirmRegistration}
            className="w-full sm:w-2/3 flex justify-center items-center gap-2 py-3.5 px-6 rounded-xl font-medium text-white bg-gradient-to-br from-accent-primary to-accent-secondary hover:-translate-y-0.5 active:translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(139,92,246,0.4)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.5)]"
          >
            Confirm Registration
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;