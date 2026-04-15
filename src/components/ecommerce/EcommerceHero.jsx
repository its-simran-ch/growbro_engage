import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function EcommerceHero() {
  return (
    <section className="pt-20 pb-20 overflow-hidden bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             {/* Left Text */}
             <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E58C]/10 text-black border-2 border-black rounded-full font-black text-sm mb-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                   <ShoppingBag size={16} />
                   Growbro Engage for E-Commerce
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight mb-6">
                   Turn lost carts into <span className="text-primary italic">loyal customers</span> on WhatsApp
                </h1>
                <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto lg:mx-0">
                   Recover abandoned carts, send automated order updates, and run personalized conversational marketing campaigns that drive 5x higher ROI.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                   <Link to="/login" className="bg-[#00E58C] text-black border-2 border-black font-black text-lg px-8 py-4 rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full sm:w-auto text-center">
                      Start Your Free Trial
                   </Link>
                   <Link to="/pricing" className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-black text-lg px-8 py-4 rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full sm:w-auto text-center">
                      View Pricing
                   </Link>
                </div>
             </div>

             {/* Right Graphic — E-commerce Visual */}
             <div className="flex-1 relative w-full max-w-lg mx-auto">
                <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-4 border-black">
                   {/* Mock chat interface */}
                   <div className="bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                      <div className="bg-black text-white px-5 py-3 flex items-center gap-3">
                         <div className="w-10 h-10 bg-[#00E58C] rounded-full flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_white]">
                            <ShoppingBag size={20} className="text-black" />
                         </div>
                         <div>
                            <p className="font-black text-sm">Glamour Hub — Shop</p>
                            <p className="text-[10px] text-[#00E58C] font-black uppercase tracking-widest">Verified Business</p>
                         </div>
                      </div>
                      <div className="p-4 space-y-3 bg-gray-50 min-h-[220px]">
                         {/* Bot message */}
                         <div className="flex gap-2">
                            <div className="bg-white border-2 border-black rounded-xl rounded-tl-none px-4 py-2 max-w-[85%] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                               <p className="text-sm font-bold text-gray-800">Hi Aryan! We noticed you left some amazing items in your cart. 🛍️</p>
                               <div className="mt-2 bg-[#00E58C] p-2 rounded border-2 border-black flex items-center gap-2">
                                  <div className="w-8 h-8 bg-white rounded border border-black p-1"><ShoppingBag size={12} /></div>
                                  <p className="text-[10px] font-black w-full">Premium Running Sneakers - Size 10</p>
                               </div>
                               <p className="text-sm text-gray-800 mt-2">Use code <strong className="text-primary italic">SAVE20</strong> to get 20% off! ⏳</p>
                            </div>
                         </div>
                         {/* User reply */}
                         <div className="flex justify-end">
                            <div className="bg-[#00E58C] border-2 border-black rounded-xl rounded-tr-none px-4 py-2 max-w-[80%] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                               <p className="text-sm font-bold text-black">Awesome! Just completed my order. 🎉</p>
                            </div>
                         </div>
                      </div>
                   </div>
                   {/* Floating stats */}
                   <div className="flex gap-3 mt-4">
                      <div className="flex-1 bg-white border-2 border-black rounded-xl p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                         <p className="text-2xl font-black text-black">60%</p>
                         <p className="text-[10px] font-bold text-gray-500 uppercase">Cart Recovery</p>
                      </div>
                      <div className="flex-1 bg-white border-2 border-black rounded-xl p-3 shadow-[3px_3px_0px_0px_#00E58C] text-center">
                         <p className="text-2xl font-black text-black">45%</p>
                         <p className="text-[10px] font-bold text-gray-500 uppercase">Repeat Purchases</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
