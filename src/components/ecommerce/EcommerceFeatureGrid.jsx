import { RefreshCw, LayoutTemplate, Tag, ShoppingBag, Fingerprint, LineChart } from 'lucide-react';

export default function EcommerceFeatureGrid() {
  const features = [
    {
      icon: <RefreshCw size={28} />,
      title: "Abandoned Cart Recovery",
      description: "Automatically trigger highly personalized WhatsApp messages with dynamic checkout links when users leave items in their cart.",
      stat: "40%",
      statLabel: "recovery rate",
    },
    {
      icon: <LayoutTemplate size={28} />,
      title: "WhatsApp Product Catalogs",
      description: "Showcase your entire inventory directly within WhatsApp. Let customers browse, add to cart, and checkout without ever leaving the app.",
      stat: "2x",
      statLabel: "conversion speed",
    },
    {
      icon: <Tag size={28} />,
      title: "Personalized Promotions",
      description: "Send tailored festive offers, flash sale alerts, and restock notifications based on past purchase history and browsing behavior.",
      stat: "60x",
      statLabel: "ROI vs Email",
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "Post-Purchase Upselling",
      description: "Automatically recommend complementary accessories or warranty extensions based on the specific product the customer just bought.",
      stat: "15%",
      statLabel: "AOV increase",
    },
    {
      icon: <Fingerprint size={28} />,
      title: "Seamless Authentication",
      description: "Replace clunky SMS OTPs with seamless WhatsApp authentication. Reduce drop-offs during login and account creation.",
      stat: "99%",
      statLabel: "delivery rate",
    },
    {
      icon: <LineChart size={28} />,
      title: "Campaign Analytics",
      description: "Track conversions, link clicks, read rates, and exact revenue generated per WhatsApp broadcasting campaign.",
      stat: "Real-time",
      statLabel: "attribution",
    },
  ];

  return (
    <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                Turn chat into a <span className="text-primary">revenue engine</span>
             </h2>
             <p className="text-lg text-gray-600 font-medium">
                Discover the conversational commerce tools designed to maximize your storefront's profitability.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {features.map((feature, i) => (
                <div 
                   key={i} 
                   className="group relative bg-white border-2 border-black rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                   {/* Icon */}
                   <div className="w-14 h-14 rounded-2xl bg-[#00E58C] border-2 border-black text-black flex items-center justify-center mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform duration-300">
                      {feature.icon}
                   </div>

                   <h3 className="text-xl font-black text-black mb-3">{feature.title}</h3>
                   <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">{feature.description}</p>

                   {/* Stat badge */}
                   <div className="flex items-center gap-3 pt-4 border-t-2 border-black">
                      <span className="text-2xl font-black text-primary">
                         {feature.stat}
                      </span>
                      <span className="text-xs text-black font-bold">{feature.statLabel}</span>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
