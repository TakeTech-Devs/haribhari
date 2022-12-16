import React from "react";
import { Link } from "react-router-dom";
function Footer (props){
    return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center mr-auto">         
                <div className="col-12 col-md-4 col-sm-12 mt-4 mr-5">
                    <h4 className=" text-center mt-4 mb-3 text-uppercase">Useful Links</h4>
                    <div className="row">
                        <ul className="text-center"><li><Link to='/'>Home</Link></li></ul>
                        <div className="links-container d-flex align-items-center justify-content-between">
                            <ul>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/disclaimer'>Disclaimer</Link></li>
                                <li><Link to='/payment'>Payment Policy</Link></li>
                                <li><Link to='/privacy'>Privacy Policy</Link></li>
                            </ul>
                            <ul>
                                <li><Link to='/quality'>Quality Standards</Link></li>
                                <li><Link to='/grievance'>Grievance Officer</Link></li>
                                <li><Link to='/vision'>Our Vision and Purpose</Link></li>
                                <li><Link to='/faq'>Frequently Asked Questions</Link></li>
                            </ul>                            
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-sm-12 mt-4">
                    <p>To address any issues relating to service and sale and also to increase your shopping experience.</p>
                    <p>Handling orders and deliver products and to provide promotional offers and share details about products and services. </p>
                    <p>Communicating with you through phone, mobile application or email. </p>
                    <p>Providing an enhanced and delightful customer experience. </p>
                </div>
                <div className="col-12 col-md-4 col-sm-12 mt-4  socialLink">
                    <div className="contact">
                        <div className="addition">
                            <p>Dealing with enquiries and complaints, customer services and related activities and fixing errors and providing recommendations based on your past purchases. </p>
                        </div>
                        <div className="call col-sm-12">
                            <img src="assets/images/icons/get.png" alt="phone" width="65px" height
                            ="65px" /> <Link to="">Get In Touch</Link>                            
                        </div>
                    </div>
                    <div className="text-center col-sm-mt-5">
                        <a className="btn btn-social-icon m-3 " href="#"><img src="assets/images/icons/facebook.png" alt="#" /></a>
                        <a className="btn btn-social-icon " href="#"><img src="assets/images/icons/whatsapp.png" alt="#" /></a>
                        <a className="btn btn-social-icon m-3" href="#"><img src="assets/images/icons/twitter.png" alt="#" /></a>
                        <a className="btn btn-social-icon " href="#"><img src="assets/images/icons/gmail.png" alt="#" /></a>
                        <a className="btn btn-social-icon m-3" href="#"><img src="assets/images/icons/instagram.png" alt="#" /></a>
                        <a className="btn btn-social-icon " href="#"><img src="assets/images/icons/linkedin.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto mb-3">
                    <p>© Copyright 2022 Haribhari</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;



