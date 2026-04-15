import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';

export default function ELearningCTA() {
  return (
    <section className="py-24 bg-white">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-[2rem] p-12 md:p-16 text-center overflow-hidden border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
             {/* Decorative elements */}
             <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#00E58C]/10 rounded-full blur-3xl pointer-events-none"></div>
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
             <div className="absolute top-8 right-12 opacity-10">
                <GraduationCap size={80} className="text-black"/>
             </div>

             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                   Ready to transform your<br />student engagement?
                </h2>
                <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto mb-10">
                   Join 2,000+ educational institutions using Growbro Engage to automate student communication, boost enrollments, and reduce drop-offs — all via WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Link to="/login" className="bg-[#00E58C] text-black border-2 border-black font-black text-lg px-8 py-4 rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 flex items-center justify-center gap-2">
                      Start Free Trial <ArrowRight size={20} />
                   </Link>
                   <Link to="/contact" className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-black text-lg px-8 py-4 rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
                      Talk to an Expert
                   </Link>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
