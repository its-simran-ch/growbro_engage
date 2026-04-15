import { Bot, Bell, FileText, Users, BarChart3, Shield } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: <Bot size={28} />,
      title: "24/7 AI Doubt Resolver",
      description: "Deploy an AI-powered chatbot trained on your syllabus. Students get instant answers to FAQs — freeing up faculty for complex queries.",
      stat: "80%",
      statLabel: "queries auto-resolved",
    },
    {
      icon: <Bell size={28} />,
      title: "Smart Class Reminders",
      description: "Automated WhatsApp alerts for live sessions, assignment deadlines, and exam schedules. Reduce no-shows by sending timely nudges to each student.",
      stat: "3x",
      statLabel: "higher attendance",
    },
    {
      icon: <FileText size={28} />,
      title: "Enrollment Automation",
      description: "Collect applications, verify documents, and process payments — all inside WhatsApp. Convert inquiries to paid enrollments without phone calls.",
      stat: "50%",
      statLabel: "faster admissions",
    },
    {
      icon: <Users size={28} />,
      title: "Batch Broadcasting",
      description: "Segment students by course, batch, or progress level. Send targeted study material, announcements, and motivational content to entire batches.",
      stat: "10K+",
      statLabel: "messages per minute",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Engagement Analytics",
      description: "Track message read rates, student response times, and completion metrics. Identify at-risk students before they drop off using smart dashboards.",
      stat: "360°",
      statLabel: "student insights",
    },
    {
      icon: <Shield size={28} />,
      title: "Secure & Compliant",
      description: "End-to-end encryption on WhatsApp ensures student data privacy. Fully GDPR-compliant with role-based admin access for your teaching staff.",
      stat: "100%",
      statLabel: "data encrypted",
    },
  ];

  return (
    <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                Everything your <span className="text-primary">EdTech platform</span> needs
             </h2>
             <p className="text-lg text-gray-600 font-medium">
                Powerful WhatsApp automation tools built for online academies, coaching institutes, and universities.
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
