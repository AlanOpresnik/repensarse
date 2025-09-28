"use client";

import { JSX, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Brain, Users, Heart, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Modelo = {
  id: string;
  titulo: string;
  icono: JSX.Element;
  descripcionCorta: string;
  descripcionLarga: string;
  color: "primary" | "accent";
};

const modelos: Modelo[] = [
  {
    id: "psicoanalitico",
    titulo: "Psicoanalítico",
    icono: <Brain className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />,
    descripcionCorta: "Exploración profunda del inconsciente y su relación con el plano de la consciencia.",
    descripcionLarga:
      " Es un enfoque de la psicoterapia que explora el inconsciente, la infancia y el pasado para comprender cómo influyen en el comportamiento, los pensamientos y las emociones actuales del individuo. Se centra en traer experiencias y sentimientos reprimidos a la conciencia a través de técnicas como la asociación libre, el análisis de sueños y la interpretación de la transferencia.",
    color: "primary",
  },
  {
    id: "integrativa",
    titulo: "Psicología Integrativa",
    icono: <Users className="h-12 w-12 text-accent mx-auto mb-4 group-hover:animate-pulse" />,
    descripcionCorta: "Combinación de diferentes enfoques para un tratamiento personalizado.",
    descripcionLarga:
      "La psicología integrativa es un enfoque terapéutico que integra varios modelos logrando adaptarse a las necesidades específicas de cada persona. Su objetivo es abordar al individuo de una manera holística, teniendo en cuenta no solo los síntomas o problemas que presenta, sino también su contexto emocional, social, físico y espiritual. Se trata de una orientación que no solo piensa en los síntomas o el diagnóstico del paciente, sino que además considera su historia personal, sus necesidades, recursos y redes de apoyo.",
    color: "accent",
  },
  {
    id: "sistemica",
    titulo: "Terapia Sistémica",
    icono: <Heart className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />,
    descripcionCorta: "Enfoque en las relaciones y sistemas familiares y sociales.",
    descripcionLarga:
      "Es un enfoque psicoterapéutico que considera los problemas individuales como parte de un sistema de relaciones, como la familia, pareja o grupo. Se centra en las interacciones y patrones de comunicación, entendiendo que la conducta de una persona influye en la de otros y viceversa. El objetivo es identificar y modificar patrones disfuncionales dentro de estos sistemas para fomentar una comunicación y dinámicas más saludables y un mayor bienestar para todos los miembros.",
    color: "primary",
  },
  {
    id: "vocacional",
    titulo: "Orientación Vocacional",
    icono: <BookOpen className="h-12 w-12 text-accent mx-auto mb-4 group-hover:animate-pulse" />,
    descripcionCorta: "Guía profesional para decisiones académicas y laborales.",
    descripcionLarga:
      "Es un proceso de acompañamiento psicológico y pedagógico que ayuda a las personas a tomar decisiones sobre su proyecto de vida académica y profesional. Implica un conocimiento del mundo laboral y de las opciones de estudio, combinado con un autoconocimiento de intereses, aptitudes y valores personales, con el fin de construir un camino que sea significativo y satisfactorio. Tiene como objetivos principales: Autoconocimiento; Información académica y ocupacional; Toma de decisiones y Desarrollo de un proyecto de vida.",
    color: "accent",
  },
];

export default function ModelosCards() {
  const [open, setOpen] = useState(false);
  const [modeloSeleccionado, setModeloSeleccionado] = useState<Modelo | null>(null);

  const handleOpen = (modelo: Modelo) => {
    setModeloSeleccionado(modelo);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modelos.map((modelo) => (
          <Card
            key={modelo.id}
            className="border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <CardHeader className="text-center">
              {modelo.icono}
              <CardTitle className="font-serif">{modelo.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center mb-4">{modelo.descripcionCorta}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleOpen(modelo)}
                className={`w-full border-${modelo.color} text-${modelo.color} hover:bg-${modelo.color}/10 bg-transparent`}
              >
                Más Info <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          {modeloSeleccionado && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className="text-xl font-serif">
                  {modeloSeleccionado.titulo}
                </DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground mt-4">
                {modeloSeleccionado.descripcionLarga}
              </p>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
