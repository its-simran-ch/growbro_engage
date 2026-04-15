import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

function AnimatedCounter({ end, suffix, isFloat = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  // once: true ensures it only animates the first time they see it
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const duration = 2000; // 2 seconds animation

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function (easeOutQuart) for smooth slowdown at the end
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(end * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end); // Ensure it perfectly hits the target at the end
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  // Format the number appropriately
  const displayString = isFloat 
    ? count.toFixed(1) 
    : Math.floor(count).toLocaleString('en-US');

  return (
    <span ref={ref}>
      {displayString}{suffix}
    </span>
  );
}

export default function TrustMetrics() {
  const metrics = [
    { end: 25, suffix: "B+", label: "Messages Processed", isFloat: false },
    { end: 16000, suffix: "+", label: "Global Customers", isFloat: false },
    { end: 99.9, suffix: "%", label: "Platform Uptime", isFloat: true },
    { end: 120, suffix: "+", label: "Countries Served", isFloat: false },
  ];

  return (
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-primary/20 text-center">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4">
               <h3 className="text-4xl lg:text-5xl font-black text-text-dark mb-2 tracking-tight">
                 <AnimatedCounter 
                   end={metric.end} 
                   suffix={metric.suffix} 
                   isFloat={metric.isFloat} 
                 />
               </h3>
               <p className="text-sm font-bold text-primary uppercase tracking-widest">
                 {metric.label}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
