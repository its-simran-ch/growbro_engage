import { Search, CalendarDays, Stethoscope, FileHeart, ArrowRight } from 'lucide-react';

export default function PatientJourney() {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Find & Consult",
      description: "Patients can discover doctors, check availability, and book appointments directly through a self-serve WhatsApp menu.",
      color: "from-teal-500 to-teal-600",
      bgLight: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      icon: <CalendarDays size={24} />,
      title: "Booking & Reminders",
      description: "Automate appointment confirmations, share clinic locations via Google Maps, and send WhatsApp nudges 2 hours before the visit.",
      color: "from-cyan-500 to-cyan-600",
      bgLight: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Consultation",
      description: "Doctors can conduct secure tele-consultations over WhatsApp video calls and share digital prescriptions directly to the patient's chat.",
      color: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <FileHeart size={24} />,
      title: "Post-Care & Reports",
      description: "Automatically deliver blood test reports, collect feedback, and schedule automated follow-ups for chronic care patients.",
      color: "from-emerald-500 to-emerald-600",
      bgLight: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                A seamless <span className="text-teal-600">patient experience</span>
             </h2>
             <p className="text-lg text-text-light">
                Remove friction from healthcare access. Bring the entire outpatient journey to the app your patients prefer.
             </p>
          </div>

          <div className="relative">
             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-300 via-cyan-300 via-blue-300 to-emerald-300 -translate-y-1/2 rounded-full"></div>

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
