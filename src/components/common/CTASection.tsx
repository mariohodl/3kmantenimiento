import React from 'react'
import Button from '../ui/Button'
import Container from '../ui/Container'
const CTASection = () => {
  return (
    <Container>
        <div className="py-24  mx-auto px-6">
          <div className="bg-blue-50 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full">
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            <div className="relative max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Listo para transformar tu negocio?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Hablemos de cómo nuestros productos y servicios pueden ayudarte para alcanzar tus objetivos de negocios. <br />
                Agenda una consulta con nuestros expertos hoy.
              </p>
              <Button classNames="text-white bg-secondary" showArrowRight>
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
        </Container>
  )
}

export default CTASection