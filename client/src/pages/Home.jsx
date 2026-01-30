import React from 'react'
import Hero from '../components/Hero.jsx'
import { js } from '@eslint/js';
import CarCard from '../components/CarCard.jsx';
import FeaturedSection from '../components/FeaturedSection.jsx';
import Banner from '../components/Banner.jsx';
import Testimonial from '../components/Testimonial.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
        <Hero/>
        <FeaturedSection />
        <Banner /> 
        <Testimonial/>
        
    </>
  )
}

export default Home