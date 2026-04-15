import { Target, Shield, Zap, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target size={28} className="text-blue-500" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with conversational AI.",
      bg: "bg-blue-50"
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: "Built on Trust",
      description: "Data privacy and enterprise-grade security are the foundation of our platform.",
      bg: "bg-bg-mint"
    },
    {
      icon: <Zap size={28} className="text-yellow-500" />,
      title: "Simplicity",
      description: "We make complex AI automation accessible to businesses of all sizes.",
      bg: "bg-yellow-50"
    },
    {
      icon: <Users size={28} className="text-purple-500" />,
      title: "Customer Centric",
      description: "Your growth is our growth. We measure success by your business metrics.",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="flex flex-col pb-24">
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gray-50 border-b border-border-light text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-text-dark mb-6 tracking-tight">
            We are building the <span className="text-primary">future</span> of B2B conversations.
          </h1>
          <p className="text-xl text-text-light leading-relaxed">
            Growbro Engage was founded with a simple mission: to help growing businesses provide enterprise-class customer experiences on the channels that matter most, using the power of AI.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-text-dark mb-4">Our Core Values</h2>
           <p className="text-lg text-gray-500">The principles that guide everything we build.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
             <div key={idx} className="bg-white rounded-2xl p-8 border border-border-light shadow-xl hover:-translate-y-1 transition-transform">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${value.bg}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.description}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Quick Team/Office visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
         <div className="bg-bg-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[80px]" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Join our growing team</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              We're always looking for talented engineers, marketers, and sales leaders to join our mission.
            </p>
            <button className="relative z-10 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-colors">
               View Open Positions
            </button>
         </div>
      </section>

    </div>
  );
}
