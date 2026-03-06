import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 text-white shadow-2xl">
      {/* Optional subtle wave/pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C150,90 350,30 500,80 C650,130 850,20 1000,60 C1150,100 1200,80 1200,80 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative px-6 py-10 md:py-14 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left - Title / Welcome */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Customer Support Zone
          </h1>
          <p className="mt-3 text-indigo-100 text-lg md:text-xl opacity-90">
            Manage and resolve customer tickets efficiently
          </p>
        </div>

        {/* Right - Stats Cards */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-md md:max-w-none">
          {/* In-Progress */}
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl md:text-5xl font-extrabold mb-2">
              {inProgressCount}
            </div>
            <div className="text-indigo-100 font-medium uppercase tracking-wide text-sm md:text-base">
              In-Progress
            </div>
          </div>

          {/* Resolved */}
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl md:text-5xl font-extrabold mb-2">
              {resolvedCount}
            </div>
            <div className="text-indigo-100 font-medium uppercase tracking-wide text-sm md:text-base">
              Resolved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
