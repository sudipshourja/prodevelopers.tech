export default function Capabilities() {
  const skills = [
    {
      category: "Cloud/Edge",
      items: ["Cloudflare Workers", "R2", "Durable Objects", "Google Cloud Storage", "AWS S3-compatible"]
    },
    {
      category: "Mobile & Real-time",
      items: ["React Native", "WebRTC", "Maplibre GL", "Background Services", "MQTT"]
    },
    {
      category: "Video/Media",
      items: ["FFmpeg", "HLS/DASH", "RTSP/ONVIF", "WebRTC Streaming", "Client-Side Encryption"]
    },
    {
      category: "Geospatial",
      items: ["PMTiles", "Valhalla/OSRM", "Vector Tiles", "Matrix Routing"]
    },
    {
      category: "Protocol Expertise",
      items: ["gRPC", "WebRTC", "MQTT", "RTSP", "Telegram Bot API"]
    },
    {
      category: "DevOps",
      items: ["VPN Mesh (OpenVPN)", "Serverless Architecture", "Scale-to-Zero", "Custom Media Engines"]
    }
  ];

  return (
    <section className="py-20 md:py-24 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            <p className="font-mono text-[10px] md:text-xs text-blue-500 uppercase tracking-widest">Capabilities</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-neutral-50">
              We don&apos;t just build apps. <br />
              We architect systems.
            </h2>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
              Our methodology decouples front-facing product delivery from deep-level infrastructure excellence.
            </p>
            <div className="pt-2 md:pt-4">
              <div className="p-4 border border-neutral-800 bg-neutral-900/30 rounded-sm">
                <p className="text-[10px] md:text-xs text-neutral-500 font-mono mb-2">// Focus Areas</p>
                <ul className="text-xs md:text-sm text-neutral-400 space-y-1">
                  <li>• Mobility & Logistics</li>
                  <li>• Surveillance Infrastructure</li>
                  <li>• Enterprise Resource Systems</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
            {skills.map((skill) => (
              <div key={skill.category} className="space-y-3">
                <h4 className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-neutral-600 border-b border-neutral-900 pb-2">
                  {skill.category}
                </h4>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5 md:gap-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-xs md:text-sm text-neutral-400 hover:text-neutral-50 transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
