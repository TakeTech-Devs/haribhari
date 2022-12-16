import React from "react";

function OrderTrack(props){
    return(
        <div className="order-progress">
                <div className="progress-bar d-flex">
                    <div className="progress-line">
                        <div className="line"></div>
                    </div>
                    <div className="progress-intervals">
                        <div className="progress-dots d-flex">
                            <span className="dot"></span>
                            <div className="progress-details">
                                <h5>Order Confirmed</h5>
                                <p></p>
                                <h6>Your Order has been placed.</h6>
                                <p>Sunday, Oct 16, 2022 - 2:19pm</p>
                                <h6>Seller has processed your order.</h6>
                                <p>Sunday, Oct 16, 2022 - 2:20pm</p>
                                <h6>Your item has been picked up by courier partner.</h6>
                                <p>Sunday, Oct 16, 2022 - 2:21pm</p>
                            </div>
                        </div>
                        <div className="progress-dots d-flex">
                            <span className="dot"></span>
                            <div className="progress-details ">
                                <h5>Out For Delivery</h5>
                                <h6>Your item is out of delivery</h6>
                                <p>Sunday, Oct 16, 2022 - 2:23pm</p>
                            </div>
                        </div>
                        <div className="progress-dots d-flex">
                            <span className="dot"></span>
                            <div className="progress-details">
                                <h5>Delivered</h5>
                                <h6>Your item will be delivered.</h6>
                                <p>Sunday, Oct 16, 2022 - 2:30pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default OrderTrack;