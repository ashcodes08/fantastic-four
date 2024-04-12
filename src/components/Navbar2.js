import React, { useState } from 'react'
import "./Navbar2.css";
import {Link,useNavigate} from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
import hat from '../hat.png'
import'../index.css';
//iss filename ka jo capital letter rahega that will always be capital
//jo function ka naam hai na (Navbar2f uska first letter also needs to be caps)
//navbar is a component which we can reuse
export default function Ash() {
  let data = useCart()
  const[cartView,setCartView]=useState(false)
  const [isOpen, setIsOpen] = React.useState(false); // State to track navbar visibility

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle navbar state on button click
  };
  const navigate=useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAdmin");
    navigate("/login2")
  }
  return (
    <div>
        {/* this is our parent div */}
      <nav className={`navbar navbar-expand-lg navbar-dark  ${isOpen ? 'show' : ''}`} id="onea">
        <div className="container-fluid" >
        {(!localStorage.getItem("isAdmin"))?
          <Link className="navbar-brand fs-3 fw-bold" to="/" id="oneb">V-Lifestyle</Link>:""}
          <button className="navbar-toggler" type="button"  onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
         
            <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active fs-3 fw-bold" to="/home" id="oneb">Menu</Link>
        </li>
        
        {/* <li className="nav-item dropdown">
          <li className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </li>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li> */}
      
      {((localStorage.getItem("authToken")) && (!localStorage.getItem("isAdmin")))?
      <li className="nav-item">
      <Link className="nav-link active fs-3 fw-bold" to="/myOrder" id="oneb">My-orders</Link>
    </li>
    :""
    }
{((localStorage.getItem("authToken")) && (localStorage.getItem("isAdmin")))?
<div className='d-flex'>
      <li className="nav-item">
      <Link className="nav-link active fs-3 fw-bold" to="/admin" id="oneb">Orders</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link active fs-3 fw-bold" to="/additem" id="oneb">Add Item</Link>
    </li>
    
    </div>
    :""
    }

    </ul>
           {(!localStorage.getItem("authToken"))?
            <div className='d-flex'>
              <Link className="navbar-brand fs-3 fw-bold" aria-current="page" to="/login2" id="oneb">Login</Link>
              {/* abb hoga kya ki jab home pe click karunga toh home pe jaega but jab login par click karunga toh login pe jaega  */}
              <Link className="navbar-brand fs-3 fw-bold" to="/creatuser" id="oneb">Signup</Link>
            </div>
          :
          /*ek parent div hai zaroori*/
          <div> 
            {(!localStorage.getItem("isAdmin"))?<div className='btn bg-white text-success mx-2 fw-bold' onClick={()=>{setCartView(true)}}>
            My-cart {" "} 
            {/* space diya thda sa  */}
            <Badge pill bg="danger">{data.length}</Badge>
            </div>
            : null
            }
            
            {cartView?<Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
          <div className='btn bg-white text-danger mx-2 fw-bold' onClick={handleLogout}>
            Logout
            </div>
            </div>
          }
          
           
           
           
    </div>
  </div>
</nav>
    </div>
  )
}
