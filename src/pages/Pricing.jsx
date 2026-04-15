import { useState } from 'react';
import { CheckCircle2, ChevronDown, CheckCircle, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    q: "Can I use my existing WhatsApp number?",
    a: "Yes, you can use an existing WhatsApp number. However, before onboarding, you must first delete the WhatsApp account linked to that number to port it to the OFFICIAL API."
  },
  {
    q: "Is there a setup fee for using the WhatsApp API?",
    a: "No! There is no setup fee associated with using the WhatsApp API through Growbro Engage."
  },
  {
    q: "What does WhatsApp message-based pricing mean if WhatsApp is free?",
    a: "While regular personal WhatsApp usage is free, businesses using the WhatsApp Business API will incur charges for sending customer messages based on Meta's official pricing limits."
  },
  {
    q: "What is an automation trigger?",
    a: "Every time an AI chatbot automation is invoked for your customer, that counts as a trigger. Every plan comes with a generous quota of triggers per month."
  },
  {
    q: "How can I upgrade or downgrade my plan?",
    a: "You can upgrade your plan or move from a monthly plan to an annual one anytime from the 'Billing' dashboard. Any downgrades will be effective only at the end of your current billing cycle."
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="flex flex-col pb-24">
      
      {/* Pricing Hero */}
      <section className="pt-24 pb-12 bg-white text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-dark mb-6 leading-tight">Get great features at a price that makes sense</h1>
        <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-10 font-bold">Start with a 14-day free trial. No credit card required.</p>
        
        {/* Toggle */}
        <div className="inline-flex items-center gap-4 bg-gray-50 p-2 rounded-full border border-border-light relative z-10 transition-colors">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
              !isAnnual ? 'bg-white shadow-md text-text-dark' : 'text-gray-500 hover:text-text-dark'
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 ${
              isAnnual ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-gray-500 hover:text-text-dark'
            }`}
          >
            Annually <span className={`${isAnnual ? 'bg-white/20 text-white' : 'bg-green-100 text-primary'} text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider`}>Save 20%</span>
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 max-w-7xl mx-auto w-full -mt-4 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Growth Tier */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform flex flex-col">
               <h3 className="text-2xl font-black text-text-dark mb-2">Growth</h3>
               <p className="text-gray-600 font-medium text-sm mb-6 h-10">Perfect for small teams getting started with AI support.</p>
               <div className="mb-8">
                  <span className="text-4xl font-black text-text-dark">₹{isAnnual ? '1,599' : '2,000'}</span>
                  <span className="text-gray-600 font-bold"> /mo</span>
               </div>
               <button className="w-full bg-white text-black border-2 border-black hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-3 rounded-full font-black transition-all mb-8">
                 Start Free Trial
               </button>
               <div className="space-y-4 flex-grow">
                  <p className="font-extrabold text-sm uppercase tracking-wider text-black">What's included:</p>
                  <ul className="space-y-3 font-medium">
                     <li className="flex gap-3 text-sm text-text-dark"><CheckCircle2 size={18} className="text-black flex-shrink-0" /> 5 User Seats</li>
                     <li className="flex gap-3 text-sm text-text-dark"><CheckCircle2 size={18} className="text-black flex-shrink-0" /> 1,000 AI Agent Triggers</li>
                     <li className="flex gap-3 text-sm text-text-dark"><CheckCircle2 size={18} className="text-black flex-shrink-0" /> 1 WhatsApp Number</li>
                     <li className="flex gap-3 text-sm text-text-dark"><CheckCircle2 size={18} className="text-black flex-shrink-0" /> Basic Analytics</li>
                  </ul>
               </div>
            </div>

            {/* Pro Tier (Highlighted) */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_#00E676] md:shadow-[8px_8px_0px_0px_#00E676] transform md:-translate-y-4 hover:-translate-y-5 transition-transform flex flex-col relative mt-8 md:mt-0">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00E676] text-black border-2 border-black px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                 Most Popular
               </div>
               <h3 className="text-2xl font-black text-text-dark mb-2">Pro</h3>
               <p className="text-gray-600 font-medium text-sm mb-6 h-10">Complete automation for growing businesses.</p>
               <div className="mb-8">
                  <span className="text-5xl font-black text-text-dark">₹{isAnnual ? '3,999' : '5,000'}</span>
                  <span className="text-gray-600 font-bold"> /mo</span>
               </div>
               
               <div className="relative group w-full mb-8">
                 <div className="absolute inset-0 bg-[#00E676] rounded-full translate-y-1.5 translate-x-1.5 transition-transform group-hover:translate-y-2 group-hover:translate-x-2"></div>
                 <button className="relative w-full bg-[#00E676] text-black border-2 border-black py-3 rounded-full font-black text-lg transition-transform focus:outline-none group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">
                   Start Free Trial
                 </button>
               </div>

               <div className="space-y-4 flex-grow">
                  <p className="font-extrabold text-sm uppercase tracking-wider text-black">Everything in Growth, plus:</p>
                  <ul className="space-y-3 font-medium">
                     <li className="flex gap-3 text-sm text-text-dark"><CheckCircle size={18} className="text-[#00E676] fill-black stroke-2 flex-shrink-0" /> 15 User Seats</li>
                     <li className="flex gap-3 text-sm text-text-dark"><CheckCircle size={18} className="text-[#00E676] fill-black stroke-2 flex-shrink-0" /> 10,000 AI Agent Triggers</li>
                     <li className="flex gap-3 text-sm text-text-dark"><CheckCircle size={18} className="text-[#00E676] fill-black stroke-2 flex-shrink-0" /> Shopify & Webhooks Integrations</li>
                     <li className="flex gap-3 text-sm text-text-dark"><CheckCircle size={18} className="text-[#00E676] fill-black stroke-2 flex-shrink-0" /> Advanced Flow Builder</li>
                  </ul>
               </div>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform flex flex-col mt-4 md:mt-0">
               <h3 className="text-2xl font-black text-text-dark mb-2">Enterprise</h3>
               <p className="text-gray-600 font-medium text-sm mb-6 h-10">Custom volumes and dedicated support.</p>
               <div className="mb-8 mt-2">
                  <span className="text-4xl font-black text-text-dark">Let's Talk</span>
               </div>
               <button className="w-full bg-white text-black border-2 border-black hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-3 rounded-full font-black transition-all mb-8">
                 Contact Sales
               </button>
               <div className="space-y-4 flex-grow">
                  <p className="font-extrabold text-sm uppercase tracking-wider text-black">Everything in Pro, plus:</p>
                  <ul className="space-y-3 font-medium">
                     <li className="flex gap-3 text-sm text-text-dark"><ShieldCheck size={18} className="text-black flex-shrink-0" /> Custom User Seats</li>
                     <li className="flex gap-3 text-sm text-text-dark"><ShieldCheck size={18} className="text-black flex-shrink-0" /> Unlimited AI Triggers</li>
                     <li className="flex gap-3 text-sm text-text-dark"><ShieldCheck size={18} className="text-black flex-shrink-0" /> Dedicated Account Manager</li>
                     <li className="flex gap-3 text-sm text-text-dark"><ShieldCheck size={18} className="text-black flex-shrink-0" /> Custom SSO & SLA</li>
                  </ul>
               </div>
            </div>

         </div>
      </section>

      {/* Trust Bar */}
      <section className="my-24 py-10 bg-gray-50 border-y border-border-light text-center">
         <p className="text-sm font-bold text-text-dark uppercase tracking-widest mb-8">Trusted by growing teams across India</p>
         <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <span className="font-black text-2xl tracking-tighter">Habuild</span>
            <span className="font-black text-2xl tracking-tight">VEDANTU</span>
            <span className="font-black text-2xl">Zomato For Work</span>
            <span className="font-black text-2xl italic">Swiggy</span>
         </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-4 w-full">
         <h2 className="text-3xl md:text-4xl font-black text-center text-text-dark mb-12 italic">Frequently Asked <span className="text-primary">Questions</span></h2>
         <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border-2 border-black rounded-2xl overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 ${openFaq === idx ? 'bg-[#00E58C] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}
              >
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className={`font-black pr-8 ${openFaq === idx ? 'text-black' : 'text-text-dark'}`}>{faq.q}</span>
                  <ChevronDown size={20} className={`transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180 text-black' : 'text-black'}`} />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 origin-top overflow-hidden ${openFaq === idx ? 'text-black font-medium max-h-48 pb-5 opacity-100' : 'text-gray-600 max-h-0 opacity-0'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
         </div>
         
         <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-border-light">
            <h4 className="font-bold text-text-dark mb-2">Still have questions?</h4>
            <p className="text-gray-500 mb-6">Our team is ready to help you sort out your needs.</p>
            <button className="bg-white border border-border-light shadow-sm text-text-dark hover:text-primary px-6 py-2 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
         </div>
      </section>

    </div>
  );
}
