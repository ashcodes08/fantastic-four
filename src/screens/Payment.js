import React from 'react'
import Ash from '../components/Navbar2'
import axios from "axios";
import { useState } from "react";
import { useCart, useDispatchCart } from '../components/ContextReducer';
import {useNavigate} from 'react-router-dom'
import'../index.css';
export default function Payment() {


  let data = useCart();
  let dispatch = useDispatchCart();
  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  const [book, setBook] = useState({
		name: "Hippogriff Hot Meal",
		price: totalPrice,
	});

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_hE17nCNbrRWIMd",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			order_id: data.id,
      //the below function is called after successful payment
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:8080/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#d3a625",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:8080/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: book.price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
    dispatch({ type: "DROP" });
	};

  return (
    <div>
        <div id="bg1">
        <div id="bg2">
        <Ash/>
        <br></br>
        <p style={{"font-size":"6vh","color":"rgb(255, 193, 7)","font-style":"italic",}} id="paymentspageheading">
        Weaseleys' Money Exchange 
        </p>
        <div class="container">
  <div class="row align-items-start">
    <div class="col-sm " id="paymentspagecols">
      <div id="c1">
    <p style={{"font-size":"4vh","color":"rgb(217, 217, 217)","font-style":"italic","font-weight":"bold"}}>What treasures lie within my Cauldron?(ordered items)</p><br/>
    <table className='table table-dark fst-italic fw-bold'style={{ "background-color":"rgba(0, 0, 0, 0)", opacity: 1 }}>
          <thead className=' text fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >name</th> 
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                </tr>
            ))}
          </tbody>
        </table>
        <p style={{"font-size":"4vh","color":"rgb(217, 217, 217)","font-style":"italic","font-weight":"bold"}}>Total Price: {totalPrice}/-</p>
    </div></div>
    <div class="col-sm " id="paymentspagecols">
    <div className="App">
			<div className="book_container">
      <p style={{"font-size":"4vh","color":"rgb(217, 217, 217)","font-style":"italic","font-weight":"bold"}}>Owl-Der Your Order(pay online)</p>
				<button onClick={handlePayment} className="buy_btn" id="b"><span>
					Pay Online</span>
				</button>
			</div>
		</div>
    </div>
    <div class="col-sm " id="paymentspagecols">
      <div>
    <p style={{"font-size":"4vh","color":"rgb(217, 217, 217)","font-style":"italic","font-weight":"bold"}}>Galleons on Delivery (pay as we deliver)</p>
    <button onClick={(e) => dispatch({ type: "DROP" })} className="buy_btn" id="b">
      <span>
					Pay on delivery</span>
				</button>
        </div>
    </div>
  </div>
        </div>
</div>
    </div>
    </div>
  )
}



