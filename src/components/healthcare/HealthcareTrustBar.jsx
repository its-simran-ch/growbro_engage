export default function HealthcareTrustBar() {
  const brands = [
    { name: "Flipkart", logo: "/flipkart.png" },
    { name: "Nykaa", logo: "/nykaa.png" },
    { name: "Swiggy", logo: "/swiggy.png" },
    { name: "PhonePe", logo: "/phonepe.png" },
    { name: "Meesho", logo: "/meesho.png" },
    { name: "BigBasket", logo: "/bigbasket.png" },
    { name: "Zomato", logo: "/zomato.png" },
    { name: "UrbanCompany", logo: "/urbancompany.png" },
    { name: "Lenskart", logo: "/lenskart.png" },
    { name: "Boat", logo: "/boat.png" },
    { name: "MamaEarth", logo: "/mamaearth.png" },
    { name: "Sugar Cosmetics", logo: "/sugar.png" },
  ];

  /* Note: Reusing the same logos for demonstration. In a real scenario, these would be hospital logos like Apollo, Fortis, Max Healthcare, etc. */
  const allBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-xl md:text-2xl text-text-dark">
          Trusted by <span className="font-bold text-teal-600">300+ hospitals and clinics</span> to manage patient care
        </p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex items-center animate-marquee-healthcare hover:[animation-play-state:paused]">
          {allBrands.map((brand, idx) => (
            <div key={idx} className="flex-shrink-0 mx-12 flex items-center justify-center">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-10 md:h-14 w-auto object-contain hover:scale-110 transition-all duration-300 cursor-default grayscale"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeHealthcare {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-healthcare {
          animation: marqueeHealthcare 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
