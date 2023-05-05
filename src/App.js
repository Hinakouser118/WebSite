import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Webdevelopment from "./Component/Webdevelopment";
import Packages from './Component/Packages';
import Digitalmarketing from './Component/Digitalmarketing';
// import Home from './Component/Home';
import Ourprotofilo from './Component/Ourprotofilo';
import Service from './Component/Service';
// import Webdesign from './Component/Webdesign';
import Footer from './Component/Footer';
function App() {
  return (
     <Router>
      {/* <Home/> */}
     <Navbar/>
     <Webdevelopment/>
     <Service/>
    <Routes>
    {/* <Route path="/Webdesign" element={<Webdesign/>}/> */}
    <Route path="/Digitalmarketing" element={<Digitalmarketing />}/>
    <Route path="/Portfolio" element={<Ourprotofilo/>}/>
    <Route path="/Pakages" element={<Packages/>}/>
   </Routes>
   <Footer/>
</Router>
    
  );
}

export default App;
