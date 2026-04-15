import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function HealthcareHero() {
  return (
    <section className="pt-20 pb-20 overflow-hidden bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-600 rounded-full font-medium text-sm mb-8">
                   <Activity size={16} />
                   Growbro Engage for Healthcare
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight leading-tight mb-6">
                   Automate patient communication with <span className="text-teal-600 italic">HIPAA-compliant</span> AI
                </h1>
                <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto lg:mx-0">
                   Reduce no-shows with automated appointment reminders, securely push diagnostic reports, and manage OPD queries entirely on WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                   <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl shadow-teal-600/30 w-full sm:w-auto hover:-translate-y-1">
                      Book a Medical Demo
                   </Link>
                   <Link to="/pricing" className="border-2 border-text-dark text-text-dark hover:bg-text-dark hover:text-white font-bold text-lg px-8 py-4 rounded-xl transition-all w-full sm:w-auto">
                      View Pricing
                   </Link>
                </div>
             </div>

             <div className="flex-1 relative w-full max-w-lg mx-auto">
                <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-primary/10 rounded-[2rem] p-8 shadow-2xl border border-teal-100">
                   <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="bg-teal-600 text-white px-5 py-3 flex items-center gap-3">
                         <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Activity size={20} />
                         </div>
                         <div>
                            <p className="font-bold text-sm">City Hospital Care</p>
                            <p className="text-xs text-white/70">Verified Account</p>
                         </div>
                      </div>
                      <div className="p-4 space-y-3 bg-[#ECE5DD] min-h-[220px]">
                         <div className="flex gap-2">
                            <div className="bg-white rounded-xl rounded-tl-none px-4 py-2 max-w-[85%] shadow-sm">
                               <p className="text-sm text-gray-800">Hello Anjali! This is a reminder for your dental checkup with Dr. Sharma tomorrow at 10:30 AM. 🏥</p>
                               <div className="mt-2 flex flex-col gap-1">
                                  <button className="bg-teal-50 text-teal-700 border border-teal-200 rounded p-1 text-sm font-medium hover:bg-teal-100 text-center">Confirm Appointment</button>
                                  <button className="bg-red-50 text-red-600 border border-red-200 rounded p-1 text-sm font-medium hover:bg-red-100 text-center">Reschedule</button>
                               </div>
                               <p className="text-[10px] text-gray-400 text-right mt-1">04:00 PM</p>
                            </div>
                         </div>
                         <div className="flex justify-end">
                            <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none px-4 py-2 max-w-[80%] shadow-sm">
                               <p className="text-sm text-gray-800">Confirmed. Can you also send my last blood test report?</p>
                               <p className="text-[10px] text-gray-400 text-right mt-1">04:02 PM</p>
                            </div>
                         </div>
                         <div className="flex gap-2">
                            <div className="bg-white rounded-xl rounded-tl-none px-4 py-2 max-w-[85%] shadow-sm">
                               <p className="text-sm text-gray-800">Sure! Here is your secure, password-protected report from April 10th. 📄</p>
                               <div className="mt-1 bg-gray-100 p-2 rounded flex items-center gap-2">
                                  <div className="bg-red-500 text-white text-[10px] font-bold px-1 py-0.5 rounded">PDF</div>
                                  <p className="text-xs w-full font-medium truncate">Anjali_BloodTest_April10...</p>
                               </div>
                               <p className="text-[10px] text-gray-400 text-right mt-1">04:02 PM</p>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="flex gap-3 mt-4">
                      <div className="flex-1 bg-white rounded-xl p-3 shadow-md text-center">
                         <p className="text-2xl font-black text-teal-600">-65%</p>
                         <p className="text-[10px] font-bold text-gray-500">No-show Rate</p>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-3 shadow-md text-center">
                         <p className="text-2xl font-black text-primary">24/7</p>
                         <p className="text-[10px] font-bold text-gray-500">Query Resolution</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
