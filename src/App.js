import './App.css';
import Home from './screens/Home';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login2 from './screens/Login2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
import LandingPage from './screens/LandingPage.js';
import Payment from './screens/Payment.js';
import Admin from './screens/Admin.js';
import Update from './screens/Update.js';
import AboutUs from './screens/AboutUs.js';
function App() {
  return (
   //return statement ke andar only single div can be present
    //so we need to cover this in a parent div or empty tag
    //so now we are able to put multiple divs
    //react app ko start karne ke liye terminal me mernapp me jaakar (cd mernapp) waha npm start liho (google helps)
    //this page is only for displaying contents of home.js
     <CartProvider> 
    
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/login2" element={<Login2/>} />
        <Route exact path="/creatuser" element={<Signup/>} />
        <Route exact path="/myOrder" element={<MyOrder/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/payment" element={<Payment/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/update" element={<Update/>} />
        <Route exact path="/aboutUs" element={<AboutUs/>} />
        {/* brackets ke andar uss page ka naam hai jaha par mai jaana chahta hu */}
        {/* jo cheez exact path ke sammne likhoge uska first letter small and it should be same as jo brakcket ke andar lika hai */}
        {/* as far as i can see yaha par linkings horhi hai . this page is acting as a hub . ham jitni bhai routings karenge woh yaha par apne ko router me deni padegi*/}
      </Routes>
    {/* <Home/> */}
    </div>
    </Router>
    </CartProvider>
   
    
  );
}

export default App;
