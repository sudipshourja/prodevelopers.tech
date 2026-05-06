import { Rocket, Layers, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "End-to-End Product Delivery",
    description: "We take your vision from blueprint to production. Whether it's a mobile app for field operations or a complex web platform, we handle the full stack so you can focus on your business.",
    icon: Rocket,
    stats: "Full-Cycle Build",
    tech: ["MVP Development", "Cross-Platform", "Automation"]
  },
  {
    title: "Infrastructure Modernization",
    description: "Tired of high monthly cloud bills? We audit your existing stack and replace expensive managed services with cost-optimized, custom-architected alternatives that scale with you.",
    icon: Layers,
    stats: "Cost Optimization",
    tech: ["Cloud Audits", "Managed Migration", "Refactoring"]
  },
  {
    title: "System Performance & Scale",
    description: "When your current system hits a ceiling, we step in. We specialize in low-latency streaming, high-concurrency data handling, and optimizing the 'engine' of your product.",
    icon: Zap,
    stats: "Latency Reduction",
    tech: ["Real-time Systems", "Database Scaling", "Optimization"]
  },
  {
    title: "Security & Compliance",
    description: "We build privacy into the core. From client-side encryption to secure VPN meshes, we ensure your company and user data remain protected by default.",
    icon: ShieldCheck,
    stats: "Zero-Trust Security",
    tech: ["E2EE", "Secure Pipelines", "Privacy-First"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-blue-500 font-semibold mb-4">Solutions</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-neutral-50 max-w-2xl leading-tight">
            Expertise that moves <br className="hidden sm:block" />
            <span className="text-neutral-500">the business needle.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">
          {services.map((item, index) => (
            <div key={index} className="bg-neutral-950 p-8 md:p-12 space-y-8 hover:bg-neutral-900/50 transition-colors group">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-sm border border-neutral-800 bg-neutral-900/50 group-hover:border-blue-500/50 transition-colors">
                  <item.icon className="w-6 h-6 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded-sm border border-blue-500/20">
                  {item.stats}
                </span>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-semibold text-neutral-50">{item.title}</h4>
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span key={i} className="text-[9px] font-mono text-neutral-400 uppercase tracking-tighter border border-neutral-900 px-2 py-1 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
