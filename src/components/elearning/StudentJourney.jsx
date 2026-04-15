import { BookOpen, Bell, MessageCircle, Award, ArrowRight } from 'lucide-react';

export default function StudentJourney() {
  const steps = [
    {
      icon: <BookOpen size={24} />,
      title: "Inquiry & Discovery",
      description: "Students discover your courses via WhatsApp click-to-chat ads and landing pages. The AI chatbot instantly shares course catalogs, fees, and demo links.",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Enrollment & Onboarding",
      description: "Automate the entire enrollment flow on WhatsApp — collect documents, process payments, and send welcome kits without a single manual step.",
    },
    {
      icon: <Bell size={24} />,
      title: "Learning & Engagement",
      description: "Send class reminders, share study material, post assignment deadlines, and broadcast live session links — all automatically via WhatsApp.",
    },
    {
      icon: <Award size={24} />,
      title: "Completion & Certification",
      description: "Trigger course completion messages, share certificates, collect feedback, and upsell advanced courses to keep students engaged long-term.",
    },
  ];

  return (
    <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                Automate the entire <span className="text-primary">student journey</span>
             </h2>
             <p className="text-lg text-gray-600 font-medium">
                From first inquiry to course completion — Growbro Engage handles every touchpoint on WhatsApp so your team can focus on delivering great education.
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
                            <span className="text-xs font-black text-black uppercase">Step {i + 1}</span>
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
