import React from 'react'
import Ash from '../components/Navbar2'
import axios from "axios";
import { useState } from "react";
import { useCart, useDispatchCart } from '../components/ContextReducer';
import {useNavigate} from 'react-router-dom'
import'../index.css';
import img1 from './griffindoor.png'
import img2 from './hufflepuff.png'
import img3 from './ravenclaw.png'
import img4 from './slytherin.png'
import Footer from '../components/Footer';
export default function AboutUs() {


  return (
    <div id="menucontainer" style={{"overflow":"hidden"}}>



        <div id="bg2">
        <Ash/>
        <br></br>
        <p style={{"font-size":"6vh","color":"rgb(255, 193, 7)","font-style":"italic",}} id="paymentspageheading">
        About Us.
        </p>
        <p style={{"font-size":"3vh","color":"#aaaaaa","font-style":"italic",}} id="paymentspageheading">
        Welcome to the Great Hall! We're serving up magical meals fit for a Hogwarts feast.Our Mission: No Student Goes Hungry! We provide nourishing potions (er, drinks) and delicious treats to fuel your magical studies.From Sorting Hat to Sated Stomach: Your One-Stop Shop for Magical Meals
        </p>
        <div class="container">
  <div class="row align-items-start">
    <div class="col-sm " id="paymentspagecols" style={{"box-shadow": "0 4px 8px 0 white, 0 6px 20px 0 white","min-height":"400px"}}>
      <div id="c1">
        <img src={img1} style={{"width":"15vh"}}></img>
      <p style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>Gryffindor</p>
    <p style={{"font-size":"4vh","color":"rgb(217, 217, 217)","font-style":"italic","font-weight":"bold"}}>Ashutosh Soni</p>
    <p style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>20233090</p>
    </div></div>
    <div class="col-sm " id="paymentspagecols"style={{"box-shadow": "0 4px 8px 0 white, 0 6px 20px 0 white","min-height":"400px"}}>
    <div className="App">
			<div className="book_container">
            <img src={img2} style={{"width":"15vh"}}></img>
            <p style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>Hufflepuff</p>
      <p style={{"font-size":"4vh","color":"rgb(217, 217, 217)","font-style":"italic","font-weight":"bold"}}>Harsh Singhal</p>
      <p style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>20234068</p>
			</div>
		</div>
    </div>
    <div class="col-sm " id="paymentspagecols"style={{"box-shadow": "0 4px 8px 0 white, 0 6px 20px 0 white","min-height":"400px"}}>
      <div>
      <img src={img3} style={{"width":"15vh"}}></img>
      <p style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>Slytherin</p>
    <p style={{"font-size":"4vh","color":"rgb(217, 217, 217)","font-style":"italic","font-weight":"bold"}}>Dhruv Goyal</p>
    <p style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>20234060</p>
        </div>
    </div>
    <div class="col-sm " id="paymentspagecols"style={{"box-shadow": "0 4px 8px 0 white, 0 6px 20px 0 white","min-height":"400px"}}>
      <div>
      <img src={img4} style={{"width":"15vh"}}></img>
      <p style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>Ravenclaw</p>
    <p style={{"font-size":"4vh","color":"rgb(217, 217, 217)","font-style":"italic","font-weight":"bold"}}>Divyam Pancholi</p>
    <p style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>20234061</p>
        </div>
    </div>
  </div>
        </div>
<br/>
<Footer/>
</div>
    </div>



  )
}
