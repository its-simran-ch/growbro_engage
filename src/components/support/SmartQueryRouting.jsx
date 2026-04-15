export default function SmartQueryRouting() {
  return (
    <section className="py-24 bg-white overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 relative border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[800px]">
             
             <h2 className="text-3xl lg:text-5xl font-black text-text-dark mb-16 leading-tight max-w-4xl mx-auto">
               Boost efficiency with dual power of Growbro Engage's AI-support agent and custom chatbots working together seamlessly
             </h2>

             {/* The Tree UI */}
             <div className="relative max-w-5xl mx-auto flex flex-col items-center">
                
                {/* Root Node */}
                <div className="bg-white px-8 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-20 mb-[60px]">
                   <span className="text-3xl font-black text-black">Customer Queries</span>
                </div>

                {/* Main connecting lines (svg) */}
                <svg className="absolute top-[80px] w-full h-[600px] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                   <g stroke="#3B82F6" strokeWidth="4" fill="none" className="opacity-50">
                      <path d="M500,0 L500,30" />
                      <path d="M500,30 L250,30 L250,60" />
                      <path d="M500,30 L750,30 L750,60" />
                      
                      {/* Left vertical lines */}
                      <path d="M250,60 L250,550" />
                      <line x1="100" y1="200" x2="250" y2="200" />
                      <line x1="100" y1="350" x2="250" y2="350" />
                      <line x1="100" y1="500" x2="250" y2="500" />
                      
                      {/* Right vertical lines */}
                      <path d="M750,60 L750,550" />
                      <line x1="750" y1="200" x2="900" y2="200" />
                      <line x1="750" y1="350" x2="900" y2="350" />
                      <line x1="750" y1="500" x2="900" y2="500" />
                   </g>
                </svg>

                {/* Sub branches */}
                <div className="flex w-full justify-around relative z-10">
                   
                   {/* LEFT BRANCH (SALES) */}
                   <div className="flex flex-col items-center w-5/12">
                      <div className="bg-white px-6 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
                         <span className="text-xl font-black text-black">Sales queries</span>
                      </div>
                      
                      <div className="flex w-full justify-between relative mt-4">
                         
                         {/* Left floating nodes */}
                         <div className="flex flex-col gap-12 w-[200px]">
                            <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm text-black">
                               AI Agent answers sales-FAQs
                            </div>
                            <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm text-black">
                               Lead qualification chatbot asks qualifying questions
                            </div>
                            <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm text-black">
                               Auto-route & equally distribute qualified leads between reps
                            </div>
                         </div>
                         
                         {/* Phone mockup */}
                         <div className="w-[280px] bg-[#F1EFE7] rounded-[2.5rem] border-4 border-gray-100 shadow-xl p-4 h-[500px] flex flex-col relative left-4">
                            <div className="w-full h-8 border-b border-gray-200 flex justify-between px-2 pb-2 opacity-50 mb-4">
                               <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                               <div className="w-16 h-4 rounded bg-gray-300"></div>
                               <div className="w-4 h-4 rounded-sm bg-gray-300"></div>
                            </div>
                            <div className="flex flex-col gap-3 flex-1">
                               <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-sm self-end max-w-[85%] text-xs text-left mb-6 relative right-2">
                                  I am interested in learning more about Machine learning for beginners course
                               </div>
                               <div className="bg-white p-3 rounded-2xl rounded-tl-sm self-start max-w-[85%] text-xs text-left relative -left-4 shadow-md">
                                  You can download the course brochure here.
                                  <div className="mt-2 border rounded p-2 flex items-center gap-2">
                                     <span>📥</span> Machine Learning.jpg
                                  </div>
                               </div>
                            </div>
                            <div className="w-full h-10 border-t border-gray-200 mt-auto flex items-center justify-between px-2 pt-2 opacity-50">
                               <div className="font-black text-xl">+</div>
                               <div className="w-3/4 h-6 border rounded-full"></div>
                               <div className="w-4 h-4 font-bold">☺</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* RIGHT BRANCH (SUPPORT) */}
                   <div className="flex flex-col items-center w-5/12">
                      <div className="bg-white px-6 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
                         <span className="text-xl font-black text-black">Support queries</span>
                      </div>
                      
                      <div className="flex w-full justify-between relative mt-4">
                         
                         {/* Phone mockup */}
                         <div className="w-[280px] bg-[#F1EFE7] rounded-[2.5rem] border-4 border-gray-100 shadow-xl p-4 h-[500px] flex flex-col relative right-4">
                            <div className="w-full h-8 border-b border-gray-200 flex justify-between px-2 pb-2 opacity-50 mb-4">
                               <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                               <div className="w-16 h-4 rounded bg-gray-300"></div>
                               <div className="w-4 h-4 rounded-sm bg-gray-300"></div>
                            </div>
                            <div className="flex flex-col gap-3 flex-1">
                               <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-sm self-end max-w-[85%] text-xs text-left mb-4 relative right-2">
                                  I am getting an error while making payment for my next semester
                               </div>
                               <div className="bg-white p-3 rounded-2xl rounded-tl-sm self-start max-w-[85%] text-xs text-left relative shadow-sm">
                                  Sure, here can be the common reasons for payment errors
                                  <br/><br/>
                                  <span className="text-blue-500">bitly.abcd/payment-errors</span>
                                  <br/><br/>
                                  Was this helpful?
                               </div>
                               <div className="w-full flex flex-col gap-1 px-4 z-10 mt-2">
                                  <div className="border border-blue-200 bg-white text-blue-500 font-bold p-2 text-xs rounded-lg shadow-sm">Yes</div>
                                  <div className="border border-blue-200 bg-white text-blue-500 font-bold p-2 text-xs rounded-lg shadow-sm">No, I'd like to talk to an Agent!</div>
                               </div>
                            </div>
                            <div className="w-full h-10 border-t border-gray-200 mt-auto flex items-center justify-between px-2 pt-2 opacity-50">
                               <div className="font-black text-xl">+</div>
                               <div className="w-3/4 h-6 border rounded-full"></div>
                               <div className="w-4 h-4 font-bold">☺</div>
                            </div>
                         </div>

                         {/* Right floating nodes */}
                         <div className="flex flex-col gap-12 w-[200px]">
                            <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm text-black">
                               AI Agent answers support- FAQs & closes tickets automatically
                            </div>
                            <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm text-black">
                               Complex queries auto-routed to human agents
                            </div>
                            <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm text-black">
                               Survey chatbot collects customer feedback/CSAT score
                            </div>
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
