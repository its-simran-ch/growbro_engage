import { CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UnifiedInboxDashboard() {
  const points = [
    "Get a consolidated view of your customer interactions on WhatsApp, Facebook and Instagram messages effortlessly from one unified inbox.",
    "Stay organized with conversation filters. Assign chats to specific teams or members. Say goodbye to ignored inquiries and frustrated customers!",
    "Improve response time with Welcome messages & Out-of-Office workflows"
  ];

  return (
    <section className="py-24 bg-white border-t border-border-light overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark text-center mb-20 max-w-4xl mx-auto">
             One dashboard to manage WhatsApp, Facebook & Instagram conversations
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-16">
             
             {/* Left Text */}
             <div className="flex-1 space-y-8">
                {points.map((pt, i) => (
                   <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 text-text-dark">
                         <CheckSquare className="text-text-dark" size={24} fill="currentColor" stroke="white" />
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">
                         {pt}
                      </p>
                   </div>
                ))}
             </div>

             {/* Right Dashboard Mock UI */}
             <div className="flex-1 w-full max-w-2xl relative">
                <div className="absolute inset-0 bg-gray-100 rounded-[2rem] transform translate-y-4 -translate-x-4"></div>
                <div className="relative bg-white border-2 border-text-dark rounded-2xl shadow-xl flex flex-col h-[400px]">
                   
                   {/* Header */}
                   <div className="h-12 border-b-2 border-text-dark flex items-center px-4 gap-4">
                      <div className="flex items-center gap-2 font-bold text-primary">
                         <span className="w-5 h-5 bg-primary rounded-full text-white text-[10px] flex items-center justify-center">g</span>
                         Growbro Engage
                      </div>
                      <div className="ml-auto w-6 h-6 rounded-full bg-gray-200"></div>
                   </div>

                   {/* Main Area */}
                   <div className="flex flex-1 relative bg-[#F8FAFC]">
                      
                      {/* Sidebar */}
                      <div className="w-32 border-r-2 border-text-dark bg-white flex flex-col items-center gap-4 py-4">
                         <div className="w-full text-center font-bold text-xs">All</div>
                         <div className="text-xs text-primary font-bold">WhatsApp</div>
                         <div className="text-xs text-pink-500 font-bold">Instagram</div>
                         <div className="text-xs text-blue-500 font-bold">Messenger</div>
                      </div>

                      {/* Floating Assign Popover */}
                      <div className="absolute top-12 left-20 bg-white border-2 border-text-dark rounded-xl shadow-lg p-3 w-40 z-20">
                         <div className="text-[10px] font-bold text-gray-400 mb-2">ASSIGN</div>
                         <div className="flex justify-between items-center text-xs font-bold mb-2">
                             <span className="text-gray-400">AGENT</span>
                             <span>Amit V</span>
                         </div>
                         <div className="flex justify-between items-center text-xs font-bold">
                             <span className="text-gray-400">TEAM</span>
                             <span>Delivery</span>
                         </div>
                      </div>

                      {/* Chat Messages Mock */}
                      <div className="flex-1 p-8 flex flex-col justify-end gap-4">
                         <div className="w-48 h-8 rounded-full bg-[#DCF8C6] self-end opacity-50"></div>
                         <div className="w-40 h-8 rounded-full bg-blue-50 opacity-50 border border-blue-100 self-start"></div>
                         <div className="w-64 h-8 rounded-full bg-blue-50 opacity-50 border border-blue-100 self-start"></div>
                         <div className="w-32 h-8 rounded-full bg-blue-50 opacity-50 border border-blue-100 self-start"></div>
                      </div>

                      {/* Right Settings Pane */}
                      <div className="absolute right-[-40px] top-10 border-2 border-text-dark bg-white rounded-xl shadow-xl w-60 p-4">
                         <div className="text-xs font-bold mb-4">Working hours setting</div>
                         <div className="flex justify-between text-xs mb-2 items-center">
                            <span>Holiday Mode</span>
                            <div className="w-6 h-3 bg-gray-300 rounded-full border border-gray-400"></div>
                         </div>
                         <div className="text-[10px] text-gray-400 mb-4">Working hours in Customer time zone</div>
                         <div className="flex justify-between text-xs mb-2 items-center">
                            <span>Monday</span>
                            <div className="flex items-center gap-1 opacity-50">Closed <div className="w-6 h-3 bg-gray-300 rounded-full border border-gray-400"></div></div>
                         </div>
                         <div className="flex justify-between text-xs items-center">
                            <span>Tuesday</span>
                            <div className="flex items-center gap-1 opacity-50">Closed <div className="w-6 h-3 bg-gray-300 rounded-full border border-gray-400"></div></div>
                         </div>
                      </div>
                   </div>

                   {/* Footer Input */}
                   <div className="h-16 bg-white border-t-2 border-text-dark p-3 flexItems-center">
                      <div className="w-full h-full border border-gray-200 rounded-lg flex items-center justify-between px-3">
                         <div className="flex gap-2">
                             <div className="w-4 h-4 bg-gray-200 rounded opacity-50"></div>
                             <div className="w-4 h-4 bg-gray-200 rounded opacity-50"></div>
                             <div className="w-4 h-4 bg-gray-200 rounded opacity-50"></div>
                         </div>
                         <div className="bg-primary text-white text-xs px-4 py-1 rounded">Send</div>
                      </div>
                   </div>

                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
