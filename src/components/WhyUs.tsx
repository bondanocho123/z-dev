import { Button } from "@/components/ui/button";
import { Shield, Clock, HeartHandshake, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Aman & Terpercaya",
    description: "Data Anda dilindungi dengan enkripsi SSL dan backup otomatis setiap hari.",
  },
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    description: "Proses development yang efisien dengan timeline yang jelas dan transparan.",
  },
  {
    icon: HeartHandshake,
    title: "Harga Bersahabat dan Transparan",
    description: "Tanpa biaya tersembunyi. Anda tahu berapa dari awal. Solusi premium dengan harga yang ramah untuk UMKM dan startup.",
  },
  {
    icon: Headphones,
    title: "Support Responsif",
    description: "Tim support siap membantu WhatsApp dan email.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-xl font-semibold text-primary">MENGAPA Z-Dev?</span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Partner Digital yang Mengerti Kebutuhan Anda
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                    Kami tidak hanya membuat website, tapi juga memastikan bisnis Anda siap bersaing di era digital dengan solusi yang tepat dan efisien.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium">
                            <span className="text-green-500">✓</span> Garansi Uang Kembali
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium">
                            <span className="text-green-500">✓</span> Free Maintenance 1 Bulan
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium">
                            <span className="text-green-500">✓</span> Source Code Milik Anda
                        </div>
                    </div>
                </div>
                {/* Right Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                    <div
                        key={feature.title}
                        className="p-6 rounded-2xl bg-card shadow-card hover:shadow-hover transition-all group"
                    >
                        <div className="inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 pt-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhyUs;
