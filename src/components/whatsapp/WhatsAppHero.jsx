import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

export default function WhatsAppHero() {
  return (
    <section className="pt-24 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E58C]/10 text-black border-2 border-black rounded-full font-black text-sm mb-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Phone size={16} />
              Official WhatsApp Business Provider
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black tracking-tight leading-tight mb-6">
              The Power of <span className="text-primary italic">Official</span> WhatsApp API
            </h1>
            <p className="text-xl text-gray-600 font-medium mb-10 max-w-2xl mx-auto lg:mx-0">
              Scale your communication with the world's most popular messaging app. Send bulk broadcasts, use interactive buttons, and get the official "Green Tick" badge.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/login" className="bg-[#00E58C] text-black border-2 border-black font-black text-lg px-8 py-4 rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full sm:w-auto text-center">
                Get API Access Now
              </Link>
              <Link to="/contact" className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-black text-lg px-8 py-4 rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full sm:w-auto text-center">
                Discuss Pricing
              </Link>
            </div>
          </div>
 
          {/* Right Graphic */}
          <div className="flex-1 relative w-full max-w-lg mx-auto">
            <div className="bg-white border-4 border-black rounded-[2.5rem] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                 {/* WhatsApp Business Profile Mockup */}
                 <div className="bg-[#DCF8C6]/30 border-2 border-black rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                          <img src="/growbro-logo.jpeg" alt="Logo" className="w-full h-full object-contain rounded-full" />
                       </div>
                       <div>
                          <div className="flex items-center gap-1.5">
                             <h3 className="font-black text-lg">Growbro Engage</h3>
                             <CheckCircle2 size={18} className="text-[#00E58C] fill-black" />
                          </div>
                          <p className="text-xs font-bold text-gray-500 italic">Official Business Account</p>
                       </div>
                    </div>
                    
                    <div className="space-y-3">
                       <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                          <p className="text-xs font-medium italic">"Your order #8493 has been shipped 🚚. Track it now using the button below!"</p>
                       </div>
                       <button className="w-full bg-white border-2 border-black py-2 rounded-lg font-black text-sm hover:translate-y-[-2px] transition-transform">
                          Track Order
                       </button>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border-2 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                       <p className="text-2xl font-black italic">100%</p>
                       <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Delivery Rate</p>
                    </div>
                    <div className="bg-white border-2 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                       <p className="text-2xl font-black italic">2B+</p>
                       <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Global Reach</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
