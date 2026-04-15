import { ChevronRight } from 'lucide-react';

export default function UseCaseShowcase() {
  const useCases = [
    {
      title: "Online Coaching Institutes",
      description: "Send batch-wise class reminders, share recorded lecture links, and collect doubt queries — all automated on WhatsApp.",
      items: ["Live class notifications", "Doubt resolution bot", "Fee payment reminders", "Progress reports"],
    },
    {
      title: "Universities & Colleges",
      description: "Manage admissions pipeline, broadcast campus updates, and handle student grievances through a single WhatsApp number.",
      items: ["Admission form collection", "Exam schedule broadcasts", "Placement updates", "Alumni engagement"],
    },
    {
      title: "K-12 & Schools",
      description: "Keep parents informed with automated attendance alerts, PTM reminders, and fee receipts delivered right to their WhatsApp.",
      items: ["Parent communication", "Attendance notifications", "Report card sharing", "Bus tracking alerts"],
    },
  ];

  return (
    <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                Built for every <span className="text-primary">education model</span>
             </h2>
             <p className="text-lg text-gray-600 font-medium">
                Whether you run a coaching institute, a university, or a K-12 school — Growbro Engage adapts to your workflow.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {useCases.map((uc, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2">
                   {/* Header */}
                   <div className="bg-[#00E58C] px-6 py-5 border-b-2 border-black">
                      <h3 className="text-xl font-black text-black">{uc.title}</h3>
                   </div>
                   {/* Body */}
                   <div className="p-6">
                      <p className="text-gray-600 font-medium text-sm mb-6 leading-relaxed">{uc.description}</p>
                      <ul className="space-y-3">
                         {uc.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-3">
                               <div className="w-6 h-6 rounded-full bg-[#00E58C]/20 border border-black flex items-center justify-center flex-shrink-0">
                                  <ChevronRight size={14} className="text-black" />
                               </div>
                               <span className="text-sm text-black font-bold">{item}</span>
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
