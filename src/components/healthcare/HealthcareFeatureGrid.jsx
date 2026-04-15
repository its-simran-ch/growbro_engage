import { FileText, ShieldCheck, Clock, CheckCircle2, Bot, PlusCircle } from 'lucide-react';

export default function HealthcareFeatureGrid() {
  const features = [
    {
      icon: <CheckCircle2 size={28} />,
      title: "Automated Bookings",
      description: "Allow patients to book, reschedule, or cancel appointments via WhatsApp. Automatically sync changes with your HMS or Clinic Management Software.",
      gradient: "from-teal-500 to-cyan-500",
      stat: "-65%",
      statLabel: "no-show rate",
    },
    {
      icon: <FileText size={28} />,
      title: "Report Delivery via WhatsApp",
      description: "Send lab test results and radiology reports directly to patients as secure, password-protected PDFs once they are ready.",
      gradient: "from-blue-500 to-indigo-500",
      stat: "100%",
      statLabel: "delivery rate",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "HIPAA Compliant & Secure",
      description: "Patient data stays protected. We use end-to-end encryption on WhatsApp and adhere to strict data privacy and retention policies.",
      gradient: "from-emerald-500 to-teal-500",
      stat: "Bank-grade",
      statLabel: "security",
    },
    {
      icon: <Bot size={28} />,
      title: "24/7 AI Receptionist",
      description: "Deflect routine phone calls. The AI bot answers questions regarding hospital timings, doctor availability, departments, and insurance tie-ups.",
      gradient: "from-cyan-500 to-blue-500",
      stat: "24/7",
      statLabel: "patient support",
    },
    {
      icon: <Clock size={28} />,
      title: "Follow-up Automation",
      description: "Schedule automated WhatsApp nudges to check on post-surgery recovery or remind chronic patients to refill their prescriptions.",
      gradient: "from-indigo-500 to-violet-500",
      stat: "2x",
      statLabel: "better adherence",
    },
    {
      icon: <PlusCircle size={28} />,
      title: "Health Camp Broadcasts",
      description: "Send personalized notifications about upcoming health camps, free check-ups, and vaccination drives based on patient demographics.",
      gradient: "from-sky-500 to-cyan-500",
      stat: "Targeted",
      statLabel: "campaigns",
    },
  ];

  return (
    <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                Empowering <span className="text-teal-600">modern healthcare</span>
             </h2>
             <p className="text-lg text-text-light">
                Tailored solutions for Hospitals, Clinics, Dental Care, and Diagnostic Centers.
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
                   <p className="text-text-light text-sm leading-relaxed mb-6">{feature.description}</p>

                   <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <span className={`text-2xl font-black bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                         {feature.stat}
                      </span>
                      <span className="text-xs text-text-light font-medium">{feature.statLabel}</span>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
