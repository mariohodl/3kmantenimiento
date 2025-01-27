import Container from '../components/ui/Container';
import { SlSocialYoutube, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";


const Header = () => {
  return (
    <header className="py-6 px-8 bg-white">
        <Container classNames='flex justify-between items-center'>
            <div className="flex items-center">
                <h1 className="text-2xl font-bold ml-4">3k Logo</h1>
            </div>
            <div>
                <nav className="flex items-center">
                <a href="#" className="text-slate-700 hover:text-red-700 hover:underline mr-7  text-xl font-medium">
                    Inicio
                </a>
                <a href="#" className="text-slate-700 hover:text-red-700 hover:underline mr-7  text-xl font-medium">
                    Quienes somos
                </a>
                <a href="#" className="text-slate-700 hover:text-red-700 hover:underline mr-7  text-xl font-medium">
                    Servicios
                </a>
                <a href="#" className="text-slate-700 hover:text-red-700 hover:underline mr-7  text-xl font-medium">
                    Productos
                </a>
                <a href="#" className="text-red-700 hover:text-red-700 hover:underline mr-7 text-xl font-medium">
                    Contacto
                </a>
                </nav>
            </div>

            <div className='flex items-center'>
                <span className='mr-3 text-2xl text-slate-700 hover:text-red-700 hover:cursor-pointer'><SlSocialFacebook /></span>
                <span className='mr-3 text-2xl text-slate-700 hover:text-red-700 hover:cursor-pointer'><SlSocialYoutube /></span>
                <span className=' text-2xl text-slate-700 hover:text-red-700 hover:cursor-pointer'><SlSocialInstagram /></span>
            </div>
        </Container>
  
   </header>
  );
};

export default Header;
