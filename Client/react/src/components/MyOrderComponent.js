import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./FooterComponent";
import Header from "./Header";

function OrderList(props) {
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        getMyOrders()
    }, [])

    const getMyOrders = () => {
        // e.preventDefault();
        const token = JSON.parse(localStorage.getItem("token"));

        axios
            .get(`https://apidevelopment.hari-bhari.com/order`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log('res', res)
                setMyOrders(res.data.info)
                // localStorage.setItem('token', JSON.stringify(res.data.info.token))
                // toggle()
                // handleRefresh()
                // setmySavedAddress(res.data?.info);
                // toggle();
                // setmyModal({ ...mymodal, addressModel: true });
            });
    };
    return (
        <>
            <Header />
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

                {
                    myOrders?.map(order => (
                        <div className="item-info-container d-flex align-items-center justify-content-evenly">
                            <div className="item-img">

                                <img src={`https://apidevelopment.hari-bhari.com/${order?.orderItems[0]?.product?.images[0]}`} alt="" />
                            </div>
                            <div className="item-desc">
                                <h4>Order ID: {order?.orderId} </h4>
                                <p> {`${order?.shippingInfo?.address?.receiver_name}  ${order?.shippingInfo?.address?.resident_name} ${order?.shippingInfo?.address?.resident_no} pin code : ${order?.shippingInfo?.pinCode}`} </p>

                            </div>
                            <Link to="/order-details">&#9654;</Link>
                        </div>
                    ))
                }


            </div>
            <Footer />
        </>
    );


}
export default OrderList;