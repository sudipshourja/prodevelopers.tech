import { Layers, Rocket, ShieldCheck, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "End-to-End Product Delivery",
      description: "We take your vision from blueprint to production. Whether it's a mobile app for field operations or a complex web platform, we handle the full stack so you can focus on your business.",
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      features: ["MVP Development", "Cross-Platform Mobile", "Business Automation"]
    },
    {
      title: "Infrastructure Modernization",
      description: "Tired of high monthly cloud bills? We audit your existing stack and replace expensive managed services with cost-optimized, custom-architected alternatives that scale with you.",
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      features: ["Cloud Cost Audits", "Managed Service Migration", "Legacy Refactoring"]
    },
    {
      title: "System Performance & Scale",
      description: "When your current system hits a ceiling, we step in. We specialize in low-latency streaming, high-concurrency data handling, and optimizing the 'engine' of your product.",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      features: ["Latency Optimization", "Real-time Systems", "Database Scaling"]
    },
    {
      title: "Security & Compliance",
      description: "We build privacy into the core. From client-side encryption to secure VPN meshes, we ensure your company and user data remain protected by default.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      features: ["Client-Side Encryption", "Zero-Trust Architecture", "Secure Data Pipelines"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs text-blue-500 uppercase tracking-widest">Solutions</p>
            <h2 className="text-4xl font-semibold tracking-tight text-neutral-50">Expertise that moves the needle.</h2>
            <p className="text-neutral-500 text-lg">
              We provide the technical horsepower to solve your business challenges, 
              delivering products that are as robust as they are intuitive.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                {service.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-50">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
