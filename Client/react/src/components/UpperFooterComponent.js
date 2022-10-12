import React, { Component } from 'react'

function UpperFooter(props) {
    return (
      <div className="UpperFooter">
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h1 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span className="firstCircle"></span>
                <span className='secondCircle'></span>
                <span className='thirdCircle'></span>
            </div>
        </div>
        <div className="mobile">
            <div className="row justify-content-around m-3 mt-0 ">
                <div className="col-12 col-sm-6" >
                  <img src="assets/images/smartphone-call.png" alt="" />
                </div>
                <div className="col-12 col-sm-6 ">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <br />
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row justify-content-center m-1 mt-5">
            <div className="col-12 col-sm-3 speciality ">
                <div className="Round">
                    <img src="assets/images/basket.png" alt="basket" />
                </div> 

                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis! </p>
            </div>
            <div className="col-12 col-sm-3 speciality">
                <div className="Round">
                    <img src="assets/images/fast-delivery.png" alt="delivery" />
                </div> 
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis! </p>
            </div>
            <div className="col-12 col-sm-3 speciality">
                <div className="Round">
                    <img src="assets/images/best-price.png" alt="pricing" />
                </div> 
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis! </p>
            </div>

        </div>
        <div className="row justify-content-around m-1 mt-5" >
            <div className="col-12 col-sm-11">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio quo commodi recusandae deserunt consectetur quasi soluta nesciunt laudantium sapiente!</p>
            </div>
        </div>
        <div className="row justify-content-center m-1 mt-5">
            <div className="col-12 col-sm-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus enim expedita, nihil, perspiciatis dolor quas nesciunt consequuntur fugit earum dolores porro minus alias quos reiciendis temporibus eveniet exercitationem. Ex.</p>
            </div>
            <div className="col-12 col-sm-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus enim expedita, nihil, perspiciatis dolor quas nesciunt consequuntur fugit earum dolores porro minus alias quos reiciendis temporibus eveniet exercitationem. Ex.</p>
            </div>
            <div className="col-12 col-sm-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus enim expedita, nihil, perspiciatis dolor quas nesciunt consequuntur fugit earum dolores porro minus alias quos reiciendis temporibus eveniet exercitationem. Ex.</p>
            </div>

        </div>
        <div className="row justify-content-around m-3 mt-5 ">
                <div className="col-12 col-sm-4" >
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique praesentium fugit molestias voluptas eius. Rem possimus quis fuga asperiores dolore labore perferendis id itaque ipsa repellendus. Temporibus deserunt incidunt exercitationem!</p>
                </div>
                <div className="col-12 col-sm-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis eveniet porro at, voluptates ex, molestiae deserunt ducimus non animi, autem amet dolore. Deleniti asperiores consectetur, similique sunt ipsum exercitationem!</p>
                    
                </div>
            </div>
      </div>
    )
}
    

export default UpperFooter