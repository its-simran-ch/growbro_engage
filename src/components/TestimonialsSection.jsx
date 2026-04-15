import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Highly customisable and friendly. We work in the D2C business, so keeping in touch with our customers is very easy using WhatsApp. Growbro Engage helps us automate our entire post-purchase journey.",
      author: "Rahul Sharma",
      role: "Marketing Manager, Habuild",
      metric: "2X",
      metricLabel: "Higher Conversion Rate"
    },
    {
      quote: "Our Star Tool. Growbro Engage is essential to our EdTech platform. Its ease of use helps us stay connected, offer personalized support, and address student concerns instantly.",
      author: "Priya Desai",
      role: "Founder, Vedantu EdTech",
      metric: "40%",
      metricLabel: "Drop in Support Costs"
    }
  ];

  return (
    <section className="py-24 bg-[#FDE68A]/30 border-t border-yellow-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-6">Over 16,000+ customers</h2>
           <p className="text-lg text-text-light">
             What some of our 16,000+ customers across 180+ countries think of Growbro Engage.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
             <div key={idx} className="bg-white border-2 border-black rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
               <Quote className="absolute top-8 right-8 text-yellow-200 fill-yellow-200 opacity-50" size={60} />
               
               <div className="flex gap-1 mb-6 text-yellow-400">
                 <Star size={20} className="fill-yellow-400" />
                 <Star size={20} className="fill-yellow-400" />
                 <Star size={20} className="fill-yellow-400" />
                 <Star size={20} className="fill-yellow-400" />
                 <Star size={20} className="fill-yellow-400" />
               </div>
               
               <h3 className="text-2xl font-black text-black mb-6 leading-tight">
                 "{test.quote.split('.')[0]}."
               </h3>
               
               <p className="text-gray-800 font-medium text-lg mb-8 leading-relaxed">
                 {test.quote.split('.').slice(1).join('.')}
               </p>
               
               <div className="flex justify-between items-end border-t-2 border-black pt-8 mt-auto">
                 <div>
                   <div className="font-black text-black">{test.author}</div>
                   <div className="text-sm font-bold text-gray-600">{test.role}</div>
                 </div>
                 <div className="text-right">
                   <div className="text-3xl font-black text-primary">{test.metric}</div>
                   <div className="text-[10px] font-black text-black uppercase tracking-wider">{test.metricLabel}</div>
                 </div>
               </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
