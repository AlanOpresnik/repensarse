"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Users,
  Clock,
  MessageCircle,
  BookOpen,
  Mail,
  MapPin,
  Shield,
  Award,
  Calendar,
  Globe,
  MessageCircleHeart,
  InstagramIcon,
  HeartPulse,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { profesionalData } from "./(data)/profesionalData";
import ProfesionalCard from "./(root)/Components/ProfesionalCard";
import PsychologyDivider from "./(root)/Components/whyUS/WhyUs";
import WhatsAppButton from "@/components/ui/WatshappButonn/WhatsApp";
import ModelosCards from "./(root)/Components/TerapicModels/TerapicModels";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coordinadoras = profesionalData.filter((p) => p.cordinadora);
  const noCoordinadoras = profesionalData.filter((p) => !p.cordinadora);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in">
              <Image
                src={"/Logo.png"}
                width={160}
                height={160}
                alt="Logo re pensarse"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#servicios"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105"
              >
                Servicios
              </a>
              <a
                href="#profesionales"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105"
              >
                Profesionales
              </a>
              <a
                href="#contacto"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105"
              >
                Contacto
              </a>
            </nav>
            <a
              href="https://wa.me/541172497547" // <-- cambia por tu número con código de país
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Calendar className="mr-2 h-4 w-4" />
                Primera Entrevista
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={`py-16 px-4 bg-gradient-to-br from-accent/5 to-primary/5 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-6 animate-fade-in-up">
                Red de Psicólogos Online
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                Psicoterapia online para personas de habla hispana en cualquier
                lugar del mundo. Acompañamos procesos desde los modelos
                Psicoanalítico, Psicología Integrativa, Terapia Sistémica,
                Orientación Vocacional y Ocupacional, y Proyectos de Vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                <a
                  href="https://wa.me/541172497547" // <-- cambia por tu número con código de país
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contactar por WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-600 py-24">
              <div className="relative rounded-2xl overflow-hidden ">
                <Image
                  src="https://res.cloudinary.com/dc8aa3b1b/image/upload/v1758563880/vista-lateral-joven-hablando-con-terapeuta_lc2zkh.webp"
                  alt="Psicóloga profesional en sesión online"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-[-60px] -left-6 bg-card rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-accent" />
                  <div>
                    <div className="font-semibold text-sm">
                      100% Confidencial
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Sesiones seguras
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}

          {/* Jung Quote */}
          <div className="mt-16 flex flex-col  w-full p-6 bg-card rounded-lg border border-border transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <blockquote className="text-lg italic text-muted-foreground font-medium">
              &quot;Conoce todas las teorías, domina todas las técnicas, pero al
              tocar un alma humana, sé apenas otra alma humana&quot;
            </blockquote>
            <cite className="text-accent flex items-end justify-end font-semibold mt-2  w-full">
              — Carl Jung
            </cite>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dc8aa3b1b/image/upload/v1758563139/WhatsApp_Image_2025-09-20_at_11.06.03_AM_j42c8g.jpg"
                alt="Personas en terapia grupal"
                className="rounded-2xl shadow-xl w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl"></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold font-serif mb-6 text-foreground">
                Red de Psicólogos para personas de habla hispana, en cualquier
                lugar del mundo
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Cada persona es única, y por eso nuestro enfoque es
                personalizado. Creemos en la importancia del trabajo profesional
                y especializado, en la contención al sujeto que comienza el
                camino de un proceso psicoterapéutico.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Empatía</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircleHeart className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Cercania</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Confianza</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 container mx-auto max-w-6xl">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold font-serif text-center mb-12 text-foreground">
            ¿Por qué elegir Re-Pensarse?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif">
                  Confidencialidad Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Garantizamos la máxima privacidad y seguridad en todas
                  nuestras sesiones online.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="h-16 w-16 text-accent mx-auto mb-4" />
                <CardTitle className="font-serif">
                  Profesionales Certificados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Nuestra Red está integrada por Psicólogos matriculados y con
                  vasta experiencia clínica
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif">Acceso Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Atendemos a pacientes y consultantes de habla hispana en
                  cualquier lugar del mundo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="py-20 px-4 container mx-auto max-w-6xl"
      >
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold font-serif text-center mb-12 text-foreground">
            Nuestros Enfoques Terapéuticos
          </h3>
          <div className="">
            <ModelosCards />
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section id="profesionales" className="py-20 px-4 bg-muted/30 ">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold font-serif text-center mb-12 text-foreground">
            Nuestros Profesionales
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {coordinadoras.map((prof) => (
              <ProfesionalCard key={prof.nombre} prof={prof} />
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-8 !mt-12">
            {noCoordinadoras.map((prof) => (
              <ProfesionalCard key={prof.nombre} prof={prof} />
            ))}
          </div>
        </div>
      </section>

      {/* Vocational Orientation Section */}
      <section id="orientacion" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold font-serif text-center mb-12 text-foreground">
            Orientación Vocacional y Ocupacional
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif">Test Vocacionales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  Evaluaciones especializadas para descubrir tus aptitudes e
                  intereses profesionales.
                </p>
                <a
                  className="mb-3"
                  target="_blank"
                  href="https://wa.me/541172497547"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Solicitar Test
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-accent mx-auto mb-4" />
                <CardTitle className="font-serif">
                  Talleres de Orientación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  Encuentros grupales e individuales para explorar opciones
                  académicas y profesionales
                </p>
                <Button
                  disabled
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  En preparación
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="formacion" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold font-serif text-center mb-12 text-foreground">
            Formación Profesional{" "}
            <span className="opacity-50">{`(En Preparación)`}</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-serif text-accent">
                  Para Docentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Capacitación especializada en diferentes ramas de la
                  Psicología y la Salud Mental, como Psicología Educativa,
                  Psicología Evolutiva, Manejo de Grupos, y temas emergentes.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-serif text-accent">
                  Para Psicólogos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Formación continua en diferentes técnicas y enfoques
                  terapéuticos.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-serif text-accent">
                  Acompañantes Terapéuticos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Capacitación para Asistentes Personales y Acompañantes
                  Terapéuticos.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/*Why US */}
      <section>
        <PsychologyDivider />
      </section>
      {/*
      Testimonials Section
      <section id="testimonios" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold font-serif text-center mb-12 text-foreground">
            Lo Que Dicen Nuestros Pacientes
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="border-border p-8 text-center">
                <CardContent>
                  <div className="flex justify-center mb-6">
                    <img
                      src={
                        testimonials[activeTestimonial].image ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-accent/20"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    &quot;{testimonials[activeTestimonial].text}&quot;
                  </blockquote>
                  <cite className="text-accent font-semibold">
                    — {testimonials[activeTestimonial].name}
                  </cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

              {/* Navigation buttons *
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card border border-border rounded-full p-2 hover:bg-accent/10 transition-colors"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-5 w-5 text-accent" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card border border-border rounded-full p-2 hover:bg-accent/10 transition-colors"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-5 w-5 text-accent" />
              </button>
            </div>

            {/* Dots indicator *
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-accent"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
*/}
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold font-serif mb-6 text-foreground">
            ¿Listo para Comenzar tu Proceso Psicoterapéutico?
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            No esperes más. Tu bienestar y salud integral es nuestra prioridad.
            Comienza hoy mismo.
          </p>
          <a href=" https://repensarseonline.medicloud.com.ar" target="_blank">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Consulta por MediCloud
              </Button>
            </div>
          </a>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold font-serif text-center mb-12 text-foreground">
            Contacto
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dbgt948uj/image/upload/v1758754594/mujer-haciendo-una-llamada-de-video-en-casa-en-una-computadora-portatil-con-auriculares_srybvo.webp"
                  alt="Contacto profesional"
                  width={400}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">¿Necesitas ayuda?</h4>
                  <p className="text-sm opacity-90">Estamos aquí para ti</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <Card className="border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="font-serif text-accent">
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">
                      WhatsApp disponible
                    </span>
                  </div>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/re.pensarse/"
                    className="flex items-center space-x-3"
                  >
                    <InstagramIcon className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground hover:border-b">
                      @re.pensarse
                    </span>
                  </a>
                  <div className="flex items-center space-x-3">
                    <HeartPulse className="h-8 w-8 text-accent" />
                    <a
                      target="_blank"
                      href=" https://repensarseonline.medicloud.com.ar"
                      className="text-muted-foreground hover:border-b"
                    >
                      Agenda primer entrevista relacional con MEDICLOUD
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <a
                      href="mailto:repensarse.online@gmail.com"
                      className="text-muted-foreground hover:underline"
                    >
                      repensarse.online@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">
                      Horarios flexibles según zona horaria
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">
                      Servicios online para personas de habla Hispana
                    </span>
                  </div>
                  <a
                    target="_blank"
                    href="https://wa.me/541172497547"
                    className="pt-4 space-y-3 cursor-pointer"
                  >
                    <Button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Directo
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="font-serif text-accent">
                    Primera Entrevista
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Agenda tu primera consulta para conocer nuestros servicios y
                    encontrar el profesional adecuado para ti.
                  </p>
                  <div className="space-y-3 flex flex-col gap-2">
                    <a
                      className="mb-3"
                      target="_blank"
                      href="https://wa.me/541172497547"
                    >
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-300">
                        <Calendar className="mr-2 h-4 w-4" />
                        Agendar Primera Entrevista
                      </Button>
                    </a>
                    <a href="mailto:repensarse.online@gmail.com">
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent transform hover:scale-105 transition-all duration-300"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Enviar Consulta por Email
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-accent animate-pulse" />
            <h4 className="text-xl font-bold font-serif text-foreground">
              RE-PENSARSE
            </h4>
          </div>
          <p className="text-muted-foreground mb-4">
            Psicología online profesional, empática y personalizada
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground mb-6">
            <span>•</span>
            <span>repensarseonline.com</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://forms.gle/sJm9GuZMWnbcxf7q6"
              className="hover:bg-accent/10 transform hover:scale-105 transition-all duration-300"
            >
              Querés pertenecer a nuestra Red?
            </a>
          </div>
        </div>
        <WhatsAppButton />
      </footer>
    </div>
  );
}
