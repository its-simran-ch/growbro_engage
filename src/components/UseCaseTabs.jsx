import { useState } from 'react';
import { Megaphone, Headset, TrendingUp, ArrowRight } from 'lucide-react';

const tabs = [
  {
    id: 'marketing',
    label: 'Marketing',
    icon: <Megaphone size={20} />,
    color: 'blue',
    title: 'Acquire, engage, and qualify leads at scale',
    bullets: [
      'Convert every touchpoint into meaningful conversations',
      'Improve attribution and ROI with click-to-WhatsApp ads',
      'Drive amazing post-conversion workflows with AI-fueled chat'
    ],
    stats: [
      { num: '4X', label: 'LESS CACS' },
      { num: '3X', label: 'MORE ROI' },
      { num: '85%', label: 'HIGHER RESPONSE RATE' }
    ],
    flow: ['AD', 'CHAT', 'ENGAGE', 'CONVERT'],
    mockText: "Hi! I noticed you left items in your cart. Would you like a 10% discount to complete your purchase today?"
  },
  {
    id: 'sales',
    label: 'Sales',
    icon: <TrendingUp size={20} />,
    color: 'pink',
    title: 'Accelerate pipeline and shorten sales cycles',
    bullets: [
      'One single workspace for your reps to collaborate and convert',
      'Ensure no sales-ready leads slip through with instant qualification',
      'Manage high lead volume easily and automatically handoff to reps'
    ],
    stats: [
      { num: '30%', label: 'FASTER SALES CYCLE' },
      { num: '3X', label: 'FASTER RESPONSES' },
      { num: '20%', label: 'REVENUE GROWTH' }
    ],
    flow: ['ENGAGE', 'QUALIFY', 'ASSIGN', 'WIN'],
    mockText: "Could you please confirm your company size and industry? I'll instantly connect you with our sales expert."
  },
  {
    id: 'support',
    label: 'Support',
    icon: <Headset size={20} />,
    color: 'yellow',
    title: 'Delight customers and handle questions at scale',
    bullets: [
      'Provide instant, accurate answers grounded in your knowledge base',
      'Intelligently route complex conversations to the right human agent',
      'Enhance support operations with data-driven insights'
    ],
    stats: [
      { num: '40%', label: 'LOWER RESOLUTION TIME' },
      { num: '80%', label: 'FEWER REPETITIVE TICKETS' },
      { num: '40%', label: 'INCREASE IN CSAT' }
    ],
    flow: ['INQUIRY', 'RESPOND', 'ESCALATE', 'RESOLVE'],
    mockText: "Your support ticket #9283 has been updated. The technical issue with your dashboard is now fully resolved!"
  }
];

export default function UseCaseTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-24 bg-gray-50 border-y border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Fuel every point in the buyer journey</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">Explore how Growbro Engage's conversational infrastructure supercharges your teams.</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-black border-2 border-black transition-transform duration-300 ${
                activeTab === tab.id 
                  ? 'bg-[#00E58C] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1' 
                  : 'bg-white text-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {tab.icon} Engage for {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content Card */}
        <div className="bg-white rounded-[2rem] p-8 lg:p-14 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-all duration-500">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Col - Data */}
            <div>
              <div className="text-sm font-bold tracking-widest text-text-light uppercase mb-6 flex items-center gap-3">
                 <span className="w-8 h-[2px] bg-primary"></span> GROWBRO FOR {currentTab.label}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-text-dark leading-tight mb-8">
                {currentTab.title}
              </h3>
              
              <div className="space-y-5 mb-12 text-lg text-gray-600">
                {currentTab.bullets.map((bullet, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-bg-mint flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 lg:gap-12 border-t border-border-light pt-8">
                {currentTab.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-4xl lg:text-5xl font-black mb-2 tracking-tight text-primary">
                      {stat.num}
                    </span>
                    <span className="text-[11px] font-bold text-text-light tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col - Visual Flow */}
            <div className="flex flex-col justify-center items-center h-full">
               <div className="flex flex-wrap justify-center items-center gap-3 mb-12 text-xs font-bold text-white tracking-widest">
                  {currentTab.flow.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="px-5 py-2 rounded-full font-bold bg-[#00E58C] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {step}
                      </span>
                      {i < currentTab.flow.length - 1 && <ArrowRight size={16} className="text-gray-300" />}
                    </div>
                  ))}
               </div>
               
               {/* Abstract Example UI Graphic */}
               <div className="w-full max-w-sm bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8 relative flex flex-col gap-6 transform hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-white absolute -left-6 -top-6 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">AI</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 text-gray-600 p-4 rounded-xl text-sm leading-relaxed border border-gray-100 relative shadow-inner">
                     {currentTab.mockText}
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                     <div className="px-6 py-3 rounded-xl bg-[#00E58C] text-black font-black text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform">
                       Automated Action Completed
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
