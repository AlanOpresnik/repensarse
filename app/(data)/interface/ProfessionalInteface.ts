export interface Profesional {
  cordinadora: boolean;
  nombre: string;
  imagen: string;
  universidad: string;
  especialidades: string[];
  curriculum?: string; // opcional, porque no todos la tienen
}