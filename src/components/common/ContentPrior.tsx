import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'


const ContentPrior = () => {
  return (
    <Container>
        <div className='width-full flex justify-between items-center my-10'>
            <div className="h-[350] w-full bg-slate-100 bg-cover from-primary to-secondary rounded-2xl mr-10" style={{backgroundImage: `url(/contentPrior1.jpg)`}}>
              <div className="flex flex-col justify-center w-full h-full">
                <div className='p-7 '>
                  <h3 className="text-3xl font-semibold text-white ">Tu historia, <br /> tus logros hechos</h3>
                  <p className='text-white text-lg font-bold my-4'>Tu historia de éxito, <br /> nosotros te ayudamos a lograrlo</p>

                  <Button
                    classNames="text-primary bg-white"
                  >
                    Comprar ahora
                  </Button>
                </div>
              </div>
            </div>

            <div className="h-[350] w-full bg-slate-100 bg-cover rounded-2xl" style={{backgroundImage: `url(/contentPrior2.jpg)`}}>
              <div className="flex flex-col justify-center w-full h-full">
                <div className='p-7 '>
                  <h3 className="text-3xl font-semibold text-white ">Tu historia, <br /> tus logros hechos</h3>
                  <p className='text-white text-lg font-bold my-4'>Tu historia de éxito, <br /> nosotros te ayudamos a lograrlo</p>

                  <Button
                    classNames="text-primary bg-white"
                  >
                    Comprar ahora
                  </Button>
                </div>
              </div> 
            </div>
        </div>
    </Container>
    
  )
}

export default ContentPrior