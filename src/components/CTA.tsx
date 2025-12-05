import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-background rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-background rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-background rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            Siap Memulai Perjalanan Digital Anda?
          </h2>
          <p className="text-lg text-background/70 mb-10">
            Konsultasikan kebutuhan bisnis Anda secara gratis. Tim kami siap membantu mewujudkan ide Anda menjadi kenyataan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hubungi via WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-background/30 text-background hover:bg-background/10 transition-all group"
            >
              Lihat Portfolio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-background/20">
            <p className="text-background/50 text-sm mb-4">Atau hubungi langsung:</p>
            <div className="flex flex-wrap justify-center gap-8 text-background/70">
              <a href="mailto:hello@digiserve.id" className="hover:text-background transition-colors">
                z.devdotid@gmail.com
              </a>
              <a href="tel:+6281234567890" className="hover:text-background transition-colors">
                +62 812 3456 7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
