const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Outer dashed blue border container */}
      <div className="relative rounded-xl overflow-hidden bg-gray-50 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left - In Progress */}
          <div className="relative flex-1 min-h-[180px] md:min-h-[220px] bg-linear-to-br from-purple-500 via-indigo-600 to-purple-700 text-white flex items-center justify-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.12)_0%,transparent_50%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />

              <img
                src="../assets/vector1.png"
                alt=""
                className="w-full h-full object-cover opacity-40 mix-blend-screen"
              />
            </div>

            <div className="relative z-10 text-center">
              <div className="text-xl md:text-2xl font-medium tracking-wide opacity-90">
                In-Progress
              </div>
              <div className="mt-3 md:mt-5 text-6xl md:text-8xl font-black leading-none">
                {inProgressCount}
              </div>
            </div>
          </div>

          {/* Right - Resolved */}
          <div className="relative flex-1 min-h-[180px] md:min-h-[220px] bg-linear-to-br from-emerald-400 via-teal-500 to-cyan-600 text-white flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
              <img
                src="../assets/vector2.png"
                alt=""
                className="w-full h-full object-cover opacity-50 mix-blend-screen"
              />
            </div>

            <div className="relative z-10 text-center">
              <div className="text-xl md:text-2xl font-medium tracking-wide opacity-90">
                Resolved
              </div>
              <div className="mt-3 md:mt-5 text-6xl md:text-8xl font-black leading-none">
                {resolvedCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
