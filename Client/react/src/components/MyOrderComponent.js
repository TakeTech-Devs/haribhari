import React from "react";
import { Link } from "react-router-dom";

function OrderList(props){
    return(
        <div className="container ordered-item">
            <div className="search-area d-flex align-items-center justify-content-evenly mt-4">
                <div class="input-group">
                    <div class="form-outline">
                        <span className="fa fa-search searchIcon"></span>
                        <input type="search" id="form1" class="form-control" placeholder="Search your order here" />
                    </div>
                </div>
                <div className="filter d-flex align-items-center justify-content-evenly">
                    <span>&#8801;</span> Filters
                </div>
            </div>
            <div className="item-info-container d-flex align-items-center justify-content-evenly">
                <div className="item-img">
                    <img src="assets/images/products/lady-finger.jpg" alt="" />        
                </div>
                <div className="item-desc">
                    <h4>Delivered on Oct 18</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                </div>
                <Link to="/order-details">&#9654;</Link>
            </div>
            <div className="item-info-container d-flex align-items-center justify-content-evenly">
                <div className="item-img">
                    <img src="assets/images/products/PastsNoodles.jpg" alt="" />        
                </div>
                <div className="item-desc">
                    <h4>Delivered on Oct 18</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>          
                </div>
                <Link to="/">&#9654;</Link>
            </div>
            <div className="item-info-container d-flex align-items-center justify-content-evenly">
                <div className="item-img">
                    <img src="assets/images/products/stayfree.webp" alt="" />        
                </div>
                <div className="item-desc">
                    <h4>Delivered on Oct 18</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                    
                </div>
                <Link to="/">&#9654;</Link>
            </div>
            <div className="item-info-container d-flex align-items-center justify-content-evenly">
                <div className="item-img">
                    <img src="assets/images/products/petfood.webp" alt="" />        
                </div>
                <div className="item-desc">
                    <h4>Delivered on Oct 18</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                    
                </div>
                <Link to="/">&#9654;</Link>
            </div>
            <div className="item-info-container d-flex align-items-center justify-content-evenly">
                <div className="item-img">
                    <img src="assets/images/products/Personal.png" alt="" />        
                </div>
                <div className="item-desc">
                    <h4>Delivered on Oct 18</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                    
                </div>
                <Link to="/">&#9654;</Link>
            </div>
        </div>
    );


}
export default OrderList;