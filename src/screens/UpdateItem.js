import React, { useState } from 'react'
import { Link, useNavigate ,useParams} from 'react-router-dom'
import Ash from '../components/Navbar2';
import Footer from '../components/Footer';
import axios from "axios";
import toast from 'react-hot-toast';

export default function Updateitem() {

    const items={
        "CategoryName":"",
        "name":"",
        "img":"",
        "options":{},
        "description":""
    }
    const {id} = useParams();
    const navigate = useNavigate();
    const [item,setItem]=useState(items);

    const inputChangeHandler = (e) =>{
        const {name, value} = e.target;
        setItem({...item, [name]:value});
     }
     const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/updateproduct/${id}`, item)
        .then((response)=>{
           toast.success(response.data.msg, {position:"top-right"})
           navigate("/")
        })
        .catch(error => console.log(error))
     }
    return (
        <div>


            <div id="landingpage">
                <div id="bg1">
                    <div id="bg2">
                        <Ash />

                        <div id="loginctr">
                            <form onSubmit={submitForm}>
                                <p style={{ "font-size": "4vh", "color": "rgb(255, 193, 7)", "font-style": "italic", }} id="paymentspageheading">SignUp</p>
                                {/* handleSubmit is a function  */}
                                {/* accha agar ab mai mere input fields me onchange attribute nhi du toh kya hoga ?? toh unme ham kuchh type nhi kar paenge . 
            since we already equallled them to credentials.name and etc */}
                                <div className="mb-3" id="x">
                                    <p style={{ "font-size": "3vh", "color": "#aaaaaa", "font-style": "italic", }} id="paymentspageheading">-categoryname-</p>
                                    <input type="text" onChange={inputChangeHandler} name='CategoryName' id='CategoryName' />
                                </div>

                                <div className="mb-3" id="x">
                                    <p style={{ "font-size": "3vh", "color": "#aaaaaa", "font-style": "italic", }} id="paymentspageheading">-name-</p>
                                    <input type="text" onChange={inputChangeHandler} name='name' id='name' />
                                </div>
                                <div className="mb-3" id="x">
                                    <p style={{ "font-size": "3vh", "color": "#aaaaaa", "font-style": "italic", }} id="paymentspageheading">-image-</p>
                                    <input type="text" onChange={inputChangeHandler} name='img' id='img' />
                                </div>

                                <label for="options">Options (JSON format):</label>
                                <textarea name="options" id="options" rows="5" onChange={inputChangeHandler} ></textarea>

                                <div className="mb-3" id="x">
                                    <p style={{ "font-size": "3vh", "color": "#aaaaaa", "font-style": "italic", }} id="paymentspageheading">-description-</p>
                                    <input type="text" onChange={inputChangeHandler} name='description' id='description' />
                                </div>
                                <button type="submit" className=" m-3 btn" style={{ "background-color": "rgba(255, 193, 7,0)", "font-style": "italic", "font-weight": "bold", "border-style": "solid", "border-color": "rgb(255, 193, 7)", "color": "white", "font-size": "3vh" }}>Submit</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    )
}
