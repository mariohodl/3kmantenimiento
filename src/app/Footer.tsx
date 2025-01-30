import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import SocialMedia from '../components/common/SocialMedia';
import AppLink from '../components/ui/AppLink';
const Footer = () => {
  return (
    <footer className="bg-white py-14">
      <Container classNames='flex justify-between'>

        <div className='flex'>
          <div className=''>
            LOGO
            <p className='text-lg mb-3'><span className='font-bold'>Dirección:</span> Juan Manuel No.276 <br />
            Colonia Centro C.P. 44100 <br />
             Guadalajara, Jalisco.</p>

             <p className='text-lg mb-3'><span className='font-bold'>Teléfono:</span> (333)390-5151<br />
            </p>
            <p className=''>
              <span className='font-bold'>Correo:</span> ventas@3kmantenimientoprofesional.com.mx
            </p>
          </div>
          <div className=' ml-10'>
            <p className='text-2xl font-bold'>Accesos rapidos</p>
            <div className='flex flex-col mt-4'>
              <AppLink href='/'>
                Inicio
              </AppLink>
              <AppLink href="quienes-somos">
                Quienes somos
              </AppLink>
              <AppLink href="/servicios">
                Servicios
              </AppLink>
              <AppLink href="/productos">
                Productos
              </AppLink>  
              <AppLink href="/contacto">
                Contacto
              </AppLink>
            </div>
          </div>
          <div className='  ml-12'>
            <p className='text-2xl font-bold'>Centro de ayuda</p>
            <div className='flex flex-col mt-4'>
              <a href="#">
                Política de privacidad
              </a>
              <a href="#">
                Terminos y Condiciones
              </a>
              <a href="#">
                Política de remuneración
              </a>

              <a href="#">
                Contacto
              </a>
            </div>
          </div>
        </div>

        
        <div>
          <Input />
          <SocialMedia />
        </div>
        
      </Container>
    </footer>
  );
};

export default Footer;