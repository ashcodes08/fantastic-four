//screens folder me woh sab cheeze hai jinko mai screen ya display par show karna chahta hu
import React,{useEffect,useState} from 'react'
import Ash from '../components/Navbar2'
import Footer from '../components/Footer'
import Card from '../components/Card'
import'../index.css';
//idhar par jo bhi dekhana hai woh kaam karnge
export default function Home() {




  const [foodCat,setFoodCat]=useState([]);
  const [foodItem,setFoodItem]=useState([]);

  const loadData=async()=>
  {
    let response=await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:
      {
        'Content-Type':'application/json'
      }
    });
    response = await response.json();
    //now using the two things that we fetched from displaydata , namely global food items and global food category
    // console.log(response[0],response[1]);
setFoodItem(response[0]);
setFoodCat(response[1]);
  }
  //we are using useeffect so that on first render saare ke saare fnctions call ho jaaye 
  useEffect(()=>{
    loadData()
  },[])
const toggleDiv = (divId) => {
  const element = document.getElementById(divId);
  if (element) {
    element.style.display = element.style.display === 'none' ? 'flex' : 'none';
  } else {
    console.warn(`Element with ID "${divId}" not found.`);
  }
};
  return (
    <div>
    <div id="menucontainer">
      <div  id="menu">
        {/* parent div */}
        {/* calling the navbar */}
        <div><Ash/></div>
        {/* body */}
       <div className='container'>
{
  foodCat!==[]
  ? foodCat.map((data)=>{
    return (
      <div className='row mb-3'>
    <div key={data._id} className="m-3" id="categoryname">
 <button onClick={() => toggleDiv(data.CategoryName)} class="btn btn-outline-warning fs-2 fst-italic fw-bold">
    {data.CategoryName}</button>
    </div>
    <hr style={{"border-width":"2px","border-color":"white","border-style":"solid"}}/>
    <div className='row mb-3' id={data.CategoryName} style={{"display":"none"}}>
     {foodItem !== []?  
    foodItem.filter((item)=>item.CategoryName===data.CategoryName)
    .map(filterItems=>{
      return(
        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3 mx-auto'>
          <Card foodItem={filterItems}
          options={filterItems.options[0]}
          ></Card>
        </div>
      )
    })
    :<div>No Such Data Found</div>}</div>
    </div>
    )
  })
   :""
 }
         </div></div>
         <div><Footer/></div>
     </div></div>
   )
 }
