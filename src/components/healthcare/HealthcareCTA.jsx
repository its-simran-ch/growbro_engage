import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse } from 'lucide-react';

export default function HealthcareCTA() {
  return (
    <section className="py-24 bg-white">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 rounded-[2rem] p-12 md:p-16 text-center overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
             <div className="absolute top-8 right-12 opacity-20 transform -rotate-12">
                <HeartPulse size={80} className="text-white"/>
             </div>

             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                   Provide care beyond<br />the clinic walls
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                   Join 300+ medical facilities using Growbro Engage to automate patient communication, reduce no-shows, and deliver a superior healthcare experience on WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Link to="/contact" className="bg-white text-teal-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                      Book a Demo <ArrowRight size={20} />
                   </Link>
                   <Link to="/pricing" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-xl transition-all">
                      View Pricing
                   </Link>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
