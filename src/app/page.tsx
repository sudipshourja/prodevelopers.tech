import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <Capabilities />
      <Work />
      
      <footer className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <span className="font-mono text-lg font-medium tracking-tight">
                prodevelopers<span className="text-neutral-500">.tech</span>
              </span>
              <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
                An engineering studio specializing in high-concurrency systems, 
                cost-optimized infrastructure, and privacy-first product delivery.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">Ecosystem</h5>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="https://prodevelopers.cloud" className="hover:text-neutral-50 transition-colors">prodevelopers.cloud</a></li>
                <li><a href="#work" className="hover:text-neutral-50 transition-colors">Portfolio</a></li>
                <li><a href="#capabilities" className="hover:text-neutral-50 transition-colors">Capabilities</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">Inquiries</h5>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="mailto:hello@prodevelopers.tech" className="hover:text-neutral-50 transition-colors">hello@prodevelopers.tech</a></li>
                <li className="text-neutral-600">Available for select Q3/Q4 2026 projects</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
              © 2026 prodevelopers.tech — Logic First. No Managed Service Tax.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
