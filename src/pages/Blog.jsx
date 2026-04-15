import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      category: "Product Update",
      title: "Introducing Growbro Engage: The next generation of WhatsApp chatbots",
      excerpt: "Today we are excited to announce our biggest update yet, bringing generative AI directly into your customer support workflows.",
      date: "Oct 12, 2026",
      readTime: "5 min read",
      image: "bg-blue-100"
    },
    {
      category: "Marketing Strategy",
      title: "How to run Click-to-WhatsApp Ads that actually convert in 2026",
      excerpt: "Learn the exact strategies top D2C brands are using to lower their CAC by shifting marketing budgets to conversational channels.",
      date: "Oct 05, 2026",
      readTime: "8 min read",
      image: "bg-green-100"
    },
    {
      category: "Customer Success",
      title: "Case Study: How Habuild doubled their course enrollment using Growbro Engage",
      excerpt: "Discover the exact automated flows and qualification questions that led to a 100% increase in paid conversions.",
      date: "Sep 28, 2026",
      readTime: "4 min read",
      image: "bg-yellow-100"
    },
    {
      category: "Engineering",
      title: "Scaling our WhatsApp infrastructure to process 10 billion messages",
      excerpt: "A deep dive into the architecture changes we made to ensure 99.99% uptime during peak holiday sales seasons.",
      date: "Sep 15, 2026",
      readTime: "12 min read",
      image: "bg-purple-100"
    },
    {
      category: "E-Commerce",
      title: "WhatsApp Catalog vs Web Checkout: Where are users buying?",
      excerpt: "We analyzed over 1M transactions to understand consumer behavior and preference for in-chat shopping experiences.",
      date: "Sep 02, 2026",
      readTime: "6 min read",
      image: "bg-orange-100"
    },
    {
      category: "Updates",
      title: "Growbro Engage achieves SOC2 Type II Compliance",
      excerpt: "Enterprise security has always been our priority. Today we're proud to announce our official certification.",
      date: "Aug 20, 2026",
      readTime: "3 min read",
      image: "bg-gray-200"
    }
  ];

  const categories = ["All", "Product Update", "Marketing Strategy", "Customer Success", "Engineering"];

  return (
    <div className="flex flex-col pb-24 bg-gray-50/50 min-h-screen">
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-text-dark mb-6">Resources & Insights</h1>
        <p className="text-xl text-gray-500">
          The latest product updates, marketing strategies, and tips to grow your business on WhatsApp.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
                idx === 0 
                  ? "bg-text-dark text-white" 
                  : "bg-white border border-border-light text-gray-600 hover:border-text-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Post Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white border border-border-light rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col cursor-pointer">
              {/* Abstract image placeholder */}
              <div className={`h-48 w-full ${post.image} flex items-center justify-center p-6 relative overflow-hidden`}>
                 <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAwMDAiPjwvcmVjdD4KPC9zdmc+')] mix-blend-overlay" />
                 <div className="w-20 h-20 bg-white/40 backdrop-blur-sm rounded-full shadow-lg scale-50 group-hover:scale-100 transition-transform duration-500" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                   <div className="text-xs text-gray-400 font-medium tracking-wide">
                     {post.date} • {post.readTime}
                   </div>
                   <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                     <ArrowRight size={16} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-white border-2 border-border-light hover:border-gray-300 text-text-dark px-8 py-3 rounded-xl font-bold transition-all">
            Load More Articles
          </button>
        </div>
      </section>

    </div>
  );
}
