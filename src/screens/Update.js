import axios from 'axios';
import'../index.css';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Ash from '../components/Navbar2';
export default function Update() {
    const navigate=useNavigate();
    const [id, setId] = useState(0);
    const [eamil, setEamil] = useState("");
    const [os,setOs] = useState("");
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setEamil(localStorage.getItem("eamil"));
        setOs(localStorage.getItem("status"));
      }, []);

const handleUpdate = (e)=>{
    e.preventDefault();
    axios.put(`https://65f6e36dfec2708927c9e7ab.mockapi.io/crud-youtube/${id}`,{
        
    status:os,
    }).then(()=>{
        navigate("/admin")
    })
}

  return (
    <div>
<div id="landingpage">
    <div id="bg1">
        <div id="bg2">
            <Ash/>
            <div id="loginctr">
<form>
<p style={{"font-size":"4vh","color":"rgb(255, 193, 7)","font-style":"italic",}} id="paymentspageheading">Update Order Status</p>
        <div className="mb-3">
        <p style={{"font-size":"3vh","color":"#aaaaaa","font-style":"italic",}} id="paymentspageheading">-Email-</p>
          <input
            type="text"
            className="form-control" value={eamil}
          />
        </div>
        <div className="mb-3">
        <p style={{"font-size":"3vh","color":"#aaaaaa","font-style":"italic",}} id="paymentspageheading">-Order Status-</p>
          <input
            type="text" value={os}
            className="form-control"
            onChange={(e) => setOs(e.target.value)}
          />
        </div>
        <button type="submit" className=" m-3 btn" style={{"background-color":"rgba(255, 193, 7,0)","font-style":"italic","font-weight":"bold","border-style":"solid","border-color":"rgb(255, 193, 7)","color":"white","font-size":"3vh"}} onClick={handleUpdate}>Update Order Status</button>
      </form>
      </div>
</div>
</div>
</div>
    </div>
  )
}
