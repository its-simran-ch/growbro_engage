import { Link } from 'react-router-dom';
import { Bot, MessageSquare } from 'lucide-react';

export default function SupportHero() {
  return (
    <section className="pt-20 pb-20 overflow-hidden bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             {/* Left Text */}
             <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-mint text-primary rounded-full font-medium text-sm mb-8">
                   Growbro Engage for Support
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight leading-tight mb-6">
                   Turn WhatsApp into your <span className="text-primary italic">#1 Support Channel</span> with AI that scales effortlessly
                </h1>
                <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto lg:mx-0">
                   Growbro Engage's AI support agent & automations are a force multiplier for service organizations that are looking to automate the busywork, while keeping the human touch where it matters.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                   <Link to="/login" className="bg-[#00E58C] text-black border-2 border-black font-black text-lg px-8 py-4 rounded-full transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full sm:w-auto text-center">
                      Start Free 14 Day Trial
                   </Link>
                </div>
             </div>

             {/* Right Graphic */}
             <div className="flex-1 relative w-full max-w-lg mx-auto">
                <img 
                   src="/place_01.jpeg" 
                   alt="Growbro Engage Support Interface" 
                   className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-[2rem]"
                />
             </div>
          </div>
       </div>
    </section>
  );
}
