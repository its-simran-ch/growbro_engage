import { Megaphone, MessageSquare, CheckCircle, Smartphone, Users, Zap } from 'lucide-react';

export default function WhatsAppFeatures() {
  const features = [
    {
      icon: <Megaphone size={28} />,
      title: "Bulk Broadcasting",
      description: "Send personalized offers and updates to thousands of customers at once without worrying about being banned.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Official Green Tick",
      description: "Get verified and build instant trust with the official WhatsApp Green Tick badge on your business profile.",
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Interactive Buttons",
      description: "Boost conversions with List Messages and Reply Buttons. Make it easy for customers to engage with your bot.",
    },
    {
      icon: <Users size={28} />,
      title: "Shared Team Inbox",
      description: "Manage all customer chats from one central dashboard. Assign conversations to agents and track their performance.",
    },
    {
      icon: <Zap size={28} />,
      title: "Instant Notifications",
      description: "Automate order updates, shipping alerts, and payment receipts directly to your customer's WhatsApp.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile App Access",
      description: "Access your business chats on the go with our dedicated mobile application for Android and iOS.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
            The Ultimate <span className="text-primary italic">WhatsApp Toolkit</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium font-bold">
            Leverage the full power of the Official WhatsApp Business API to grow your brand.
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
              
              <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-[#00E58C] transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
