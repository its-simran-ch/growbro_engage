import { Link } from 'react-router-dom';

export default function HumanTouchBalance() {
  return (
    <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-10">Balancing AI with <span className="text-primary">human touch</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div>
                   <p className="text-lg text-text-dark font-medium mb-6">
                     AI should enhance speed & efficiency of service organizations, not replace human connection.
                   </p>
                   <p className="text-lg text-gray-600">
                     Growbro Engage's AI-support agent is trained to be <span className="font-bold text-text-dark">empathetic, multilingual, and context</span>-aware—without losing the human touch.
                   </p>
                </div>
                <div>
                   <p className="text-lg text-text-dark font-medium mb-6">
                     Growbro Engage's AI-support agent <span className="font-bold">balances automation and human touch by:</span>
                   </p>
                   <ul className="space-y-2 text-lg text-gray-600">
                      <li className="flex items-start gap-2">
                         <span className="text-primary mt-1">•</span> Instantly resolving FAQs and closing tickets
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="text-primary mt-1">•</span> Routing complex queries to the right agents
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="text-primary mt-1">•</span> Connecting customers to agents on request
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="text-primary mt-1">•</span> Distributing queries evenly across agents
                      </li>
                   </ul>
                </div>
             </div>
             
             <div className="mt-16">
                <Link to="/contact" className="inline-block border-2 border-black text-black bg-white hover:bg-[#00E58C] font-black px-8 py-3 rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
                   Learn more about our AI-support Agent
                </Link>
             </div>
          </div>
          
       </div>
    </section>
  );
}
