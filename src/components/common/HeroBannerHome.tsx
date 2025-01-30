import Button from '../ui/Button';
import FeatureItem from "./FeatureItem";
import { Wrench, Clock, Shield } from "lucide-react"
import Container from '../ui/Container';

export default function HeroBanner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden margin-top-minus-100">
      {/* Imagen de fondo */}
      {/* <Image
        src="/images/classy-footer-bg.png"
        alt="Fondo de mantenimiento profesional"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        priority
      /> */}
      

      <Container classNames='flex justify-between'>
        {/* Contenido del hero */}
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-primary">
              Mantenimiento <span className='app-color-red'>Profesional</span> de Excelencia
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-primary font-bold">
              Soluciones integrales para mantener su negocio funcionando sin interrupciones. <br />
              Posiciona tu negocio como lider con nuestros servicios.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button classNames="bg-secondary  text-white"
              >
                Solicitar Cotización
              </Button>
              <Button
                variant="outline"
                classNames="text-primary border-primary"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <FeatureItem
              icon={Wrench}
              title="Ventas de equipos"
              description="Mobiliario, Cómputo, Básculas, Vitrinas, Cajeros, Sierras, etc."
            />
            <FeatureItem
              icon={Clock}
              title="Sistemas a la medida"
              description="Puntos de venta, Páginas web, Circuitos cerrados, etc."
            />
            <FeatureItem
              icon={Shield}
              title="Servicios de mantenimiento"
              description="Servicios de mantenimiento preventivo y correctivos"
            />
           
           
          </div>
        </div>
      </div>
      </Container>
      
    </div>
  )
}

