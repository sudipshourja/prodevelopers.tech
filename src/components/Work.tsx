import { ArrowUpRight } from 'lucide-react';

export default function Work() {
  const projects = [
    {
      title: "Cost-Optimized Ride-Sharing Platform",
      challenge: "Eliminating the \"Google Maps Tax\" for high-concurrency routing.",
      result: "90% reduction in mapping infrastructure costs using Cloudflare R2 + PMTiles.",
      tags: ["React Native", "Cloudflare Workers", "Maplibre GL", "Valhalla"],
    },
    {
      title: "FleetCam — GPS + Video Integration",
      challenge: "Unifying real-time WebRTC video with GPS telemetry on Traccar.",
      result: "Sub-500ms video latency for field managers with Telegram bot alerting.",
      tags: ["Traccar", "WebRTC", "Telegram Bot API", "SQLite"],
    },
    {
      title: "CCTV Cloud VMS",
      challenge: "Privacy-first surveillance storage with zero hardware NVR overhead.",
      result: "Client-side AES-256 encryption with 80% cost reduction vs hardware SANs.",
      tags: ["Google Cloud Storage", "OpenVPN", "AES-256", "RTSP"],
    },
    {
      title: "Media Infrastructure Design",
      challenge: "Scale-to-zero media pipeline replacing managed transcoding platforms.",
      result: "Eliminated per-minute fees; pay only for container compute seconds.",
      tags: ["Cloudflare R2", "Durable Objects", "FFmpeg", "HLS/DASH"],
    },
  ];

  return (
    <section id="work" className="py-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4">
            <p className="font-mono text-xs text-blue-500 uppercase tracking-widest">Case Studies</p>
            <h2 className="text-4xl font-semibold tracking-tight">Battle-tested results.</h2>
          </div>
          <p className="text-neutral-500 max-w-sm">
            We deliver the stability your business needs with the high-end engineering your industry demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group p-10 bg-neutral-950 hover:bg-neutral-900/50 transition-all duration-500"
            >
              <div className="flex flex-col h-full space-y-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-medium tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-neutral-700 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="font-mono text-[10px] uppercase text-neutral-600 mb-1">Technical Challenge</p>
                    <p className="text-neutral-400">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase text-blue-500/70 mb-1">Result</p>
                    <p className="text-neutral-200 font-medium">{project.result}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[9px] px-2 py-1 border border-neutral-800 text-neutral-500 tracking-tight uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
