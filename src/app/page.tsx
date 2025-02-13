// import Button from '../components/ui/Button';
import HeroBanner from '../components/common/HeroBannerHome';
import Categories from '../components/common/Categories';
import Testimonials from '../components/common/Testimonials';
import OurWarranties from '../components/common/OurWarranties';
import Container from '../components/ui/Container';
const Home = () => {
  return (
    <div className=" ">
      <HeroBanner/>
      <div>
        <Categories/>
      </div>
      <div className='bg-white p-4'>
        <Container>
          <OurWarranties/>
        </Container>
      </div>
      <div>
        <Testimonials/>
      </div>
      
    </div>
  );
};

export default Home;
