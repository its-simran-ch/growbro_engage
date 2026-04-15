import { Link } from 'react-router-dom';
import { ArrowRight, Megaphone } from 'lucide-react';

export default function MarketingCTA() {
  return (
    <section className="py-24 bg-white">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-900 rounded-[2rem] p-12 md:p-16 text-center overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
             <div className="absolute top-8 right-12 opacity-20 transform rotate-12">
                <Megaphone size={80} className="text-white"/>
             </div>

             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                   Ready to become a<br />Growbro Agency Partner?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                   Join leading marketing agencies who are driving unprecedented ROI for their clients by adding Conversational Commerce to their service portfolios.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Link to="/contact" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                      Apply to Partner Program <ArrowRight size={20} />
                   </Link>
                   <Link to="/pricing" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-xl transition-all">
                      View Agency Pricing
                   </Link>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
