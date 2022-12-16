import React from "react";
import {Card, CardBody, CardImg, CardTitle, Button, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';
 
function Cart(props){
    // ITEM INCREASE DECREASE 
    let [num, setNum]= useState(1);
    let incNum =()=>{
        setNum(num + 1)
        
    };
    let decNum = () => {
        if(num>1)
        {
        setNum(num - 1);
        }
    }
    let [num1, setNum1]= useState(1);
    let incNum1 =()=>{
        setNum1(num1 + 1)
        
    };
    let decNum1 = () => {
        if(num1>1)
        {
        setNum1(num1 - 1);
        }
    }

     // Modal open state
     const [payment, setPayment] = React.useState(false);
     const [order, setOrder] = React.useState(false);
  
     // Toggle for Modal
     const proceedPayment = () => setPayment(!payment);
     const proceedOrder = () => setOrder(!order);

    // Payment Option Show Hide
    const[showtab, setShowtab]= useState(1);

    const handletab = (e)=>{
     setShowtab(e);
       }

     

    return(
        <div className="container cart">
            <h3 className="pt-4">My Cart</h3>
            <div className="items-info">
                <p>2 items</p>
                <p>Order ID- 0ID54211874</p>
            </div>
            <div className="added-item">
                <div className="item-info-container d-flex align-items-center justify-content-evenly">
                    <div className="item-img">
                        <img src="assets/images/products/PastsNoodles.jpg" alt="" />
                        
                    </div>
                    <div className="item-desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia beatae doloremque facere quidem! Fugiat?
                        <div className="pricing-remove d-flex align-items-center justify-content-between">
                            <h4>&#8377; 80</h4>
                            <Button className="btn btn-primary d-flex align-items-center justify-content-around">
                                <i className="fa fa-minus" onClick={decNum1} />&nbsp;
                                {num1}
                                &nbsp;<i className="fa fa-plus" onClick={incNum1} />
                            </Button>
                            <Button className="btn btn-primary">Remove</Button>
                        </div>
                    </div>
                </div>
      
                <div className="item-info-container d-flex align-items-center justify-content-evenly">
                    <div className="item-img">
                        <img src="assets/images/products/petfood.webp" alt="" />
                        {/* <h5 className="item-name">Chunks</h5> */}
                    </div>
                    <div className="item-desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia beatae doloremque facere quidem! Fugiat?
                        <div className="pricing-remove d-flex align-items-center justify-content-between">
                            <h4>&#8377; 700</h4>
                            <Button className="btn btn-primary d-flex align-items-center justify-content-around">
                                <i className="fa fa-minus" onClick={decNum} />&nbsp;
                                {num}
                                &nbsp;<i className="fa fa-plus" onClick={incNum} />
                            </Button>
                            <Button className="btn btn-primary">Remove</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="before-checkout">
                <h3>Before you Checkout</h3>
                <div className="container products">
                    <div className="snacks mx-4">
                        <div className="container d-flex flex-wrap align-items-center justify-content-between pt-5 m-auto pb-5 mb-5">
                            <div className="ShiftButton">
                                &#9664;
                            </div>
                            <div className="row active">
                                <Card style={{ border: "none" }}>
                                    <CardBody>
                                    <CardImg
                                        src="assets/images/products/maida.webp"
                                        class="card-img-top"
                                        alt="..."
                                    />
                                        <div className="card-body-bottom">
                                            <CardTitle className="text-left">
                                            Lorem ipsum dolor sit amet.
                                            </CardTitle>
                                            <div className="amount  d-flex justify-content-between align-items-bottom">
                                            <p>$20</p>
                                            <Button>Add</Button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="row ">
                                <Card style={{ border: "none" }}>
                                    <CardBody>
                                        <CardImg
                                            src="assets/images/products/eggo.webp"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body-bottom">
                                            <CardTitle className="text-left">
                                            Lorem ipsum dolor sit amet.
                                            </CardTitle>
                                            
                                            <div className="amount  d-flex justify-content-between align-items-bottom">
                                            <p>$20</p>
                                            <Button>Add</Button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="row ">
                                <Card style={{ border: "none" }}>
                                    <CardBody>
                                        <CardImg
                                            src="assets/images/products/cornflakes.webp"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body-bottom">
                                            <CardTitle className="text-left">
                                            Lorem ipsum dolor sit amet.
                                            </CardTitle>
                                    
                                            <div className="amount  d-flex justify-content-between align-items-bottom">
                                            <p>$20</p>
                                            <Button>Add</Button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="row ">
                                <Card style={{ border: "none" }}>
                                    <CardBody>
                                        <CardImg
                                            src="assets/images/products/lays.webp"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body-bottom">

                                            <CardTitle className="text-left">
                                            Lorem ipsum dolor sit amet.
                                            </CardTitle>
                                        
                                            <div className="amount  d-flex justify-content-between align-items-bottom">
                                            <p>$20</p>
                                            <Button>Add</Button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="ShiftButton">
                                &#9654;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" container bill-details">
                <h3>Bill Details</h3>
                <div className="row mb-5">
                    <table>
                        <tr>
                            <th>Lorem Ipsum MRP</th>
                            <td>&#8377; 80</td>
                        </tr>
                        <tr>
                            <th>Lorem Ipsum MRP</th>
                            <td>&#8377; 700</td>
                        </tr>
                        <tr>
                            <th>Product Discount</th>
                            <td><i className="fa fa-minus" />&nbsp;&#8377; 15</td>
                        </tr>
                        <tr>
                            <th>Delivery Charge </th>
                            <td>&#8377; 15 Free</td>
                        </tr>
                        <tr>
                            <th>Grand Total</th>
                            <td>&#8377; 765</td>
                        </tr>  
                    </table>
                </div>
                <div className="proceed-button">
                    <Button className="btn btn-primary mb-3" onClick={proceedPayment}>2 items : <strike>&#8377;780</strike> &#8377;765    Proceed &#9654;</Button>
                    <Modal className="white-background" size="lg" isOpen={payment} toggle={proceedPayment} >
                        <ModalBody>
                            <div className="payment-modal d-flex align-items-start justify-content-around">
                                <div className="left-modal-details">
                                    <ModalHeader>
                                        Payment
                                    </ModalHeader>
                                    <table>
                                        <tr>
                                            <th>Lorem Ipsum MRP</th>
                                            <td>&#8377; 80</td>
                                        </tr>
                                        <tr>
                                            <th>Lorem Ipsum MRP</th>
                                            <td>&#8377; 700</td>
                                        </tr>
                                        <tr>
                                            <th>Product Discount</th>
                                            <td><i className="fa fa-minus" />&nbsp;&#8377; 15</td>
                                        </tr>
                                        <tr>
                                            <th>Delivery Charge </th>
                                            <td>&#8377; 15 Free</td>
                                        </tr>
                                        <tr>
                                            <th>Grand Total</th>
                                            <td>&#8377; 765</td>
                                        </tr>  
                                    </table>
                                    
                                    <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                        <button className= {showtab===1? "nav-link active": "nav-link" }  onClick={()=>handletab(1)}>Cash</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button className={ showtab===2 ? "nav-link active": "nav-link"}  onClick={()=>handletab(2)}>UPI</button>
                                        </li>

                                        <li class="nav-item" role="presentation">
                                            <button className={ showtab===3 ? "nav-link active": "nav-link"}  onClick={()=>handletab(3)}>Card</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button className={ showtab===4 ? "nav-link active": "nav-link"}  onClick={()=>handletab(4)}>NetBanking</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content text-dark" id="pills-tabContent">
                                        <div  className= { showtab===1 ? "tab-pane fade show active text-center":"tab-pane fade show"} > 
                                            <img src="assets/images/icons/cash-on-delivery.png" alt="" />
                                            <p>
                                            Please pay &#8377;765 to the delivery executive <br />When your order is delivered.
                                            </p>
                                        <Button className="order-button" onClick={proceedOrder}>Place Order</Button>

                                        </div>

                                        <div  className= { showtab===2 ? "tab-pane fade show active text-center": "tab-pane fade"} > 
                                            <p className="text-left">UPI ID</p>
                                            <p>
                                                <input type="text" name='upiID' placeholder="Enter UPI ID" className='form-control'/>
                                            </p> 
                                            <button className='btn btn-secondary text-center'>Pay Now</button>

                                        </div>

                                        <div  className= { showtab===3 ? "tab-pane fade show active": "tab-pane fade"} >

                                            <form className="text-center">
                                                <div class="form-group">
                                                    <label for="cardNumber">Card Number</label>
                                                    <input type="text" class="form-control" id="cardNumber" aria-describedby="" placeholder="Enter Card Number" />
                                                </div>
                                                <div className="input-fields d-flex mt-3 mb-3">
                                                    <div class="form-group">
                                                        <label for="valid">Valid Through</label>
                                                        <div className="input-fields d-flex m-auto">
                                                            <input type="number" class="form-control" id="valid" placeholder="MM" />
                                                            <input type="number" class="form-control" id="valid" placeholder="YY" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group m-auto">
                                                        <label for="cvv">CVV</label>
                                                        <input type="number" class="form-control" id="cvv" placeholder="CVV" />
                                                    </div>
                                                </div>
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Save this card for future use, it’s perfectly secure.</label>
                                                </div>
                                                
                                                <button type="submit" class="btn btn-secondary">Pay Now</button>
                                            </form>
                                        </div>
                                        <div  className= { showtab===4 ? "tab-pane fade show active": "tab-pane fade"} > 
                                            <form className="select-bank text-center">
                                                <p className="text-left">All Banks</p>
                                                <select class="form-control">
                                                    <option value="" selected>Select Banks</option>
                                                    <option value="" >ABC Banks</option>
                                                    <option value="" >DEF Banks</option>
                                                    <option value="" >GHI Banks</option>
                                                    <option value="" >JKL Banks</option>
                                                </select>
                                                <button type="submit" class="btn btn-secondary">Pay Now</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                <div className="right-modal-details">
                                    <div className="info-container">
                                        <div className="delivery">
                                            <h5>Delivery Address</h5>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti beatae recusandae similique modi</p>
                                        </div>
                                        <div className="my-cart">
                                            <h5>My Cart</h5>
                                            <p>2 Items</p>
                                        </div>
                                        <div className="cart-info">
                                            <div className="item-img d-flex align-items-center justify-content-between">
                                                <img src="assets/images/products/PastsNoodles.jpg" width={60} height={60} alt="" />
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat <br />
                                                <h6>&#8377; 80</h6>
                                                </p>
                                                
                                            </div>
                                            <div className="item-img d-flex align-items-center justify-content-between">
                                                <img src="assets/images/products/petfood.webp" width={60} height={60} alt="" />
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat? <br />
                                                <h6>&#8377; 80</h6>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal className="white-background" size="lg" isOpen={order} toggle={proceedOrder}>
                                <ModalBody className="Confirmed">
                                    <h2>Your Order has been confirmed</h2>
                                    <div className="tick-circle">
                                    &#10003;
                                    </div>
                                    <h4>Thank You for purchase !</h4>
                                    <h6>Your order ID is - 0ID54211874</h6>
                                    <Link to="">Track Your order</Link>
                                    <p>Hurray! You saved &#8377; 15 on Delivery charge and Product Discount &#8377; 15</p>
                                </ModalBody>
                            </Modal>

                        </ModalBody>

                    </Modal>
                    <p>Hurray! You Saved &#8377;15 on delivery charge and Product Discount &#8377;15</p>
                </div>
            </div>
        </div>    
    );
}
export default Cart;