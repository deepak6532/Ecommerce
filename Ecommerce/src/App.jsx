import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ProductDesc from './Pages/ProductDesc.jsx';
import CheckOut from './Pages/CheckOut';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';

import MobilesPage from './Pages/MobilesPage';

import WishListPage from './Pages/WishListPage';
import LaptopPage from './Pages/LaptopPage';
import TvPage from './Pages/TvPage';
import OrderTracking from './Pages/OrderTracking';
import Contact from './Pages/Contact';
import Returns from './Pages/Returns';
import FAQ from './Pages/FAQ';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndCondition from './Pages/TermsAndCondition';

// import NoPage from './Components/NoPage';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path='product' element={<ProductDesc/>}/>
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/mobile" element={<MobilesPage />} />
        <Route path="/wishlist" element={<WishListPage />} />

        <Route path="/laptop" element={<LaptopPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/ordertracking" element={<OrderTracking />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/returns" element={<Returns />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} /> 

       

      </Routes>
    </BrowserRouter>

  );
};

export default App