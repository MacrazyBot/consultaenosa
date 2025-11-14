import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle } from "lucide-react";
import { toast } from "sonner";

const ReclamacionForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    numeroRecibo: "",
    tipoReclamacion: "",
    reclamacion: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación
    if (!formData.nombre || !formData.numeroRecibo || !formData.tipoReclamacion || !formData.reclamacion) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    // Construir mensaje para WhatsApp
    const mensaje = `*NUEVA RECLAMACIÓN*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Email:* ${formData.email || 'No proporcionado'}%0A` +
      `*Teléfono:* ${formData.telefono || 'No proporcionado'}%0A` +
      `*Nro. de Recibo:* ${formData.numeroRecibo}%0A` +
      `*Tipo:* ${formData.tipoReclamacion}%0A%0A` +
      `*Reclamación:*%0A${formData.reclamacion}`;

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
      tipoReclamacion: "",
      reclamacion: "",
    });
  };

  return (
    <Card className="shadow-medium transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-destructive/10 p-2">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
          <div>
            <CardTitle className="text-2xl">Reclamaciones</CardTitle>
            <CardDescription>Presenta tu reclamo y te responderemos a la brevedad</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reclamo-nombre">Nombre Completo *</Label>
            <Input
              id="reclamo-nombre"
              placeholder="Ingresa tu nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              required
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="reclamo-email">Correo Electrónico</Label>
              <Input
                id="reclamo-email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reclamo-telefono">Teléfono</Label>
              <Input
                id="reclamo-telefono"
                type="tel"
                placeholder="999 999 999"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reclamo-recibo">Número de Recibo *</Label>
            <Input
              id="reclamo-recibo"
              placeholder="Ej: 123456789"
              value={formData.numeroRecibo}
              onChange={(e) => setFormData({ ...formData, numeroRecibo: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tipo-reclamacion">Tipo de Reclamación *</Label>
            <Select
              value={formData.tipoReclamacion}
              onValueChange={(value) => setFormData({ ...formData, tipoReclamacion: value })}
              required
            >
              <SelectTrigger id="tipo-reclamacion">
                <SelectValue placeholder="Selecciona el tipo de reclamación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="facturacion">Facturación Incorrecta</SelectItem>
                <SelectItem value="servicio">Interrupción del Servicio</SelectItem>
                <SelectItem value="cobro">Cobro Indebido</SelectItem>
                <SelectItem value="atencion">Atención al Cliente</SelectItem>
                <SelectItem value="instalacion">Instalación / Medidor</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reclamo-mensaje">Detalle de la Reclamación *</Label>
            <Textarea
              id="reclamo-mensaje"
              placeholder="Describe tu reclamación en detalle..."
              className="min-h-[120px]"
              value={formData.reclamacion}
              onChange={(e) => setFormData({ ...formData, reclamacion: e.target.value })}
              required
            />
          </div>

          <Button type="submit" variant="destructive" className="w-full">
            Enviar Reclamación por WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReclamacionForm;
