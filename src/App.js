import React from 'react'

import './App.css';

import Home from './components/home/Home';
import ShortCard from './components/shortCard/ShortCard';
import ShowOffCard from './components/showOffCard/ShowOffCard';
import ProductCard from './components/productCard/ProductCard';
import VitalCareBanner from './components/vitalCareBanner/VitalCareBanner';
import Service from './components/service/Service';
import CatBanner from './components/catBanner/CatBanner';
import RecommendedProduct from './components/recommendedProduct/RecommendedProduct';
import LastBanner from './components/lastBanner/LastBanner';  
import Brands from './components/brands/Brands';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div> 
      <Home />
      <ShortCard />
      <ShowOffCard />
      <ProductCard />
      <VitalCareBanner />
      <Service />
      <CatBanner />
      <RecommendedProduct />
      <LastBanner /> 
      <Brands />
      <Footer />
    </div>
  )
}

export default App