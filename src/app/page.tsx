import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <Services />
      <Capabilities />
      <Work />
      
      <footer className="py-12 md:py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="sm:col-span-2 space-y-4 md:space-y-6">
              <span className="font-mono text-base md:text-lg font-medium tracking-tight">
                prodevelopers<span className="text-neutral-500">.tech</span>
              </span>
              <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
                An engineering studio specializing in high-concurrency systems, 
                cost-optimized infrastructure, and privacy-first product delivery.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-600 font-semibold">Ecosystem</h5>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="https://prodevelopers.cloud" className="hover:text-neutral-50 transition-colors">prodevelopers.cloud</a></li>
                <li><a href="#work" className="hover:text-neutral-50 transition-colors">Portfolio</a></li>
                <li><a href="#services" className="hover:text-neutral-50 transition-colors">Services</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-600 font-semibold">Inquiries</h5>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="mailto:hello@prodevelopers.tech" className="hover:text-neutral-50 transition-colors">hello@prodevelopers.tech</a></li>
                <li className="text-neutral-600 text-xs uppercase tracking-tighter">Available Q3/Q4 2026</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="font-mono text-[9px] md:text-[10px] text-neutral-600 uppercase tracking-widest leading-relaxed">
              © 2026 prodevelopers.tech — Logic First. <br className="sm:hidden" /> No Managed Service Tax.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
