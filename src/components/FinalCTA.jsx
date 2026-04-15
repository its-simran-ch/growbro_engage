import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 text-center text-black border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        
        {/* Abstract shapes */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#00E58C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Ready to Transform Your Business?</h2>
          <p className="text-xl text-black/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Join 16,000+ forward-thinking teams using Growbro Engage to acquire, engage, and support customers on WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-[#00E58C] text-black border-2 border-black px-10 py-4 rounded-full font-black text-lg transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full sm:w-auto">
              Start Your Free Trial
            </button>
            <button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 rounded-full font-black text-lg transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2">
              Speak to Sales <ArrowRight size={20} />
            </button>
          </div>
          <p className="mt-8 text-sm text-black/70 font-bold">No credit card required • 14 day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
