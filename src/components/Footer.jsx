import { Link } from 'react-router-dom';
import { MessageSquare, Globe, Mail, Link2, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          {/* Column 1: Solutions */}
          <div>
            <h4 className="text-primary font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-primary transition-colors">Growbro Engage for Marketing</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Growbro Engage for Support</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">eLearning</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">E-Commerce</Link></li>
            </ul>
          </div>

          {/* Column 2: Integrations */}
          <div>
            <h4 className="text-primary font-semibold mb-6">Integrations</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-primary transition-colors">Shopify</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">HubSpot</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Zapier</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Zoho CRM</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">WooCommerce</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-primary font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-primary font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8 mb-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <img src="/growbro-logo.jpeg" alt="Growbro Engage logo" className="w-8 h-8 rounded-md object-contain" />
                <span className="font-bold text-xl tracking-tight">Growbro <span className="text-primary">Engage</span></span>
              </div>
              <div className="text-sm text-gray-400">
                Modernizing AI Chatbots for Websites.
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Globe size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Share2 size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Link2 size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Mail size={20} /></a>
              </div>
           </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Growbro Engage. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Trust</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
