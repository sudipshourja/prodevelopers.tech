import { Smartphone, Video, Globe, Lock, Code2, Database, Cpu } from 'lucide-react';

const skills = [
  {
    title: "Cloud & Edge Infrastructure",
    description: "Cloudflare ecosystem (Workers, R2, Durable Objects) and cost-optimized GCP/S3 storage.",
    icon: Globe
  },
  {
    title: "Mobile & Real-time",
    description: "React Native, WebRTC, and background telemetry services for field operations.",
    icon: Smartphone
  },
  {
    title: "Video & Media Systems",
    description: "FFmpeg pipelines, HLS/DASH streaming, and low-latency WebRTC synchronization.",
    icon: Video
  },
  {
    title: "Geospatial Engineering",
    description: "PMTiles, Valhalla/OSRM, and Maplibre for high-concurrency routing and mapping.",
    icon: Database
  },
  {
    title: "Security & Encryption",
    description: "Client-side AES-256 and Wireguard VPN meshes for zero-trust data protection.",
    icon: Lock
  },
  {
    title: "Core Platform Expertise",
    description: "Systems integration using Java, Python, and the modern JavaScript/TypeScript ecosystem.",
    icon: Cpu
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 font-semibold">Technical Horsepower</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-neutral-50 leading-tight">
              Systems-Lab <br />
              <span className="text-neutral-500 text-pretty">Product Engineering.</span>
            </h3>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-md">
              We leverage a proven technical foundation to build scalable, high-performance assets. From core platform integration to edge-native logic, we deliver.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <skill.icon className="w-5 h-5 text-blue-500" />
                <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200">{skill.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
