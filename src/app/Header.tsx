import Container from '../components/ui/Container';
import SocialMedia from '../components/common/SocialMedia';
import AppLink from '@/components/ui/AppLink';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="py-6 bg-white z-10 relative">
        <Container classNames='flex justify-between items-center'>
            <div className="flex items-center">
                <Image src="/3k-horizontal.png" alt="logo" width={210} height={70} />
            </div>
            <div>
                <nav className="flex items-center">
                    <AppLink href="/">
                        Inicio
                    </AppLink>
                    <AppLink href="/quien-somos">
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
                </nav>
            </div>

            <SocialMedia />
        </Container>
  
   </header>
  );
};

export default Header;
