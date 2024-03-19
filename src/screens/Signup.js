import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Ash from '../components/Navbar2';
import Footer from '../components/Footer';

export default function Signup() {
  let navigate=useNavigate();
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}))
        //above is a synthetic event
        const response =await fetch("http://localhost:5000/api/creatuser",
        {
            method:'POST',
            headers:
            {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
            //achha , low here i am using location and not geolocation because hamne backend me ho createuser banaya tha usme location hi tha , geolocation nhi

        })
    const json = await response.json()
    console.log(json);
    if(!json.success)
    {
        alert("Enter Valid Credentials");
    }
    else
    {
      localStorage.setItem("authToken",json.authToken)
      localStorage.setItem("userEmail",credentials.email)
      // console.log(localStorage.getItem("isAdmin"))
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

    const onChange=(event)=>
    {
        setcredentials({...credentials,[event.target.name]:event.target.value})
        //thus ab we know why we created name of different input field , taaki unke name ke through ham credentials ke corresponding element ko target karke change kar sake whenever we change the input field 
    }
  return (
    <>
        <div id="landingpage">
    <div id="bg1">
        <div id="bg2">
            <Ash/>

            <div id="loginctr">
        <form onSubmit={handleSubmit}>
        <p style={{"font-size":"4vh","color":"rgb(255, 193, 7)","font-style":"italic",}} id="paymentspageheading">SignUp</p>
            {/* handleSubmit is a function  */}
            {/* accha agar ab mai mere input fields me onchange attribute nhi du toh kya hoga ?? toh unme ham kuchh type nhi kar paenge . 
            since we already equallled them to credentials.name and etc */}
  <div className="mb-3" id="x">
  <p style={{"font-size":"3vh","color":"#aaaaaa","font-style":"italic",}} id="paymentspageheading">-Name-</p>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>          
  <div className="mb-3"id="x">
  <p style={{"font-size":"3vh","color":"#aaaaaa","font-style":"italic",}} id="paymentspageheading">-Email-</p>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} pattern=".*@mnnit.ac\.in.*"/>
  </div>
  <div className="mb-3"id="x">
  <p style={{"font-size":"3vh","color":"#aaaaaa","font-style":"italic",}} id="paymentspageheading">-Password-</p>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3"id="x">
  <p style={{"font-size":"3vh","color":"#aaaaaa","font-style":"italic",}} id="paymentspageheading">-Adress-</p>
    <input type="text" className="form-control" id="exampleInputPassword1" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  <button type="submit" className=" m-3 btn" style={{"background-color":"rgba(255, 193, 7,0)","font-style":"italic","font-weight":"bold","border-style":"solid","border-color":"rgb(255, 193, 7)","color":"white","font-size":"3vh"}} onClick={()=>{
           localStorage.setItem("isAdmin","yes"); 
          }}>i am an admin</button>
  <button type="submit" className=" m-3 btn" style={{"background-color":"rgba(255, 193, 7,0)","font-style":"italic","font-weight":"bold","border-style":"solid","border-color":"rgb(255, 193, 7)","color":"white","font-size":"3vh"}}>Submit</button>
  <button className='m-3 btn' style={{"background-color":"rgba(255, 193, 7,0)","font-style":"italic","font-weight":"bold","border-style":"solid","border-color":"rgb(255, 193, 7)","color":"white","font-size":"3vh"}}><Link to="/login2">Already a User? login instead.</Link></button>
</form>
</div>
</div>
</div>
</div>
<Footer/>
    </>
  )
}
