import { Link } from 'react-router-dom';
import { Bot, Zap, MessageSquare, ArrowRight } from 'lucide-react';

export default function ChatbotHero() {
  return (
    <section className="pt-24 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E58C]/10 text-black border-2 border-black rounded-full font-black text-sm mb-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Bot size={16} />
              No-Code AI Bot Builder
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight leading-tight mb-6">
              Build <span className="text-primary italic">Human-Like</span> AI Bots in Minutes
            </h1>
            <p className="text-xl text-gray-600 font-medium mb-10 max-w-2xl mx-auto lg:mx-0">
              Train intelligent chatbots on your own data. No coding required. Automate 80% of your customer conversations on WhatsApp, Web, and Facebook.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/login" className="bg-[#00E58C] text-black border-2 border-black font-black text-lg px-8 py-4 rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full sm:w-auto text-center">
                Create Your Bot Free
              </Link>
              <Link to="/contact" className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-black text-lg px-8 py-4 rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full sm:w-auto text-center">
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Right Graphic */}
          <div className="flex-1 relative w-full max-w-lg mx-auto">
            <div className="bg-white border-4 border-black rounded-[2.5rem] p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                {/* Visual of bot builder */}
                <div className="bg-gray-50 border-2 border-black rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black uppercase tracking-widest">Training Source</span>
                    <span className="bg-[#00E58C] border border-black px-2 py-0.5 rounded text-[10px] font-black">ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center border border-black italic font-black">PDF</div>
                    <div className="text-xs font-bold text-black">Company_Knowledge_Base.pdf</div>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="w-1 h-8 bg-black"></div>
                </div>

                <div className="bg-[#00E58C]/10 border-2 border-black rounded-2xl p-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#00E58C] border-2 border-black rounded-full flex items-center justify-center">
                      <Zap size={24} />
                    </div>
                  </div>
                  <p className="text-center font-black text-sm">AI Processing Hub</p>
                  <p className="text-center text-[10px] font-bold text-gray-500 mt-1 italic">Converting knowledge to chat flows...</p>
                </div>

                <div className="flex justify-center py-2">
                  <div className="w-1 h-8 bg-black"></div>
                </div>

                <div className="bg-black text-white rounded-2xl p-4 flex items-center justify-between border-2 border-black shadow-[4px_4px_0px_0px_#00E58C]">
                  <div className="flex items-center gap-3">
                    <MessageSquare size={20} className="text-[#00E58C]" />
                    <span className="font-bold text-sm">Deployed to WhatsApp</span>
                  </div>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
