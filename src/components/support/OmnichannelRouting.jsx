import { Share2, Globe, MousePointerClick, QrCode, MessageSquare, Bot } from 'lucide-react';

export default function OmnichannelRouting() {
  return (
    <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                Make WhatsApp your <span className="text-primary">go-to support channel</span>—stay connected with your customers <span className="text-primary">24*7</span>
             </h2>
             <p className="text-lg text-text-light">
                Drive customers from different channels to WhatsApp & manage ticket volumes smartly & efficiently. Save up to 50% on your support costs.
             </p>
          </div>

          {/* Diagram Container */}
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             
             {/* Abstract SVG paths to connect nodes */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#8B5CF6" strokeWidth="3" fill="none" className="opacity-40">
                   {/* Left connections (approximate positions) */}
                   <path d="M250,150 Q400,150 500,300" />
                   <path d="M250,250 Q400,250 500,300" />
                   <path d="M250,350 Q400,350 500,300" />
                   <path d="M250,450 Q400,450 500,300" />
                   {/* Right connections */}
                   <path d="M700,300 Q800,150 900,150" />
                   <path d="M700,300 Q800,450 900,450" />
                   <path d="M900,150 L900,300" />
                </g>
             </svg>

             {/* UI Nodes */}
             <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
                
                {/* Left Inputs */}
                <div className="flex flex-col gap-6 w-full lg:w-[250px]">
                   {[
                     { title: "Social media", sub: "WA.ME SHORT LINKS", icon: <Share2 size={18} className="text-pink-500"/> },
                     { title: "Website", sub: "WHATSAPP CHAT", icon: <Globe size={18} className="text-purple-400"/> },
                     { title: "Click to WhatsApp Ads", sub: "WHATSAPP CHAT FROM ADS", icon: <MousePointerClick size={18} className="text-pink-400"/> },
                     { title: "Packaging / brochures", sub: "WHATSAPP QR CODES", icon: <QrCode size={18} className="text-pink-300"/> },
                   ].map((item, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                         <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-text-dark">{item.title}</span>
                            {item.icon}
                         </div>
                         <span className="text-[10px] font-bold text-text-light">{item.sub}</span>
                      </div>
                   ))}
                </div>

                {/* Center Hub */}
                <div className="bg-[#00E58C] rounded-2xl p-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full lg:w-[250px] text-center transform scale-110 z-20">
                   <p className="font-black text-black text-sm mb-2">Customer Queries on</p>
                   <div className="flex items-center justify-center gap-2 text-black font-black text-2xl">
                      <MessageSquare fill="currentColor" size={32} />
                      WhatsApp
                   </div>
                </div>

                {/* Right Outputs */}
                <div className="flex flex-col gap-12 w-full lg:w-[350px]">
                   <div className="bg-white rounded-xl p-4 text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                     <span className="absolute -top-3 -right-3 text-2xl">✨</span>
                     <p className="font-black text-black mb-1">AI support agent powered by Growbro Engage</p>
                     <p className="text-[10px] font-black text-gray-600">AUTOMATE REPLIES TO FAQS & CLOSE TICKETS</p>
                   </div>
                   
                   <div className="bg-[#00E58C] rounded-xl p-6 text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <p className="text-4xl font-black text-black mb-1">80%</p>
                      <p className="text-xs font-black text-black">of queries replied automatically</p>
                   </div>

                   <div className="bg-white rounded-xl p-4 text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                     <p className="font-black text-black mb-1">Custom chatbots</p>
                     <p className="text-[10px] font-black text-gray-600">CREATE CUSTOM WORKFLOWS TO HANDLE SPECIFIC QUERIES</p>
                   </div>
                </div>

             </div>
          </div>
       </div>
    </section>
  );
}
