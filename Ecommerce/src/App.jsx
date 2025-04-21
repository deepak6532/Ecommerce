import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';

// import MobilePage from './Pages/MobilePage';
// import Login from './Pages/Login';
// import SignUp from './Pages/SignUp';
// import CheckOut from './Components/CheckOut';
// import NoPage from './Components/NoPage';
// import ProductDescription from './Components/ProductDescription';
// import WishList from './Components/WishList';
// import ContactPage from './Pages/ContactPage';
// import FAQPage from './Pages/FAQPage';
// import ReturnsPage from './Pages/ReturnsPage';
// import OrderTrackingPage from './Pages/OrderTrackingPage';
// import PrivacyPolicyPage from './Pages/PrivacyPolicy';
// import TermsAndConditionsPage from './Pages/TermsAndConditionsPage';

import ProductDesc from './Pages/ProductDesc.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path='product' element={<ProductDesc/>}/>
        {/* <Route path="/checkout" element={<CheckOut />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/ordertracking" element={<OrderTrackingPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        <Route path="/terms&Conditions" element={<TermsAndConditionsPage />} /> */}

      </Routes>
    </BrowserRouter>

  );
};

export default App