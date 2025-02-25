// import Button from '../components/ui/Button';
import HeroBanner from '../components/common/HeroBannerHome';
import Categories from '../components/common/Categories';
import Testimonials from '../components/common/Testimonials';
import OurWarranties from '../components/common/OurWarranties';
import CTASection from '../components/common/CTASection';
import Container from '../components/ui/Container';
import ContentPrior from '../components/common/ContentPrior';
const Home = () => {
  return (
    <div className=" ">
      <HeroBanner/>
      <div>
        <Categories/>
      </div>
      <div>
        <ContentPrior/>
      </div>
      <div className='bg-white p-4'>
        <Container>
          <OurWarranties/>
        </Container>
      </div>
      <div>
        <Testimonials/>
      </div>
      

      <CTASection />
      
    </div>
  );
};

export default Home;
