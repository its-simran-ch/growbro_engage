import { Brain, MousePointer2, Globe, BarChart3, ShieldCheck, Languages } from 'lucide-react';

export default function ChatbotFeatures() {
  const features = [
    {
      icon: <Brain size={28} />,
      title: "Knowledge Base Training",
      description: "Upload PDFs, CSVs, or link your website. Our AI learns your business context to answer queries accurately.",
    },
    {
      icon: <MousePointer2 size={28} />,
      title: "Drag-and-Drop Builder",
      description: "Design custom logic flows without a single line of code. Perfect for lead qualification and complex surveys.",
    },
    {
      icon: <Globe size={28} />,
      title: "Omnichannel Deployment",
      description: "Deploy once and chat everywhere — WhatsApp, Instagram, Facebook, and your dedicated web widget.",
    },
    {
      icon: <Languages size={28} />,
      title: "Multilingual Support",
      description: "Automate conversations in 100+ languages including Hindi, Hinglish, and regional Indian dialects.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Advanced Analytics",
      description: "Track user sentiment, resolution rates, and drop-off points to constantly improve your bot's performance.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Human Takeover",
      description: "Seamlessly transition complex queries to your support agents with a single click in the live dashboard.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
            Advanced features for <span className="text-primary italic">Smart</span> Automations
          </h2>
          <p className="text-lg text-gray-600 font-medium font-bold">
            Everything you need to scale your customer engagement without increasing headcount.
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
                <div className="w-1/3 h-full bg-[#00E58C] transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
