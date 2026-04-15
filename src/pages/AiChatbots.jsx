import ChatbotHero from '../components/chatbots/ChatbotHero';
import ChatbotFeatures from '../components/chatbots/ChatbotFeatures';
import FinalCTA from '../components/FinalCTA';

export default function AiChatbots() {
  return (
    <div className="flex flex-col">
      <ChatbotHero />
      
      {/* Social Proof / Stats Marquee */}
      <section className="py-8 bg-white border-y-2 border-black flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center">
            {/* First set of items */}
            <div className="flex items-center space-x-12 px-6">
                <span className="text-xl font-black text-black">NO CODE REQUIRED</span>
                <span className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0"></span>
                <span className="text-xl font-black text-black uppercase">GPT-4 POWERED</span>
                <span className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0"></span>
                <span className="text-xl font-black text-black">24/7 CUSTOMER SUPPORT</span>
                <span className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0"></span>
                <span className="text-xl font-black text-black uppercase">OMNICHANNEL DEPLOYMENT</span>
                <span className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0"></span>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-12 px-6">
                <span className="text-xl font-black text-black">NO CODE REQUIRED</span>
                <span className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0"></span>
                <span className="text-xl font-black text-black uppercase">GPT-4 POWERED</span>
                <span className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0"></span>
                <span className="text-xl font-black text-black">24/7 CUSTOMER SUPPORT</span>
                <span className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0"></span>
                <span className="text-xl font-black text-black uppercase">OMNICHANNEL DEPLOYMENT</span>
                <span className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0"></span>
            </div>
        </div>
      </section>

      <ChatbotFeatures />
      
      <FinalCTA />
    </div>
  );
}
