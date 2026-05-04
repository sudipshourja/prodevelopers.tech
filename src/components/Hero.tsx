import { ChevronRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start space-y-8 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50">
            <Terminal className="w-3 h-3 text-blue-500" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-500">Engineering Studio & Systems Lab</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-neutral-50">
            High-stakes product delivery <br className="hidden md:block" />
            <span className="text-neutral-500 text-4xl md:text-6xl">engineered for complexity.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            We bridge the gap between niche enterprise logic and mass-market scalability. From serverless geospatial stacks to client-side encrypted surveillance, we eliminate the &quot;managed service tax&quot; through custom-architected DIY solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#work" className="px-8 py-3 bg-neutral-50 text-neutral-950 font-medium rounded-sm hover:bg-neutral-200 transition-colors">
              View Portfolio
            </a>
            <button className="group px-8 py-3 bg-neutral-950 border border-neutral-800 font-mono text-neutral-50 rounded-sm hover:bg-neutral-900 transition-colors inline-flex items-center">
              $ cat capabilities.txt
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-900 pt-12">
          <div className="space-y-2">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">The Engine</p>
            <p className="text-2xl font-semibold text-neutral-50">90% Cost Reduction</p>
            <p className="text-sm text-neutral-500">Average savings by replacing managed mapping & media APIs.</p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">The Interface</p>
            <p className="text-2xl font-semibold text-neutral-50">Native Performance</p>
            <p className="text-sm text-neutral-500">React Native & WebRTC optimized for low-latency field ops.</p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">The Standard</p>
            <p className="text-2xl font-semibold text-neutral-50">Zero-Trust Privacy</p>
            <p className="text-sm text-neutral-500">Client-side AES-256 encryption as the default baseline.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
