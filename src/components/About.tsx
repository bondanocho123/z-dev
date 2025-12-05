import { Code2, Layers, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Expert Development",
      description: "Specialized in .NET and Rust development with years of production experience"
    },
    {
      icon: Layers,
      title: "Full-Stack Solutions",
      description: "From frontend interfaces to backend systems and database optimization"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Building fast, scalable, and reliable applications for enterprise needs"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering enterprise-grade software solutions with modern technologies
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
