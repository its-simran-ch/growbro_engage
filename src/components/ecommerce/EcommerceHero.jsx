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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight leading-tight mb-6">
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
                <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-primary/10 rounded-[2rem] p-8 shadow-2xl border border-pink-100">
                   {/* Mock chat interface */}
                   <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="bg-primary text-white px-5 py-3 flex items-center gap-3">
                         <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <ShoppingBag size={20} />
                         </div>
                         <div>
                            <p className="font-bold text-sm">Glamour Hub — Shop</p>
                            <p className="text-xs text-white/70">Verified Business</p>
                         </div>
                      </div>
                      <div className="p-4 space-y-3 bg-[#ECE5DD] min-h-[220px]">
                         {/* Bot message */}
                         <div className="flex gap-2">
                            <div className="bg-white rounded-xl rounded-tl-none px-4 py-2 max-w-[85%] shadow-sm">
                               <p className="text-sm text-gray-800">Hi Aryan! We noticed you left some amazing items in your cart. 🛍️</p>
                               <div className="mt-2 bg-gray-50 p-2 rounded border border-gray-200 flex items-center gap-2">
                                  <div className="w-8 h-8 bg-pink-100 rounded"></div>
                                  <p className="text-xs font-bold w-full">Premium Running Sneakers - Size 10</p>
                               </div>
                               <p className="text-sm text-gray-800 mt-2">Use code <strong>SAVE20</strong> to get 20% off if you checkout in the next 2 hours! ⏳</p>
                               <p className="text-[10px] text-gray-400 text-right mt-1">11:45 AM</p>
                            </div>
                         </div>
                         {/* User reply */}
                         <div className="flex justify-end">
                            <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none px-4 py-2 max-w-[80%] shadow-sm">
                               <p className="text-sm text-gray-800">Awesome! Just completed my order. 🎉</p>
                               <p className="text-[10px] text-gray-400 text-right mt-1">11:50 AM</p>
                            </div>
                         </div>
                         {/* Bot reply */}
                         <div className="flex gap-2">
                            <div className="bg-white rounded-xl rounded-tl-none px-4 py-2 max-w-[80%] shadow-sm">
                               <p className="text-sm text-gray-800">Order confirmed! 📦 Tracking ID: TRK84930. We will notify you once it ships.</p>
                               <p className="text-[10px] text-gray-400 text-right mt-1">11:50 AM</p>
                            </div>
                         </div>
                      </div>
                   </div>
                   {/* Floating stats */}
                   <div className="flex gap-3 mt-4">
                      <div className="flex-1 bg-white rounded-xl p-3 shadow-md text-center">
                         <p className="text-2xl font-black text-primary">60%</p>
                         <p className="text-[10px] font-bold text-gray-500">Cart Recovery Rate</p>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-3 shadow-md text-center">
                         <p className="text-2xl font-black text-primary">45%</p>
                         <p className="text-[10px] font-bold text-gray-500">Repeat Purchases</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
