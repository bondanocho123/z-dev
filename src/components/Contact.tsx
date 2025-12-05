import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group shadow-glow">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Connect with us</p>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
