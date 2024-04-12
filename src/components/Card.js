import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
import'../index.css';
import { Link } from 'react-router-dom';
import axios from "axios"
export default function Card(props) {
let dispatch=useDispatchCart();  
let data=useCart();
  const priceRef=useRef();
  let options=props.options;
  let priceOptions=Object.keys(options);
  const[qty,setQty] = useState(1)
  const[size,setSize] = useState("")





  const handleAddToCart = async () => {
    let food=[]
    for(const item of data)
    {
      if(item.id===props.foodItem._id)
      {
        food = item;
        break;
      }
    }
    if(food!==[])
    {
      if(food.size===size)//agar maine item ki quantity me change lakar add to kart kiya hai , and same item is present in cart with same size then dont add it to cart , just increase the  quantity
      {
        await dispatch({ type:"UPDATE" , id:props.foodItem._id,price:finalPrice,qty:qty})
        return;
      }

    else if(food.size!==size)
    {
       await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    // await console.log(data)
      return;
    }
  }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
  }
  let finalPrice=qty* parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])

  // const deleteUser = async (userId)=>{
  
  //     await axios.delete(`http://localhost:5000/api/deleteproduct/${userId}`)
  //     .then((response)=>{

  //     })
       // Reload the page after successful deletion
  // }

  const toggleDiv = (divId) => {
    const element = document.getElementById(divId);
    if (element) {
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    } else {
      console.warn(`Element with ID "${divId}" not found.`);
    }
}
  return (
    <div>
         <div>
        <div className="card mt-3" style={{"width":"auto","height":"400px","border-radius":"2%"}} id="card" onClick={() => toggleDiv(props.foodItem.name)}>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{"objectFit":"cover","height":"200px"}}/>
            <div className="card-body">
              <h5 className="card-title">{props.foodItem.name}</h5>
              {/* <p className="card-text">This is some important text </p> dont want  this */}
              <div className='container w-100'>
              <select className='m-2 h-100 rounded' style={{"background-color":"#ffdd99","color":"brown"}} onChange={(e)=>setQty(e.target.value)}>
                {
                  Array.from(Array(6), (e,i) => (
                    <option  key={i + 1} value={i + 1}>{i + 1}</option>
                  ))
                }
              </select>
              <select className='m-2 h-100 rounded' style={{"background-color":"#ffdd99","color":"brown"}} ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
               {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
               })}
              </select> 
              <div className='d-inline h=100 fs-5'>
                {finalPrice}
              </div>
              </div>
        <hr>
        </hr>
        
          <button className='btn justify-center ms-2' onClick={handleAddToCart} style={{"background-color":"#ffdd99","color":"brown"}}>Add to cart</button>

          
          
       

            </div>
        </div>



        
        </div>

        
<div className='hb2' id={props.foodItem.name}><div className="hovering-box">
        <button className="close-button" onClick={() => toggleDiv(props.foodItem.name)}>Close</button>
        <div className="container">
  <div className="row">
    <div className="col">
    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{"objectFit":"cover",}}/>
    </div>
    <div className="col">
      2 of 2
    </div>
  </div>
  </div></div>
        </div>
    </div>
  )
}
// 
