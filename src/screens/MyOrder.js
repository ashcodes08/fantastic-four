import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Ash from '../components/Navbar2';
export default function MyOrder() {

  const [data, setData] = useState([]);

    function getData(){
        axios.get('https://65f6e36dfec2708927c9e7ab.mockapi.io/crud-youtube')
        //return a promise
        .then((res)=>{
            console.log(res.data);
            setData(res.data) //ab jo empty array tha uske andar aa chuka hai 
        })
    }


function handleDelete(id){
    axios.delete(`https://65f6e36dfec2708927c9e7ab.mockapi.io/crud-youtube/${id}`)
    .then(()=>{
        getData()
    })
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
    <div>
<div id="landingpage">
 <div id="bg1">
        <div id="bg2">
<Ash/>
<table className='table table-dark fst-italic fw-bold'style={{ "background-color":"rgba(0, 0, 0, 0)", opacity: 1 }}>
  <thead style={{"font-size":"4vh","color":"rgb(255, 193, 7)","font-style":"italic","font-weight":"bold"}}>
    <tr>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>#</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Email Handle</p></th>
      <th scope="col"><p style={{"color":"rgb(255, 193, 7)"}}>Order Status</p></th>
    </tr>
  </thead>
  {
   data.map((eachData)=>{
    if(eachData.eamil===localStorage.getItem("userEmail"))
    {
      return(
            <> 
                
                <tbody>
                    <tr>
                        <th scope="row">{eachData.id}</th>
                        <td>{eachData.eamil}</td>
                        <td>{eachData.status}</td>
                  

                    </tr>
                </tbody>

            </>
        )
    }
        
   })
  
  }
</table>

</div>
</div>
    </div>
    </div>
  )
}
