import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState(() => {
    if (location.state) return location.state;
    const existing = localStorage.getItem("registration");
    if (existing) return JSON.parse(existing);
    const draft = localStorage.getItem("registration_draft");
    if (draft) return JSON.parse(draft);
    return {
      name: "",
      email: "",
      phone: "",
      organization: "",
      ticket: "",
      diet: "",
      notes: ""
    };
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("registration_draft", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/review", { state: formData });
  };

  const inputClass = "w-full bg-black/20 border border-white/10 text-white p-3.5 rounded-xl text-base transition-all outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary/15 focus:bg-black/40 placeholder:text-text-muted";
  const labelClass = "block text-sm text-text-secondary mb-2 font-medium";

  return (
    <div className=" text-white min-h-screen flex items-center justify-center p-8 py-12">
      <div className="bg-[#13141f]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-10 w-full max-w-[600px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden animate-slideFadeIn shine-effect">

        <h2 className="bg-gradient-to-br from-text-primary to-text-muted bg-clip-text text-transparent mb-8 text-center text-3xl leading-tight">
          Registration Details
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <div className="relative">
            <label className={labelClass}>Full Name</label>
            <input
              className={inputClass}
              name="name"
              value={formData.name}
              placeholder="e.g. Jane Doe"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <label className={labelClass}>Email Address</label>
            <input
              className={inputClass}
              name="email"
              type="email"
              value={formData.email}
              placeholder="jane@example.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <label className={labelClass}>Phone Number</label>
            <input
              className={inputClass}
              name="phone"
              value={formData.phone}
              placeholder="+250 XXX XXX XXX"
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <label className={labelClass}>Organization/Company</label>
            <input
              className={inputClass}
              name="organization"
              value={formData.organization}
              placeholder="e.g. TechCorp"
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <label className={labelClass}>Ticket Type</label>
            <select
              className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg_xmlns=\"http://www.w3.org/2000/svg\"_viewBox=\"0_0_24_24\"_fill=\"none\"_stroke=\"%2394a3b8\"_stroke-width=\"2\"_stroke-linecap=\"round\"_stroke-linejoin=\"round\"%3e%3cpolyline_points=\"6_9_12_15_18_9\"%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em]`}
              name="ticket"
              value={formData.ticket}
              onChange={handleChange}
              required
            >
              <option value="" disabled className="bg-bg-secondary text-white">Select Ticket Type</option>
              <option value="Standard" className="bg-bg-secondary text-white">Standard Pass</option>
              <option value="VIP" className="bg-bg-secondary text-white">VIP All-Access</option>
              <option value="Student" className="bg-bg-secondary text-white">Student Discount</option>
            </select>
          </div>

          <div className="relative">
            <label className={labelClass}>Dietary Requirements</label>
            <textarea
              className={`${inputClass} resize-y min-h-[100px]`}
              name="diet"
              value={formData.diet}
              placeholder="Any allergies or dietary needs?"
              onChange={handleChange}
            />
          </div>

          <div className="relative mb-2">
            <label className={labelClass}>Additional Notes</label>
            <textarea
              className={`${inputClass} resize-y min-h-[100px]`}
              name="notes"
              value={formData.notes}
              placeholder="Anything else we should know?"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              type="button"
              className="w-full sm:w-1/3 py-3.5 px-6 rounded-xl font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-center"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
            <button
              type="submit"
              className="w-full sm:w-2/3 flex justify-center items-center gap-2 py-3.5 px-6 rounded-xl font-medium text-white bg-gradient-to-br from-accent-primary to-accent-secondary hover:-translate-y-0.5 active:translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(139,92,246,0.4)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.5)]"
            >
              Review Registration
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;