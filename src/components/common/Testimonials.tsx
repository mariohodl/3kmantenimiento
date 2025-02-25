import React from 'react';
import { Quote } from 'lucide-react';
import Container from '../ui/Container';
// import Image from 'next/image'
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Trabajar con este equipo ha sido transformador para nuestro negocio. Su atención al detalle y sus soluciones innovadoras nos han ayudado a escalar más allá de nuestras expectativas."
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    // image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "El nivel de profesionalismo, responsabilidad y creatividad que aportan a cada proyecto es sobresaliente. Se han convertido en una parte integral de nuestra historia de éxito."
  },
  {
    name: "Emma Thompson",
    role: "Product Manager",
    // image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Su capacidad para comprender nuestra visión y traducirla en realidad ha sido notable. Los resultados hablan por sí solos. En cuestion de meses, hemos logrado nuestros objetivos."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
      <div className=" px-4">
        <div className=" mb-10">
          <h2 className="text-4xl font-medium mb-2">
            Qué dicen nuestros clientes?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-500/20 absolute -top-4 -left-4" />
                <p className="text-gray-600 italic mb-6 relative z-10 text-lg">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center">
                {/* <Image
                  src={testimonial?.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                /> */}
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;