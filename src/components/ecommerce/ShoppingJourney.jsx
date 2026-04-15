import { ShoppingCart, CreditCard, Truck, Star, ArrowRight } from 'lucide-react';

export default function ShoppingJourney() {
  const steps = [
    {
      icon: <ShoppingCart size={24} />,
      title: "Cart Recovery",
      description: "When a user abandons their cart, an automated WhatsApp message is triggered with a personalized discount to nudge them towards checkout.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Order Confirmation",
      description: "Send instant payment receipts, order details, and estimated delivery dates the moment a purchase is verified on your storefront.",
    },
    {
      icon: <Truck size={24} />,
      title: "Shipping Updates",
      description: "Keep customers excited with live tracking links and proactive alerts for shipping, out-for-delivery, and successful handovers.",
    },
    {
      icon: <Star size={24} />,
      title: "Post-Purchase & Reviews",
      description: "Collect product reviews, cross-sell relevant accessories, and offer loyalty rewards automatically after the product is delivered.",
    },
  ];

  return (
    <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                Enhance the entire <span className="text-primary">buyer journey</span>
             </h2>
             <p className="text-lg text-gray-600 font-medium">
                From window shopping to becoming a loyal advocate — connect with shoppers at their most intent-rich moments.
             </p>
          </div>

          {/* Timeline */}
          <div className="relative">
             {/* Connecting line - desktop */}
             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-black -translate-y-1/2 rounded-full"></div>

             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                   <div key={i} className="relative group">
                      {/* Step number circle */}
                      <div className="lg:flex lg:justify-center mb-6">
                         <div className="relative z-10 w-14 h-14 rounded-full bg-[#00E58C] border-2 border-black text-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                            {step.icon}
                         </div>
                      </div>

                      {/* Card */}
                      <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2">
                         <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-black text-black uppercase">Stage {i + 1}</span>
                            {i < steps.length - 1 && <ArrowRight size={12} className="text-gray-300 hidden lg:hidden" />}
                         </div>
                         <h3 className="text-lg font-black text-black mb-2">{step.title}</h3>
                         <p className="text-sm text-gray-600 font-medium leading-relaxed">{step.description}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}
