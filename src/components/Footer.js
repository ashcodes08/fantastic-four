import React from 'react'
import { Link } from 'react-router-dom'
import'../index.css';
import logo from '../logo.jpeg'
export default function Footer() {
  return (
    <div>
      <div style={{"width":"100%","background-color":"black","height":"200px","color":"white"}} id="footer">
      <div class="container">
  <div class="row">
    <div class="col-sm" id="footercol">
      <img src={logo} style={{"height":"150px"}}></img>
    </div>
    <div class="col-sm" id="footercol">
    <p style={{"font-size":"3vh","color":"white","font-style":"italic",}} id="footertext">
      2023@<p style={{"font-size":"4vh","color":"rgb(255, 193, 7)","font-style":"italic",}}>HogwartsEats</p>
      <p style={{"font-size":"3vh","color":"#cccccc","font-style":"italic",}}>
      Loyalty extends to your well-being too. Come back soon!</p></p>
    </div>
    <div class="col-sm" id="footercol">
    <ul style={{"font-size":"3vh","color":"rgb(255, 193, 7)","font-style":"italic",}}>
      <li class="nav-item"><Link to="/">Home</Link></li>
      <li class="nav-item"><Link to="/home">Menu</Link></li>
      <li class="nav-item"><Link to="/login2">Login</Link></li>
      <li class="nav-item"><Link to="/aboutUs">About Us</Link></li>
    </ul>
    </div>
  
  </div>
</div>
        

</div>

    </div>
  )
}
