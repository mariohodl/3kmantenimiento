// import Button from '../components/ui/Button';
import HeroBanner from '../components/common/HeroBannerHome';
import Categories from '../components/common/Categories';
import Testimonials from '../components/common/Testimonials';

const Home = () => {
  return (
    <div className=" ">
      <HeroBanner/>
      <div>
        <Categories/>
      </div>
      <div className='bg-white p-10'>
        ett
      </div>
      <div>
        <Testimonials/>
      </div>
      
    </div>
  );
};

export default Home;
