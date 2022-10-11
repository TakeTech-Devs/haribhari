import React from "react";

function Footer (props){
    return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center mr-auto">         
                <div className="col-12 col-sm-4 mt-4 mr-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-12 col-sm-4 mt-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                </div>
                <div className="col-12 col-sm-4 mt-4  socialLink">
                    <div className="contact">
                        <div className="add">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                        </div>
                        <div className="call">
                            <a href="tel:+585**545****"><img src="assets/images/icons/phone-call.png" alt="phone" width="35px" height
                            ="35px" />+585**545****</a>, &nbsp;
                            <a href="tel:+585**545****">+585**545****</a>
                            
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <a className="btn btn-social-icon m-3" href=""><img src="assets/images/icons/facebook 1.png" alt="" /></a>
                        <a className="btn btn-social-icon " href=""><img src="assets/images/icons/Whatsapp 1.png" alt="" /></a>
                        <a className="btn btn-social-icon m-3" href=""><img src="assets/images/icons/twitter 1.png" alt="" /></a>
                        <a className="btn btn-social-icon " href=""><img src="assets/images/icons/gmail 1.png" alt="" /></a>
                        <a className="btn btn-social-icon m-3" href=""><img src="assets/images/icons/instagram 1.png" alt="" /></a>
                        <a className="btn btn-social-icon " href=""><img src="assets/images/icons/linkedin 1.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>Powered by Alibhiya Softwares</p>
                    <p>© Copyright 2022 Company</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;