import React from 'react'
import NavBar from '../Components/NavBar.jsx'
import HeroSection from '../Components/HeroSection.jsx'
import IconCards from '../Components/IconCards.jsx'
import ProductDescription from '../Components/ProductDescription.jsx'
import Card from '../Components/Card.jsx'
import Footer from '../Components/Footer.jsx'
import Banner from '../Components/Banner.jsx'





const HomePage = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <IconCards />
        <div className="mx-auto p-14 font-bold text-2xl">
          <h1>New Products</h1>
          <div className="flex flex-wrap px-24 pt-5 gap-6">
          <Card /> 
          <Card /> 
          <Card /> 
          </div>
        </div>
        <div className="mx-auto p-14 font-bold text-2xl">
          <h1>New Products</h1>
          <div className="flex flex-wrap px-24 pt-5 gap-6">
          <Card /> 
          <Card /> 
          <Card /> 
          </div>
        </div>
        <Banner />
        <div className="mx-auto p-14 font-bold text-2xl">
          <h1>New Products</h1>
          <div className="flex flex-wrap px-24 pt-5 gap-6">
          <Card /> 
          <Card /> 
          <Card /> 
          </div>
        </div>
        <div className="mx-auto p-14 font-bold text-2xl">
          <h1>New Products</h1>
          <div className="flex flex-wrap px-24 pt-5 gap-6">
          <Card /> 
          <Card /> 
          <Card /> 
          </div>
        </div>
        <Banner />
        <IconCards />

        <Footer />  
        {/* <ProductDescription /> */}

    </div>
  )
}

export default HomePage