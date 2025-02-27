import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import SocialMedia from '../../components/common/SocialMedia';
import Container from '../../components/ui/Container';
import Testimonials from '../../components/common/Testimonials';
import ContactForm from "./ContactForm";
import Image from "next/image";
const Contacto = () => {

    return (
      <div className=" min-h-screen ">
        <div className='w-full flex justify-center'>
          <div className='py-12  text-center width-5/6 '>
            <h3 className="text-4xl font-medium mb-2">Conécta con nosotros</h3>
            <p className="text-2xl">Sigue actualizado y recibe nuestras últimas noticias cargadas <br /> de promociones para tu empresa.</p>
          </div>
        </div>
        <section className="bg-white ">
          <Container>
            <div className="flex justify-between">
              <article className=" w1/2 ">
                <div className='bg-white'>
                    <div className="mt-10 py-10">
                      <div className="w-full ">
                        <h2 className="text-3xl font-medium mb-7">Información de Contacto</h2>
                      </div>
                      <div>
                        <div className="w-full">
                          <div>
                          <p className='text-xl mb-7 flex items-center'>
                            <span className="mr-2">
                              <SlLocationPin />
                            </span>
                              <span className='font-semibold'>Dirección: </span>
                              
                              <span className=' ml-1'>
                                <a href="tel:+5622222222">Juan Manuel #276
        Col. Centro, Guadalajara, Jal.</a>
                              </span>
                            </p>
                            <p className='text-xl mb-7 flex items-center'>
                              <span className="mr-2">
                                <IoMailOutline />
                              </span>
                              <span className='font-semibold'>Correo: </span>
                              
                              <span className=' ml-1'>
                                <a href="mailto:ventas@3kmantenimientoprofesional.com.mx">ventas@3kmantenimientoprofesional.com.mx</a>
                              </span>
                            </p>
                            <p className='text-xl mb-7 flex items-center'>
                              <span className="mr-2">
                                <BsTelephone />
                              </span>
                              <span className='font-semibold'>Teléfono: </span>
                              
                              <span className=' ml-1' >
                                <a href="tel:+5622222222">(333) 390 - 5151</a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <SocialMedia />
                      <br />
                      <br />
                      <br />
                      <div className="w-full ">
                        <h2 className="text-3xl font-medium mb-7">Mándanos un mensaje</h2>
                      </div>

                      <div>
                        {/* form */}
                        <ContactForm />
                      </div>
                    </div>
                </div>
              </article>
              <article className=" w-1/2 flex items-center justify-center">
                <div>
                poner aqui google maps
                <Image src="/mapa.jpg" alt="logo" width={500} height={700} />

                </div>
              </article>
            </div>
            
          </Container>
          <Testimonials />
        <br />
        <br />
        </section>
      </div>
    );
  };
  
  export default Contacto;