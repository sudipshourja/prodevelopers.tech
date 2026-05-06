import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "Cost-Optimized Ride-Sharing Platform",
    challenge: "Eliminating the 'Google Maps Tax' for high-concurrency routing.",
    result: "90% reduction in mapping infrastructure costs.",
    tags: ["React Native", "Cloudflare", "Maplibre", "Valhalla"]
  },
  {
    title: "FleetCam GPS + Video Integration",
    challenge: "Unifying WebRTC video with GPS telemetry for logistics.",
    result: "Sub-500ms video latency with Telegram bot integration.",
    tags: ["Traccar", "WebRTC", "Telegram Bot", "SQLite"]
  },
  {
    title: "CCTV Cloud VMS (Zero-Trust)",
    challenge: "Privacy-first surveillance storage with zero hardware overhead.",
    result: "80% cost reduction vs hardware NVR/SAN solutions.",
    tags: ["GCP Storage", "Wireguard", "AES-256", "RTSP"]
  },
  {
    title: "Edge-Native Media Pipeline",
    challenge: "Scale-to-zero media pipeline replacing expensive managed platforms.",
    result: "Eliminated per-minute fees; pay only for active compute.",
    tags: ["FFmpeg", "Cloudflare R2", "Durable Objects", "HLS"]
  }
];

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-32 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-blue-500 font-semibold">Case Studies</h2>
            <h3 className="text-3xl md:text-5xl font-semibold text-neutral-50 leading-tight">
              Battle-tested <br className="hidden sm:block" />
              <span className="text-neutral-500 text-pretty">engineering delivery.</span>
            </h3>
          </div>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-sm">
            We deliver the stability your business needs with the high-end engineering your industry demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col space-y-6">
              <div className="flex justify-between items-start">
                <h4 className="text-xl md:text-2xl font-semibold text-neutral-50 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h4>
                <ArrowUpRight className="w-5 h-5 text-neutral-800 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-600">The Challenge</p>
                  <p className="text-neutral-400 text-sm md:text-base">{project.challenge}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <p className="text-neutral-100 font-medium text-sm md:text-base">{project.result}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] font-mono text-neutral-500 uppercase tracking-tighter border border-neutral-900 px-2 py-1 rounded-sm">
                    {tag}
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
