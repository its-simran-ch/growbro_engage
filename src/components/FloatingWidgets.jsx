import { MessageSquare, Phone } from 'lucide-react';

export default function FloatingWidgets() {
  return (
    <>
      {/* Phone Widget (Bottom Left) */}
      <a 
        href="tel:+1234567890" 
        className="fixed bottom-6 left-6 bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all z-50 flex items-center justify-center group"
      >
        <Phone size={24} className="group-hover:animate-bounce" />
      </a>

      {/* Chat Widget Group (Bottom Right) */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
        <button className="bg-white text-text-dark border border-border-light shadow-lg hover:shadow-xl rounded-full px-5 py-2 font-medium flex items-center gap-2 transition-all text-sm">
          Chat With Us
        </button>
        <button className="bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center">
          <MessageSquare size={28} />
        </button>
      </div>
    </>
  );
}
