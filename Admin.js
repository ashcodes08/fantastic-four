import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Ash from '../components/Navbar2';
import Footer from '../components/Footer';

export default function Admin() {


    const [data, setData] = useState([]);

    


function handleDelete(id){
    axios.delete(`https://65f6e36dfec2708927c9e7ab.mockapi.io/crud-youtube/${id}`)
    .then(()=>{
        getData()
    })
}

function getData(){
        axios.get('https://65f6e36dfec2708927c9e7ab.mockapi.io/crud-youtube')
        //return a promise
        .then((res)=>{
            console.log(res.data);
            setData(res.data) //ab jo empty array tha uske andar aa chuka hai 
        })
    }
const toggleDiv = (divId) => {
    const element = document.getElementById(divId);
    if (element) {
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    } else {
      console.warn(`Element with ID "${divId}" not found.`);
    }
}

const settolocalstorage =(id,eamil,status)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("eamil",eamil);
    localStorage.setItem("status",status);
}

    //use effect gets called every time 
useEffect(() => {
 
getData();
}, []);



  return (
    <div id="landingpage">
 <div id="menucontainer">
      <div  id="menu">
<Ash/>
<table className='table table-dark fst-italic fw-bold'style={{ "background-color":"rgba(0, 0, 0, 0)", opacity: 1 }}>
  <thead style={{"font-size":"4vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>
    <tr>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>#</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Email Handle</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Order Status</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Handle</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Handle</p></th>
    </tr>
  </thead>
  {
   data.map((eachData)=>{
        return(
            <> 
                
                <tbody>
                    <tr>
                        <th scope="row">{eachData.id}</th>
                        <td>{eachData.eamil}</td>
                        <td>{eachData.status}</td>
                        <td><Link to="/update"><button onClick={()=>settolocalstorage(eachData.id,eachData.eamil,eachData.status)}>Update Order Status</button></Link></td>
                        {/* <td><button onClick={() => handleDelete(eachData.id)}>delete</button></td> */}
                        <td><button onClick={() => toggleDiv(eachData.id)}> Details</button></td>
                    </tr>
                </tbody>
<div style={{"margin":"auto","display":"none"}} id={eachData.id}>
    <tr>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>#</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Item name</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Quantity</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Option</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Price</p></th>

    </tr>

                {eachData.items.map((food, index) => (
                    <tbody>
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
               </tr>
             </tbody>  
             
                ))}
        </div>

            </>
        )
   })
  
  }
</table>
</div>

</div>

    </div>
  )
}
