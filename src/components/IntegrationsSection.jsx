import { useState, useEffect, useRef, useCallback } from 'react';
import { ShoppingCart, Mail, Database, Workflow, Target, Zap, HeadphonesIcon } from 'lucide-react';

export default function IntegrationsSection() {
  const integrations = [
    { icon: <ShoppingCart />, name: "Shopify", color: "bg-green-100 text-green-600", pos: "-top-8 -left-12" },
    { icon: <Mail />, name: "Mailchimp", color: "bg-yellow-100 text-yellow-600", pos: "top-12 -left-32" },
    { icon: <Workflow />, name: "Zapier", color: "bg-orange-100 text-orange-600", pos: "bottom-12 -left-20" },
    { icon: <Database />, name: "HubSpot", color: "bg-orange-100 text-orange-500", pos: "-bottom-10 left-10" },
    { icon: <Target />, name: "Salesforce", color: "bg-blue-100 text-blue-500", pos: "-bottom-6 right-16" },
    { icon: <HeadphonesIcon />, name: "Zendesk", color: "bg-teal-100 text-teal-600", pos: "top-10 -right-28" },
    { icon: <Zap />, name: "Make", color: "bg-purple-100 text-purple-600", pos: "-top-12 right-2" },
  ];

  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const cardRefs = useRef([]);
  const [lines, setLines] = useState([]);

  const updateLines = useCallback(() => {
    if (!containerRef.current || !centerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();

    const cx = centerRect.left + centerRect.width / 2 - containerRect.left;
    const cy = centerRect.top + centerRect.height / 2 - containerRect.top;

    const newLines = cardRefs.current.map((ref) => {
      if (!ref) return null;
      const rect = ref.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - containerRect.left;
      const y = rect.top + rect.height / 2 - containerRect.top;
      return { x1: cx, y1: cy, x2: x, y2: y };
    }).filter(Boolean);

    setLines(newLines);
  }, []);

  useEffect(() => {
    // Small delay to let layout settle
    const timer = setTimeout(updateLines, 100);
    window.addEventListener('resize', updateLines);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateLines);
    };
  }, [updateLines]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
           <h2 className="text-4xl font-bold text-text-dark mb-4">Connects with your entire stack</h2>
           <p className="text-lg text-text-light">
             Growbro Engage integrates natively with the tools your team already uses. No engineering required.
           </p>
        </div>

        <div ref={containerRef} className="relative max-w-3xl mx-auto h-[400px] flex items-center justify-center">
           
           {/* Dynamic Connecting Lines */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
              {lines.map((line, i) => (
                <line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              ))}
           </svg>

           {/* Center Node (Growbro Engage) */}
           <div ref={centerRef} className="relative z-20 w-28 h-28 bg-white rounded-full shadow-lg border-2 border-gray-100 flex items-center justify-center">
              <img src="/growbro-logo.jpeg" alt="Growbro Engage" className="w-16 h-16 rounded-xl object-contain" />
           </div>

           {/* Orbiting Integration Nodes */}
           {integrations.map((item, idx) => (
             <div
               key={idx}
               ref={(el) => (cardRefs.current[idx] = el)}
               className={`absolute ${item.pos} z-10 w-20 h-20 bg-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black flex flex-col items-center justify-center gap-1 hover:-translate-y-2 hover:bg-[#00E58C] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group`}
             >
                <div className={`p-2 rounded-xl border border-black group-hover:bg-white group-hover:text-black ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-[9px] font-black text-black uppercase tracking-wider">{item.name}</span>
             </div>
           ))}

        </div>

        <div className="text-center mt-12">
           <button className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-1">
             Explore all 50+ integrations &rarr;
           </button>
        </div>
      </div>
    </section>
  );
}
