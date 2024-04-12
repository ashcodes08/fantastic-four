import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Ash from '../components/Navbar2';
import'../index.css';
import Footer from '../components/Footer';
export default function Login2() {
  

  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
    //above is a synthetic event
    const response = await fetch("http://localhost:5000/api/loginuser",
      {
        method: 'POST',
        headers:
        {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
        //achha , low here i am using location and not geolocation because hamne backend me ho createuser banaya tha usme location hi tha , geolocation nhi

      })
    const json = await response.json()
    // console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      //saving the email into my local storage
      localStorage.setItem("userEmail",credentials.email)
      //setting the auth token into aur local storage
      localStorage.setItem("authToken",json.authToken)
      if(localStorage.getItem("isAdmin"))
      {
        navigate("/admin")
      }
      else
      {
        navigate("/");
      }
    }
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
    //thus ab we know why we created name of different input field , taaki unke name ke through ham credentials ke corresponding element ko target karke change kar sake whenever we change the input field 
  }



  


  return (
    <div>

<div id="landingpage">
    <div id="bg1">
        <div id="bg2">
            <Ash/>

            <div id="loginctr">
            
        <form onSubmit={handleSubmit}>
          <p style={{"font-size":"4vh","color":"rgb(255, 193, 7)"}}>
          Login</p>
          {/* handleSubmit is a function  */}
          {/* accha agar ab mai mere input fields me onchange attribute nhi du toh kya hoga ?? toh unme ham kuchh type nhi kar paenge . 
            since we already equallled them to credentials.name and etc */}
          <div className="mb-3"id="x">
          <p style={{"font-size":"3vh","color":"#aaaaaa",}}>-Email-</p>
            <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
          </div>
          <div className="mb-3"id="x">
          <p style={{"font-size":"3vh","color":"#aaaaaa",}}>-Password-</p>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
          </div>
          <button type="submit" className=" m-3 btn" style={{"background-color":"rgba(255, 193, 7,0)","font-weight":"bold","border-style":"solid","border-color":"rgb(255, 193, 7)","color":"white","font-size":"3vh"}} onClick={()=>{
           localStorage.setItem("isAdmin","yes"); 
          }}>i am an admin</button>
          <button type="submit" className=" m-3 btn" style={{"background-color":"rgba(255, 193, 7,0)","font-weight":"bold","border-style":"solid","border-color":"rgb(255, 193, 7)","color":"white","font-size":"3vh"}}>Submit</button>
          <button className='m-3 btn' style={{"background-color":"rgba(255, 193, 7,0)","font-weight":"bold","border-style":"solid","border-color":"rgb(255, 193, 7)","color":"white","font-size":"3vh"}}><Link to="/creatuser" >I am a new user(sign up)</Link></button>
        </form>
      </div>
   



     

     </div>
            </div>
        </div>
        <Footer/>
    </div>

      
  )
}
