import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-bg-mint border border-primary/20 rounded-full text-sm font-medium text-primary mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              The #1 AI WhatsApp Business Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-text-dark leading-[1.1] mb-6">
              Modernizing <br />
              <span className="text-primary">AI Chatbots</span> <br />
              for websites
            </h1>
            
            <p className="text-lg text-text-light mb-8 max-w-xl">
              Use conversations to fuel every point in the buyer journey and empower your teams. Connect with over 100+ tools your business already uses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/login" className="bg-[#00E58C] text-black border-2 border-black font-black px-8 py-3.5 rounded-full transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 group">
                Try for Free <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white text-black border-2 border-black font-black px-8 py-3.5 rounded-full transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2">
                <Play size={18} className="text-black" /> Book a Demo
              </Link>
            </div>
            
            {/* Tech Partners */}
            <div className="mt-12 pt-8 border-t border-border-light/50">
              <p className="text-sm font-semibold text-text-light mb-5">Official Technology Partners</p>
              <div className="flex items-center gap-4 flex-wrap">
                {/* Meta Partner Badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M11.996 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.626 0 12-5.373 12-12s-5.374-12-12-12zm6.262 14.887c-1.396 0-2.585-.8-3.155-1.954-.57 1.154-1.759 1.954-3.155 1.954-1.91 0-3.464-1.554-3.464-3.464s1.554-3.464 3.464-3.464c1.396 0 2.585.8 3.155 1.954.57-1.154 1.759-1.954 3.155-1.954 1.91 0 3.464 1.554 3.464 3.464s-1.554 3.464-3.464 3.464z" /></svg>
                  <span className="font-bold text-gray-800 tracking-tight">Meta <span className="font-normal text-gray-500">Business Partner</span></span>
                </div>
                {/* Google Badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                   <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                   <span className="font-bold text-gray-800 tracking-tight">Google <span className="font-normal text-gray-500">Partner</span></span>
                </div>
                {/* Razorpay Badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                   <span className="font-bold text-blue-700 tracking-tighter text-lg">Razorpay</span>
                   <span className="font-medium text-gray-500 border-l border-gray-300 pl-2">Partner</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Visual (Chatbot Mockup) */}
          <div className="relative">
            {/* Abstract skewed background card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-[2rem] transform rotate-3 scale-105" />
            
            <div className="relative bg-white border border-border-light shadow-2xl rounded-2xl p-6 overflow-hidden">
              <div className="flex items-center gap-3 border-b border-border-light pb-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">G</div>
                <div>
                  <div className="font-bold text-text-dark">Growbro Engage AI</div>
                  <div className="text-xs text-primary flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Online</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-4 text-sm">
                <div className="bg-bg-mint text-text-dark p-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                  Hi there! 👋 I saw your ad and I'm interested in the product. Can you tell me more about features?
                </div>
                <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-sm max-w-[80%] ml-auto shadow-md">
                  Welcome! That's great to hear. I'm an AI assistant. I'd be happy to set up a quick product walkthrough for you.
                </div>
                <div className="bg-bg-mint text-text-dark p-3 rounded-2xl rounded-tl-sm max-w-[80%] flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" /> Qualification info recorded automatically.
                </div>
              </div>
              
              <div className="border border-border-light rounded-full p-2 pl-4 flex justify-between items-center bg-gray-50">
                <span className="text-gray-400 text-sm">Type your message...</span>
                <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary-dark transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
            
            {/* Wati style floating metric card */}
            <div className="absolute -left-12 top-1/2 bg-white px-4 py-3 rounded-xl shadow-xl border border-border-light flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="bg-bg-mint text-primary p-2 rounded-lg font-bold text-xl">3X</div>
              <div className="text-sm font-medium text-text-dark leading-tight">Faster<br/>Responses</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
