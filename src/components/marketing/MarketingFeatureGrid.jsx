import { Users2, Link2, PieChart, Key, Gauge, Briefcase } from 'lucide-react';

export default function MarketingFeatureGrid() {
  const features = [
    {
      icon: <Users2 size={28} />,
      title: "Multi-Client Management",
      description: "Manage WhatsApp campaigns for multiple brands from a single unified dashboard with secure, role-based access for your account managers.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Link2 size={28} />,
      title: "Click-to-WhatsApp Ads Setup",
      description: "Easily generate custom wa.me links with pre-filled messages to embed in your Facebook, Google, and Instagram ad campaigns.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <PieChart size={28} />,
      title: "A/B Testing Campaigns",
      description: "Test different message copies, promotional offers, and CTA buttons in your WhatsApp broadcasts to identify the highest converting variations.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Key size={28} />,
      title: "White-labeled Solutions",
      description: "Offer Growbro Engage's powerful conversational tools to your clients under your own agency's branding and domain.",
      gradient: "from-purple-500 to-fuchsia-500",
    },
    {
      icon: <Gauge size={28} />,
      title: "Real-time ROI Dashboards",
      description: "Provide clients with transparent, real-time analytics on lead volume, conversion rates, and exact ad spend efficiency.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Agency Partner Program",
      description: "Join our partner network to get dedicated account support, co-marketing opportunities, and attractive revenue-share models.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                Tools built specifically for <span className="text-indigo-600">Marketing Agencies</span>
             </h2>
             <p className="text-lg text-text-light">
                Scale your agency's service offerings and retain clients longer with enterprise-grade Conversational Marketing tools.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {features.map((feature, i) => (
                <div 
                   key={i} 
                   className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                   <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                   
                   <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {feature.icon}
                   </div>

                   <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
                   <p className="text-text-light text-sm leading-relaxed">{feature.description}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
