import React from 'react'
import Ash from '../components/Navbar2';
import './LandingPage.css';
import'../index.css';
import Animation from '../components/Animation';
import Footer from '../components/Footer';
export default function LandingPage() {
  return (
    <div id="landingpage">
    <div id="bg1">
        <div id="bg2">
            <Ash/>
            <div id="header"> <p style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic",}} id="pheading">Hey wizards and witches, welcome to  </p>
        <p style={{"font-size":"7vw","color":"white","font-weight":"bolder","font-style":"italic"}} id="heading">Hogwarts eats</p><Animation/></div>
       
        </div>
    </div>
    <div id="lp2">
    </div>
    
    <Footer/>
    </div>
  )
}

