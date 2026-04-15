import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWidgets from './components/FloatingWidgets'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import About from './pages/About'
import Blog from './pages/Blog'
import Support from './pages/Support'
import ELearning from './pages/ELearning'
import Ecommerce from './pages/Ecommerce'
import MarketingAgency from './pages/MarketingAgency'
import Healthcare from './pages/Healthcare'
import Login from './pages/Login'
import AiChatbots from './pages/AiChatbots'
import WhatsAppApi from './pages/WhatsAppApi'


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/solutions/support" element={<Support />} />
          <Route path="/solutions/elearning" element={<ELearning />} />
          <Route path="/solutions/ecommerce" element={<Ecommerce />} />
          <Route path="/solutions/marketing-agency" element={<MarketingAgency />} />
          <Route path="/solutions/healthcare" element={<Healthcare />} />
          <Route path="/product/ai-chatbots" element={<AiChatbots />} />
          <Route path="/product/whatsapp-api" element={<WhatsAppApi />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWidgets />
    </div>
  )
}

export default App
