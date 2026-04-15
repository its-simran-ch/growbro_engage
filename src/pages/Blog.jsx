import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      category: "Product Update",
      title: "Introducing Growbro Engage: The next generation of WhatsApp chatbots",
      excerpt: "Today we are excited to announce our biggest update yet, bringing generative AI directly into your customer support workflows.",
      date: "Oct 12, 2026",
      readTime: "5 min read",
      image: "/blog/chatbot.png"
    },
    {
      category: "Marketing Strategy",
      title: "How to run Click-to-WhatsApp Ads that actually convert in 2026",
      excerpt: "Learn the exact strategies top D2C brands are using to lower their CAC by shifting marketing budgets to conversational channels.",
      date: "Oct 05, 2026",
      readTime: "8 min read",
      image: "/blog/marketing.png"
    },
    {
      category: "Customer Success",
      title: "Case Study: How Habuild doubled their course enrollment using Growbro Engage",
      excerpt: "Discover the exact automated flows and qualification questions that led to a 100% increase in paid conversions.",
      date: "Sep 28, 2026",
      readTime: "4 min read",
      image: "/blog/success.png"
    },
    {
      category: "Engineering",
      title: "Scaling our WhatsApp infrastructure to process 10 billion messages",
      excerpt: "A deep dive into the architecture changes we made to ensure 99.99% uptime during peak holiday sales seasons.",
      date: "Sep 15, 2026",
      readTime: "12 min read",
      image: "/blog/engineering.png"
    },
    {
      category: "E-Commerce",
      title: "WhatsApp Catalog vs Web Checkout: Where are users buying?",
      excerpt: "We analyzed over 1M transactions to understand consumer behavior and preference for in-chat shopping experiences.",
      date: "Sep 02, 2026",
      readTime: "6 min read",
      image: "/blog/ecommerce.png"
    },
    {
      category: "Updates",
      title: "Growbro Engage achieves SOC2 Type II Compliance",
      excerpt: "Enterprise security has always been our priority. Today we're proud to announce our official certification.",
      date: "Aug 20, 2026",
      readTime: "3 min read",
      image: "/blog/security.png"
    }
  ];

  const categories = ["All", "Product Update", "Marketing Strategy", "Customer Success", "Engineering"];

  return (
    <div className="flex flex-col pb-24 bg-white min-h-screen">
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight italic">Resources & <span className="text-primary italic">Insights</span></h1>
        <p className="text-lg md:text-xl text-text-light font-bold">
          The latest product updates, marketing strategies, and tips to grow your business on WhatsApp.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`px-6 py-2 border-2 border-black rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0.5 ${
                idx === 0 
                  ? "bg-[#00E58C] text-black" 
                  : "bg-white text-black hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Post Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white border-2 border-black rounded-[2rem] overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_#00E58C] hover:-translate-y-1 transition-all group flex flex-col cursor-pointer">
              {/* Image Container */}
              <div className="h-48 w-full relative overflow-hidden border-b-2 border-black bg-white">
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                 />
                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-black font-black text-[10px] uppercase tracking-[0.2em] mb-4 bg-[#00E58C]/20 px-3 py-1 rounded-full w-fit">
                  {post.category}
                </span>
                <h3 className="text-2xl font-black text-black mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-text-light text-sm font-bold mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-black/5">
                   <div className="text-[11px] text-gray-400 font-black uppercase tracking-wider">
                     {post.date} • {post.readTime}
                   </div>
                   <div className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#00E58C] group-hover:-translate-y-1 transition-all">
                     <ArrowRight size={18} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="bg-white border-2 border-black text-black px-10 py-4 rounded-2xl font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_#00E58C] hover:-translate-y-1 active:translate-y-0 transition-all uppercase tracking-widest italic">
            Load More Articles
          </button>
        </div>
      </section>

    </div>
  );
}
