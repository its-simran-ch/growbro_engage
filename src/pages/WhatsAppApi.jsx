import WhatsAppHero from '../components/whatsapp/WhatsAppHero';
import WhatsAppFeatures from '../components/whatsapp/WhatsAppFeatures';
import FinalCTA from '../components/FinalCTA';

export default function WhatsAppApi() {
  return (
    <div className="flex flex-col">
      <WhatsAppHero />
      
      {/* Social Proof / Trust Bar */}
      <section className="py-12 bg-white border-y-2 border-black flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee space-x-12 items-center">
            <span className="text-xl font-black text-black">META BUSINESS PARTNER</span>
            <span className="text-xl font-black text-black tracking-tighter">●</span>
            <span className="text-xl font-black text-black uppercase">OFFICIAL API ACCESS</span>
            <span className="text-xl font-black text-black tracking-tighter">●</span>
            <span className="text-xl font-black text-black">GREEN TICK VERIFIED</span>
            <span className="text-xl font-black text-black tracking-tighter">●</span>
            <span className="text-xl font-black text-black font-black uppercase tracking-tighter">99.9% UPTIME SLA</span>
            <span className="text-xl font-black text-black tracking-tighter">●</span>
        </div>
      </section>

      <WhatsAppFeatures />
      
      <FinalCTA title="Ready to scale on WhatsApp?" />
    </div>
  );
}
