import Image from "next/image";

export default function PsychologyDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto my-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-gray-400 ">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content Section */}
          <div className="flex-1 text-white p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              ¿Por qué Re-Pensarse?
            </h2>
            <p className="text-lg mb-6 text-blue-50 leading-relaxed">
              Porque significa reflexionar y plantearte el mismo tema
              detenidamente, desde una perspectiva diferente, visualizando otros
              escenarios posibles. Además, Re-Pensar, es distinto de pensar
              demasiado, y eso es posible junto a un profesional que te guíe, te
              acompañe y contenga lo suficiente, para que puedas lograrlo!
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-blue-50">
                  Mayor autoconciencia emocional
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-blue-50">
                  Mejores relaciones interpersonales
                </span>
              </li>

            </ul>

            {/* CTA Button */}
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 shadow-lg">
              Comenzar mi proceso
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 ">
            <div className="relative">
              <Image
                src="https://www.anahuac.mx/mexico/EscuelasyFacultades/psicologia/sites/default/files/noticias/PSI_Articulo_Dia_Psicologo_ok.jpg"
                alt="Ilustración de psicología y mente humana"
                width={420}
                height={400}
                className="rounded-lg shadow-2xl w-full h-[500px]"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      </div>
    </div>
  );
}
