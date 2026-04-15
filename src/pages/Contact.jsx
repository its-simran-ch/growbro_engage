import { MessageSquare, Mail, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageSquare size={24} className="text-black" />,
      title: "Chat on WhatsApp",
      description: "Get instant responses from our team right on your favorite messaging app.",
      action: "Chat Now",
      link: "#",
    },
    {
      icon: <Mail size={24} className="text-black" />,
      title: "Email Us",
      description: "Drop us an email for detailed inquiries and partnership opportunities.",
      action: "hello@Growbro Engage",
      link: "mailto:hello@Growbro Engage",
    },
    {
      icon: <Phone size={24} className="text-black" />,
      title: "Call Us",
      description: "Speak directly with our technical support or sales specialists.",
      action: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <Calendar size={24} className="text-black" />,
      title: "Schedule a Demo",
      description: "Book a 30-minute personalized walkthrough with a product expert.",
      action: "Pick a Time",
      link: "#",
    }
  ];

  return (
    <div className="flex flex-col pb-24 bg-gray-50/30">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white border-b-2 border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00E58C]/10 text-black border-2 border-black rounded-full text-sm font-black mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
             We're here to help
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
            Let's <span className="text-primary italic">Grow</span> Together 🚀
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Whether you need technical support, sales inquiries, or just want to say hi — our team is ready to connect.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-8 relative z-20">
        
        {/* 4 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all group flex flex-col">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#00E58C] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 font-medium text-sm mb-6 flex-grow">{item.description}</p>
              <a href={item.link} className="text-black font-black group-hover:text-primary transition-colors flex items-center gap-1">
                {item.action} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Info & Trust */}
          <div className="bg-bg-dark text-white p-10 lg:p-16 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
             
             <div className="relative z-10">
               <h3 className="text-3xl font-bold mb-6">Partner with the best in the industry.</h3>
               <p className="text-gray-400 mb-12 text-lg">
                 Reach out to us and we'll get back to you within 24 hours. Let's discuss how AI can transform your customer experience.
               </p>

               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-primary/20 p-2 rounded-lg text-primary mt-1"><CheckCircle2 size={24} /></div>
                   <div>
                     <h4 className="font-bold text-white text-lg">Meta Business Partner</h4>
                     <p className="text-sm text-gray-400">Official BSP for WhatsApp API</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-primary/20 p-2 rounded-lg text-primary mt-1"><CheckCircle2 size={24} /></div>
                   <div>
                     <h4 className="font-bold text-white text-lg">Enterprise Security</h4>
                     <p className="text-sm text-gray-400">GDPR & ISO 27001 Compliant</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-primary/20 p-2 rounded-lg text-primary mt-1"><CheckCircle2 size={24} /></div>
                   <div>
                     <h4 className="font-bold text-white text-lg">Trusted Globally</h4>
                     <p className="text-sm text-gray-400">Over 16,000 active businesses</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 lg:p-16 lg:w-3/5 pb-14">
             <h3 className="text-2xl font-bold text-text-dark mb-8">Send us a message</h3>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium" placeholder="Doe" />
                  </div>
               </div>
               
               <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium" placeholder="john@company.com" />
               </div>

               <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">Company Size</label>
                  <select className="w-full px-4 py-3 bg-white border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-black font-medium cursor-pointer">
                     <option>1-10 employees</option>
                     <option>11-50 employees</option>
                     <option>51-200 employees</option>
                     <option>201+ employees</option>
                  </select>
               </div>
               
               <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">How can we help?</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-white border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none font-medium" placeholder="Tell us about your requirements..."></textarea>
               </div>

               <button type="button" className="w-full bg-[#00E58C] text-black border-2 border-black font-black py-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all text-lg">
                  Send Message
               </button>
               <p className="text-center text-xs text-gray-400 mt-4">
                 By submitting this form, you agree to our privacy policy.
               </p>
             </form>
          </div>
        </div>

      </section>
    </div>
  );
}
