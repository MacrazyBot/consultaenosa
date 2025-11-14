import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare } from "lucide-react";
import { toast } from "sonner";

const ConsultaForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    numeroRecibo: "",
    tipoConsulta: "",
    consulta: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.tipoConsulta || !formData.consulta) {
      toast.error("Por favor completa los campos requeridos");
      return;
    }

    // Construir mensaje para WhatsApp
    const mensaje = `*NUEVA CONSULTA*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Email:* ${formData.email || 'No proporcionado'}%0A` +
      `*Teléfono:* ${formData.telefono || 'No proporcionado'}%0A` +
      `*Nro. de Recibo:* ${formData.numeroRecibo || 'No proporcionado'}%0A` +
      `*Tipo de Consulta:* ${formData.tipoConsulta}%0A%0A` +
      `*Consulta:*%0A${formData.consulta}`;

    // Reemplaza con tu número de WhatsApp (formato internacional sin + ni espacios)
    const numeroWhatsApp = "51921206153"; // Cambia esto por tu número
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");
    
    toast.success("Redirigiendo a WhatsApp...");
    
    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      numeroRecibo: "",
      tipoConsulta: "",
      consulta: "",
    });
  };

  return (
    <Card className="shadow-medium transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl">Consultas</CardTitle>
            <CardDescription>¿Tienes alguna pregunta? Estamos aquí para ayudarte</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="consulta-nombre">Nombre Completo *</Label>
            <Input
              id="consulta-nombre"
              placeholder="Ingresa tu nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              required
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="consulta-email">Correo Electrónico</Label>
              <Input
                id="consulta-email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="consulta-telefono">Teléfono</Label>
              <Input
                id="consulta-telefono"
                type="tel"
                placeholder="999 999 999"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="consulta-recibo">Número de DNI</Label>
            <Input
              id="consulta-recibo"
              placeholder="Ej: 123456789"
              value={formData.numeroRecibo}
              onChange={(e) => setFormData({ ...formData, numeroRecibo: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tipo-consulta">Tipo de Consulta *</Label>
            <Select
              value={formData.tipoConsulta}
              onValueChange={(value) => setFormData({ ...formData, tipoConsulta: value })}
              required
            >
              <SelectTrigger id="tipo-consulta">
                <SelectValue placeholder="Selecciona el tipo de consulta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="informacion-servicio">Información sobre el Servicio</SelectItem>
                <SelectItem value="estado-recibo">Estado de mi Recibo</SelectItem>
                <SelectItem value="medidor-lectura">Medidor y Lectura</SelectItem>
                <SelectItem value="planes-tarifas">Planes y Tarifas</SelectItem>
                <SelectItem value="instalacion-nuevo">Instalación Nuevo Servicio</SelectItem>
                <SelectItem value="otro">Otra Consulta</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="consulta-mensaje">Consulta *</Label>
            <Textarea
              id="consulta-mensaje"
              placeholder="Describe tu consulta en detalle..."
              className="min-h-[120px]"
              value={formData.consulta}
              onChange={(e) => setFormData({ ...formData, consulta: e.target.value })}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
            Enviar Consulta por WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultaForm;
