import { Profesional } from "@/app/(data)/interface/ProfessionalInteface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface Props {
  prof: Profesional;
}

export default function ProfesionalCard({ prof }: Props) {
  return (
    <Card className="border-border relative hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 relative">
          <Image
            width={100}
            height={100}
            src={prof.imagen}
            alt="Lic. Silvina Vázquez"
            className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-accent/20"
          />
        </div>
        <p className={` ${prof.cordinadora ? 'bg-indigo-700 text-white p-2 rounded-full text-sm absolute right-0 top-[-10px]' : 'hidden'} `}>{prof.cordinadora ? 'Coordinadora de Re-Pensarse' : ''}</p>
        <CardTitle className="font-serif text-accent">{prof.nombre}</CardTitle>
        <CardDescription>{prof.universidad}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 flex justify-center items-center flex-col">
        {prof.especialidades.map((especialidad) => (
          <div key={especialidad} className="bg-primary/10 text-primary w-fit text-sm text-center rounded-full p-2">
            {especialidad}
          </div>
        ))}

   
      </CardContent>
      <CardFooter className="flex justify-center">
        <a
          target="_blank"
          className="bg-[#7174f1] p-2 rounded-full text-white"
          href={prof.curriculum}
        >
          Ver Curriculum Vitae
        </a>
      </CardFooter>
    </Card>
  );
}
