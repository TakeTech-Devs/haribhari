import React from "react";
import OrderTrack from "./OrderTrackComponent";

function OrderDetails(props){
    return(
        <div className="container">
            <div className="order-id">
                <p>Order ID - 0D54811154</p>
            </div>
            <div className="img-details d-flex d-block align-items-center justify-content-around">
                <div className="img col-12 col-md-auto col-sm-12">
                    <img src="assets/images/products/lady-finger.jpg" alt="" />
                </div>
                <div className="details">
                    <h5>Ladies' Finger</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="pricing"><strike>&#8377;500</strike> &#8377;250</p>
                </div>
            </div>
            <OrderTrack />
            <div className="rating mt-3 mb-5">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
            </div>
        </div>
    );

}
export default OrderDetails;