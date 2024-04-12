import React from 'react'
import Ash from '../components/Navbar2';
import './LandingPage.css';
import'../index.css';
import Animation from '../components/Animation';
import Footer from '../components/Footer';
export default function LandingPage() {
  return (
    <div><div id="landingpage">
    <div id="bg1">
        <div id="bg2">
            <Ash/>
            <div id="header">
        <p style={{"font-size":"7vw","color":"white"}} id="heading">Verve Lifestyle</p><p style={{"font-size":"2vw","color":"rgb(255, 255, 153)","font-style":"italic"}} id="heading">Exquisite Lifestyle Products , that make you live 'the verve-life'</p></div>
       
        </div>
    </div>
    <div id="lp2">
      
    </div>
    </div>
    <Footer/>
    </div>
  )
}

