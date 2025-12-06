import { Code2, Layers, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Layers,
      title: "Company Profile & Website",
      description: "Website company profile modern, mobile-friendly, dan SEO-ready."
    },
    {
      icon: Code2,
      title: "Robust Custom Apps",
      description: "Aplikasi web/mobile custom sesuai kebutuhan bisnis Anda — mulai dari dashboard internal, e-commerce, SaaS, hingga sistem ERP ringan. Full stack, aman, dan siap scale."
    },
    {
      icon: Zap,
      title: "Deployment & Hosting",
      description: "Deploy aplikasi Anda ke server terbaik (VPS, Cloudflare, Vercel, Railways, dll), SSL gratis, monitoring 24/7, dan auto-scaling. Anda tinggal terima link live."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Bangun Digital Presence Anda</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kami membantu bisnis & startup mewujudkan ide menjadi website profesional dan aplikasi custom yang scalable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
                >
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
