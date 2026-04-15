import { MousePointerClick, MessageSquareText, Target, Database, ArrowRight } from 'lucide-react';

export default function LeadJourney() {
  const steps = [
    {
      icon: <MousePointerClick size={24} />,
      title: "Click-to-WhatsApp Ads",
      description: "Drive traffic from Facebook and Instagram ads directly into a WhatsApp conversation instead of a high-friction landing page form.",
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      icon: <MessageSquareText size={24} />,
      title: "Instant Qualification",
      description: "An AI chatbot greets the lead instantly, asks qualifying questions, and segments them based on budget and intent.",
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: <Target size={24} />,
      title: "Automated Nurturing",
      description: "Send automated follow-up sequences, case studies, and drip campaigns on WhatsApp to keep the brand top-of-mind.",
      color: "from-violet-500 to-purple-600",
      bgLight: "bg-violet-50",
      borderColor: "border-violet-200",
    },
    {
      icon: <Database size={24} />,
      title: "CRM Sync & Reporting",
      description: "Qualified leads are automatically pushed to your client's CRM (HubSpot, Salesforce) with complete chat transcripts and ROI reporting.",
      color: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                The ultimate <span className="text-indigo-600">lead generation</span> funnel
             </h2>
             <p className="text-lg text-text-light">
                Replace leaking landing pages with conversational funnels that capture 3x more qualified leads for your clients.
             </p>
          </div>

          <div className="relative">
             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-300 via-emerald-300 via-violet-300 to-pink-300 -translate-y-1/2 rounded-full"></div>

             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                   <div key={i} className="relative group">
                      <div className="lg:flex lg:justify-center mb-6">
                         <div className={`relative z-10 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {step.icon}
                         </div>
                      </div>

                      <div className={`${step.bgLight} ${step.borderColor} border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                         <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-black text-gray-400 uppercase">Phase {i + 1}</span>
                            {i < steps.length - 1 && <ArrowRight size={12} className="text-gray-300 hidden lg:hidden" />}
                         </div>
                         <h3 className="text-lg font-bold text-text-dark mb-2">{step.title}</h3>
                         <p className="text-sm text-text-light leading-relaxed">{step.description}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}
