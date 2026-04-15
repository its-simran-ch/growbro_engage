import { Link2, BrainCircuit, Activity, Repeat } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Connect Channels",
      description: "Seamlessly integrate WhatsApp, Meta, Instagram, and web chat in one click.",
      icon: <Link2 size={26} />,
    },
    {
      id: 2,
      title: "Train Your AI",
      description: "Upload PDFs, URLs, and past chat logs to train the agent on your context.",
      icon: <BrainCircuit size={26} />,
    },
    {
      id: 3,
      title: "Automate 24/7",
      description: "Let the AI handle routine inquiries, qualify leads, and provide instant support.",
      icon: <Repeat size={26} />,
    },
    {
      id: 4,
      title: "Nurture & Convert",
      description: "Trigger powerful campaigns and push qualified leads to your sales reps.",
      icon: <Activity size={26} />,
    }
  ];

  return (
    <section className="py-24 bg-white text-black border-y border-border-light relative overflow-hidden">
       {/* Background accents */}
       <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E58C]/10 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black mb-6">How Growbro Engage Works</h2>
             <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">From setup to scale in four simple steps. Built for modern growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {steps.map((step) => (
                <div key={step.id} className="relative group">
                   {/* Step Number Background */}
                   <div className="absolute -top-12 -right-2 text-[150px] font-black text-black/[0.03] leading-none select-none transition-all group-hover:text-[#00E58C]/20 pointer-events-none">
                     {step.id}
                   </div>
                   
                   <div className="bg-white border-2 border-black p-8 rounded-[2rem] h-full transition-all duration-300 relative z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:bg-[#00E58C]">
                      <div className="w-16 h-16 bg-white border-2 border-black text-black rounded-2xl flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform">
                         {step.icon}
                      </div>
                      <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                      <p className="text-gray-800 font-medium leading-relaxed text-lg">{step.description}</p>
                   </div>
                   
                   {/* Connector Line (Desktop) */}
                   {step.id !== 4 && (
                     <div className="hidden lg:block absolute top-[50%] -right-4 w-8 h-[2px] bg-black z-0 pointer-events-none" />
                   )}
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
