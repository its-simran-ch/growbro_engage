import { Bot, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function AIAgentsSection() {
  return (
    <section className="py-24 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-bg-mint text-primary rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} /> Growbro Engage Agents
           </div>
           <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-6">AI Agents that feel human</h2>
           <p className="text-lg text-text-light">
             Resolve queries instantly without human intervention. Our AI Agents are trained on your business data to deliver personalized, accurate support 24/7.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
           {/* Card 1: Inbound Agent */}
           <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] p-8 lg:p-12 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="relative z-10">
                 <div className="w-14 h-14 bg-[#00E58C] border-2 border-black text-black rounded-2xl flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform group-hover:-translate-y-1 transition-transform">
                    <Bot size={28} />
                 </div>
                 <h3 className="text-2xl font-black text-black mb-4">Inbound Intelligence Agent</h3>
                 <p className="text-gray-800 mb-10 max-w-sm text-lg font-medium leading-relaxed">
                   Automatically qualify inbound leads, answer product queries, and book meetings directly into your team's calendar.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-black font-bold bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-3 rounded-xl">
                       <CheckCircle2 size={20} className="text-[#00E58C] fill-black stroke-black flex-shrink-0" /> Natural language understanding
                    </li>
                    <li className="flex items-center gap-3 text-black font-bold bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-3 rounded-xl">
                       <CheckCircle2 size={20} className="text-[#00E58C] fill-black stroke-black flex-shrink-0" /> Smart handoff to human reps
                    </li>
                 </ul>
              </div>
           </div>

           {/* Card 2: Support Agent */}
           <div className="bg-[#00E58C] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] p-8 lg:p-12 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="relative z-10">
                 <div className="w-14 h-14 bg-white border-2 border-black text-black rounded-2xl flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform group-hover:-translate-y-1 transition-transform">
                    <MessageCircle size={28} />
                 </div>
                 <h3 className="text-2xl font-black text-black mb-4">AI Support Agent</h3>
                 <p className="text-gray-900 mb-10 max-w-sm text-lg font-medium leading-relaxed">
                   Deflect up to 80% of routine support tickets by providing instant, accurate resolutions based on your help center.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-black font-bold bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-3 rounded-xl">
                       <CheckCircle2 size={20} className="text-[#00E58C] fill-black stroke-black flex-shrink-0" /> Trained on your files & website
                    </li>
                    <li className="flex items-center gap-3 text-black font-bold bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-3 rounded-xl">
                       <CheckCircle2 size={20} className="text-[#00E58C] fill-black stroke-black flex-shrink-0" /> 5-minute no-code deployment
                    </li>
                 </ul>
              </div>
           </div>
           
        </div>

      </div>
    </section>
  );
}
