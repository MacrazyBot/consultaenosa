import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const numeroWhatsApp = "51999999999"; // Cambia esto por tu número
    window.open(`https://wa.me/${numeroWhatsApp}`, "_blank");
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-primary">Centro de Atención</h1>
            
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("consultas")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Consultas
              </button>
              <button
                onClick={() => scrollToSection("reclamaciones")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Reclamaciones
              </button>
            </div>
          </div>

          <Button
            onClick={openWhatsApp}
            className="bg-gradient-to-r from-primary to-secondary"
          >
            <Phone className="mr-2 h-4 w-4" />
            Contactar Asesor
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
