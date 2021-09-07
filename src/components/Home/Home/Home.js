import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HeroArea from '../HeroArea/HeroArea';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <HeroArea></HeroArea>
      <div className="my-5 py-5">
        <About></About>
      </div>

      <Testimonials></Testimonials>

      <Services></Services>

      <div className="my-5 py-5">
        <Contact></Contact>
      </div>
      <div className="pt-5">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
