import { ChevronRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-start space-y-6 md:space-y-8 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50">
            <Terminal className="w-3 h-3 text-blue-500" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-blue-500 text-center">Engineering Studio & Systems Lab</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-neutral-50">
            High-stakes product delivery <br className="hidden md:block" />
            <span className="text-neutral-500 text-3xl sm:text-4xl md:text-6xl">engineered for complexity.</span>
          </h1>
          
          <p className="text-base md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            We build high-performance products for companies that can&apos;t afford to fail. From rapid MVP launches to scaling legacy infrastructure, we deliver the technical excellence of a systems lab with the business focus of a dedicated product partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <a href="#services" className="px-8 py-4 bg-neutral-50 text-neutral-950 font-medium rounded-sm hover:bg-neutral-200 transition-colors text-center">
              Our Services
            </a>
            <a href="#work" className="group px-8 py-4 bg-neutral-950 border border-neutral-800 font-mono text-neutral-50 rounded-sm hover:bg-neutral-900 transition-colors inline-flex items-center justify-center">
              View Case Studies
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-neutral-900 pt-12">
          <div className="space-y-2">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">The Engine</p>
            <p className="text-xl md:text-2xl font-semibold text-neutral-50">90% Cost Reduction</p>
            <p className="text-sm text-neutral-500 leading-snug">Average savings by replacing managed mapping & media APIs.</p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">The Interface</p>
            <p className="text-xl md:text-2xl font-semibold text-neutral-50">Native Performance</p>
            <p className="text-sm text-neutral-500 leading-snug">React Native & WebRTC optimized for low-latency field ops.</p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">The Standard</p>
            <p className="text-xl md:text-2xl font-semibold text-neutral-50">Zero-Trust Privacy</p>
            <p className="text-sm text-neutral-500 leading-snug">Client-side AES-256 encryption as the default baseline.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
