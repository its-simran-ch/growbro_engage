import { Link } from 'react-router-dom';

export default function SupportFinalCTA() {
  return (
    <section className="py-24 bg-white border-b border-border-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border-2 border-black rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-8">
           
           <h2 className="text-3xl font-black text-black flex-1">
             Looking to meet modern support demands of today's customers on messaging apps?
           </h2>

           <div className="flex-shrink-0">
              <Link to="/login" className="bg-[#00E58C] border-2 border-black text-black font-black text-lg px-8 py-4 rounded-full hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block">
                 Start Free 14 Day Trial
              </Link>
           </div>
           
        </div>

      </div>
    </section>
  );
}
