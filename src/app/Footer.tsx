import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import SocialMedia from '../components/common/SocialMedia';
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
              <a href="#" className='text-slate-700 hover:text-red-700 hover:underline mb-3 text-xl font-medium'>
                Inicio
              </a>
              <a href="#" className='text-slate-700 hover:text-red-700 hover:underline mb-3 text-xl font-medium'>
                Quienes somos
              </a>
              <a href="#" className='text-slate-700 hover:text-red-700 hover:underline mb-3 text-xl font-medium'>
                Servicios
              </a>
              <a href="#" className='text-slate-700 hover:text-red-700 hover:underline mb-3 text-xl font-medium'>
                Productos y servicios
              </a>  
              <a href="#" className='text-slate-700 hover:text-red-700 hover:underline mb-3 text-xl font-medium'>
                Contacto
              </a>
            </div>
          </div>
          <div className='  ml-12'>
            <p className='text-2xl font-bold'>Centro de ayuda</p>
            <div className='flex flex-col mt-4'>
              <a href="#" className='text-slate-700 hover:text-red-700 hover:underline mb-3 text-xl font-medium'>
                Política de privacidad
              </a>
              <a href="#" className='text-slate-700 hover:text-red-700 hover:underline mb-3 text-xl font-medium'>
                Terminos y Condiciones
              </a>
              <a href="#" className='text-slate-700 hover:text-red-700 hover:underline mb-3 text-xl font-medium'>
                Política de remuneración
              </a>

              <a href="#" className='text-slate-700 hover:text-red-700 hover:underline mb-3 text-xl font-medium'>
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