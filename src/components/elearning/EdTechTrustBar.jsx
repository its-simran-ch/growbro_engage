export default function EdTechTrustBar() {
  const brands = [
    { name: "Allen", logo: "/edu/allen.png" },
    { name: "Apna College", logo: "/edu/apnacollege.png" },
    { name: "Great Learning", logo: "/edu/greatlearning.png" },
    { name: "NextTopper", logo: "/edu/nexttopper.png" },
    { name: "Physics Wallah", logo: "/edu/physicswallah.png" },
    { name: "Simplilearn", logo: "/edu/simplilearn.png" },
    { name: "Unacademy", logo: "/edu/unacademy.png" },
    { name: "UpGrad", logo: "/edu/upgrad.png" },
    { name: "Vedantu", logo: "/edu/vedantu.png" },
  ];

  const allBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-xl md:text-2xl text-text-dark">
          Trusted by <span className="font-bold">2,000+ educational institutions</span> to engage students at scale
        </p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex items-center animate-marquee-elearning hover:[animation-play-state:paused]">
          {allBrands.map((brand, idx) => (
            <div key={idx} className="flex-shrink-0 mx-12 lg:mx-16 flex items-center justify-center">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-16 md:h-24 max-w-[200px] w-auto object-contain hover:scale-110 transition-all duration-300 cursor-default"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeElearning {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-elearning {
          animation: marqueeElearning 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
