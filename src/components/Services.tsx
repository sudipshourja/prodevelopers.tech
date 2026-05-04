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
    <section id="services" className="py-20 md:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
          <div className="max-w-2xl space-y-3 md:space-y-4">
            <p className="font-mono text-[10px] md:text-xs text-blue-500 uppercase tracking-widest">Solutions</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">Expertise that moves the needle.</h2>
            <p className="text-neutral-500 text-base md:text-lg">
              We provide the technical horsepower to solve your business challenges, 
              delivering products that are as robust as they are intuitive.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors mx-auto sm:mx-0">
                {service.icon}
              </div>
              <div className="space-y-3 md:space-y-4 text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-medium text-neutral-50">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1.5 md:gap-x-4 md:gap-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="font-mono text-[9px] md:text-[10px] text-neutral-600 uppercase tracking-wider">
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
