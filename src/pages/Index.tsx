import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConsultaForm from "@/components/ConsultaForm";
import ReclamacionForm from "@/components/ReclamacionForm";
import { Headphones, AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section id="consultas" className="container mx-auto px-4 py-16 md:py-24 scroll-mt-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Headphones className="h-4 w-4" />
              Consultas
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-muted-foreground">
              Completa el formulario y te contactaremos de inmediato por WhatsApp
            </p>
          </div>

          <ConsultaForm />
        </div>
      </section>

      <section id="reclamaciones" className="container mx-auto px-4 py-16 md:py-24 scroll-mt-16 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
              <AlertCircle className="h-4 w-4" />
              Reclamaciones
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Presenta tu Reclamo
            </h2>
            <p className="text-muted-foreground">
              Te responderemos a la brevedad y daremos seguimiento a tu caso
            </p>
          </div>

          <ReclamacionForm />
        </div>
      </section>

      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Centro de Atención al Cliente. Todos los derechos reservados.</p>
          <p className="mt-2">Respuesta garantizada dentro de las 24 horas</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
