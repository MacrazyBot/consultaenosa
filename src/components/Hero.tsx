import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToConsultas = () => {
    const element = document.getElementById("consultas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const numeroWhatsApp = "51921206153"; // Cambia esto por tu número
    window.open(`https://wa.me/${numeroWhatsApp}`, "_blank");
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Atención 24/7
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Centro de Atención
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Enosa
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Estamos comprometidos con tu satisfacción. Envía tus consultas o reclamos 
            y recibe atención inmediata a través de WhatsApp.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg"
              onClick={scrollToConsultas}
              className="group bg-gradient-to-r from-primary to-secondary shadow-medium transition-all hover:shadow-lg"
            >
              Comenzar
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={openWhatsApp}
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar con Asesor
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
