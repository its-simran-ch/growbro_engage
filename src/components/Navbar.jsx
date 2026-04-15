import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, MessageSquare, Bot, Users, PhoneCall, Zap, ShoppingCart, Activity, TrendingUp, BookOpen, Megaphone } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border-light transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/growbro-logo.jpeg" alt="Growbro Engage logo" className="w-10 h-10 rounded-lg object-contain" />
              <span className="font-bold text-2xl text-text-dark tracking-tight">Growbro <span className="text-primary">Engage</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Solutions Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-text-dark hover:text-primary font-medium py-8">
                Solutions <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-border-light rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 flex gap-8">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xs font-semibold text-text-light uppercase tracking-wider">Teams</h3>
                  <Link to="/" className="block group/link p-2 -m-2 rounded-lg hover:bg-bg-mint transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-bg-mint text-primary p-2 rounded-lg group-hover/link:bg-primary group-hover/link:text-white transition-colors"><Zap size={20} /></div>
                      <div>
                        <div className="font-medium text-text-dark">Growbro Engage for Marketing</div>
                        <div className="text-sm text-text-light mt-0.5">Acquire and engage leads at scale</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/solutions/support" className="block group/link p-2 -m-2 rounded-lg hover:bg-bg-mint transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-bg-mint text-primary p-2 rounded-lg group-hover/link:bg-primary group-hover/link:text-white transition-colors"><Users size={20} /></div>
                      <div>
                        <div className="font-medium text-text-dark">Growbro Engage for Support</div>
                        <div className="text-sm text-text-light mt-0.5">AI-powered query resolution</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex-1 border-l border-border-light pl-8">
                   <h3 className="text-xs font-semibold text-text-light uppercase tracking-wider mb-4">Industries</h3>
                   <div className="space-y-4">
                     <Link to="/solutions/elearning" className="flex items-center gap-2 text-text-dark hover:text-primary font-medium"><BookOpen size={18} /> eLearning</Link>
                     <Link to="/solutions/ecommerce" className="flex items-center gap-2 text-text-dark hover:text-primary font-medium"><ShoppingCart size={18} /> E-commerce</Link>
                   </div>
                </div>
              </div>
            </div>

            {/* Product Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-text-dark hover:text-primary font-medium py-8">
                Product <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[350px] bg-white border border-border-light rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 flex flex-col gap-4">
                  <Link to="/product/ai-chatbots" className="flex items-start gap-3 group/link hover:bg-bg-mint p-2 -m-2 rounded-lg transition-colors">
                    <div className="bg-bg-mint text-primary p-2 rounded-lg group-hover/link:bg-primary group-hover/link:text-white transition-colors"><Bot size={20} /></div>
                    <div>
                      <div className="font-medium text-text-dark">No Code AI Chatbots</div>
                      <div className="text-sm text-text-light mt-0.5">Human-like bots for every use case</div>
                    </div>
                  </Link>
                  <Link to="/product/whatsapp-api" className="flex items-start gap-3 group/link hover:bg-bg-mint p-2 -m-2 rounded-lg transition-colors">
                    <div className="bg-bg-mint text-primary p-2 rounded-lg group-hover/link:bg-primary group-hover/link:text-white transition-colors"><PhoneCall size={20} /></div>
                    <div>
                      <div className="font-medium text-text-dark">WhatsApp API</div>
                      <div className="text-sm text-text-light mt-0.5">Connect with customers at scale</div>
                    </div>
                  </Link>
              </div>
            </div>

            <Link to="/pricing" className="text-text-dark hover:text-primary font-medium">Pricing</Link>
            <Link to="/contact" className="text-text-dark hover:text-primary font-medium">Contact Us</Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="font-bold text-text-dark hover:text-primary transition-colors">Sign In</Link>
            <Link to="/login" className="bg-[#00E58C] text-black border-2 border-black font-black px-6 py-2.5 rounded-full transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Start for Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-dark p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border-light absolute w-full px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <Link to="/" className="block text-text-dark font-medium pb-4 border-b border-border-light">Home</Link>
          <Link to="/pricing" className="block text-text-dark font-medium pb-4 border-b border-border-light">Pricing</Link>
          <Link to="/contact" className="block text-text-dark font-medium pb-4 border-b border-border-light">Contact</Link>
          <div className="pt-4 flex flex-col gap-3">
            <Link to="/login" className="text-center font-medium border border-border-light px-6 py-2 rounded-lg text-text-dark">Sign In</Link>
            <Link to="/login" className="text-center bg-primary text-white font-medium px-6 py-2 rounded-lg">Start for Free</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
