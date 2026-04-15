import { Link } from 'react-router-dom';
import { Megaphone } from 'lucide-react';

export default function MarketingHero() {
  return (
    <section className="pt-20 pb-20 overflow-hidden bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             {/* Left Text */}
             <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full font-medium text-sm mb-8">
                   <Megaphone size={16} />
                   Growbro Engage for Marketing Agencies
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight leading-tight mb-6">
                   Deliver <span className="text-primary italic">10x ROI</span> to your clients with WhatsApp
                </h1>
                <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto lg:mx-0">
                   Generate higher quality leads, automate client reporting, and run click-to-WhatsApp ads that convert faster than traditional landing pages.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                   <Link to="/login" className="bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl shadow-primary/30 w-full sm:w-auto hover:-translate-y-1">
                      Partner With Us
                   </Link>
                   <Link to="/contact" className="border-2 border-text-dark text-text-dark hover:bg-text-dark hover:text-white font-bold text-lg px-8 py-4 rounded-xl transition-all w-full sm:w-auto">
                      View Agency Deck
                   </Link>
                </div>
             </div>

             {/* Right Graphic — Agency Visual */}
             <div className="flex-1 relative w-full max-w-lg mx-auto">
                <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-primary/10 rounded-[2rem] p-8 shadow-2xl border border-indigo-100">
                   {/* Mock chat interface */}
                   <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="bg-primary text-white px-5 py-3 flex items-center gap-3">
                         <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Megaphone size={20} />
                         </div>
                         <div>
                            <p className="font-bold text-sm">LeadGen Bot (Acme Corp)</p>
                            <p className="text-xs text-white/70">Ad Campaign: Summer Promo</p>
                         </div>
                      </div>
                      <div className="p-4 space-y-3 bg-[#ECE5DD] min-h-[220px]">
                         {/* User entry via Ad */}
                         <div className="flex justify-end">
                            <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none px-4 py-2 max-w-[80%] shadow-sm">
                               <p className="text-sm text-gray-800">I saw your ad for the Summer SEO Audit. I'm interested!</p>
                               <p className="text-[10px] text-gray-400 text-right mt-1">09:15 AM</p>
                            </div>
                         </div>
                         {/* Bot reply */}
                         <div className="flex gap-2">
                            <div className="bg-white rounded-xl rounded-tl-none px-4 py-2 max-w-[85%] shadow-sm">
                               <p className="text-sm text-gray-800">Hi there! 👋 Great choice. Before we connect you to our experts, what's your monthly marketing budget?</p>
                               <div className="mt-2 flex flex-col gap-1">
                                  <button className="bg-blue-50 text-blue-600 border border-blue-200 rounded p-1 text-sm font-medium hover:bg-blue-100 text-left px-2">A) Under $1k</button>
                                  <button className="bg-blue-50 text-blue-600 border border-blue-200 rounded p-1 text-sm font-medium hover:bg-blue-100 text-left px-2">B) $1k - $5k</button>
                                  <button className="bg-blue-50 text-blue-600 border border-blue-200 rounded p-1 text-sm font-medium hover:bg-blue-100 text-left px-2">C) $5k+</button>
                               </div>
                               <p className="text-[10px] text-gray-400 text-right mt-1">09:15 AM</p>
                            </div>
                         </div>
                      </div>
                   </div>
                   {/* Floating stats */}
                   <div className="flex gap-3 mt-4">
                      <div className="flex-1 bg-white rounded-xl p-3 shadow-md text-center">
                         <p className="text-2xl font-black text-primary">3.5x</p>
                         <p className="text-[10px] font-bold text-gray-500">Lead Conversion</p>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-3 shadow-md text-center">
                         <p className="text-2xl font-black text-indigo-600">-40%</p>
                         <p className="text-[10px] font-bold text-gray-500">Cost Per Lead (CPL)</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
