import React from 'react'

function UpperFooter(props) {
    return (
      <div className="UpperFooter">
        <div className="container">
            <div className="row justify-content-center mt-5 col-sm-12">
                <h1 className="text-center">Welcome to Hari Bhari</h1>
                <h4 className="text-left">We might be new in this market but it has a strong committed team along with bigger determination to uplift the customer trust.</h4>
            </div>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
        {/* </div>
        <div className="container"> */}
            <div className="row mainPart justify-content-around ">
                <div className="col-12 col-sm" >
                    <div className="mobile-qr d-flex align-items-center">
                        <img src="assets/images/smartphone-call.png" alt="" className="w-75"/>
                        <div className="qr-container">
                            <img src="assets/images/qr.jpeg" width="80px" height="150px" alt="" className="w-75"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm mt-3">
                    <p>Quality is a word synonymous with Hari Bhari that takes pride in our stringent quality standards. We go to great lengths and take the utmost care and precaution to ensure that each day our customers get nothing but the very best across all our products, services & interactions. Here are a few quality standards that we practice at Hari Bhari.</p><br />
                    <p>When you get into a Hari Bhari online store you can be sure that you will get the best quality level of fresh produce and spice products in your region. Our teams take great pains to locate and source only the finest available produce in every fruit and vegetable. Our spice products too are chosen especially as per our stringiest standards.</p>
                    {/* <br />
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul> */}
                </div>
            </div>
        </div>
        <div className="row  justify-content-center align-items-center mx-5 mt-5">
            <div className="col-12 col-sm mx-5 speciality ">
                <div className="Round m-auto">
                    <img src="assets/images/basket.png" alt="basket" />
                </div> 

                <h2>Fresh Vegetables at Your Home.</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis! </p> */}
            </div>
            <div className="col-12 col-sm mx-5 speciality">
                <div className="Round m-auto">
                    <img src="assets/images/fast-delivery.png" alt="delivery" />
                </div> 
                <h2>Delivery on Time</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis! </p> */}
            </div>
            <div className="col-12 col-sm mx-5 speciality">
                <div className="Round m-auto">
                    <img src="assets/images/best-price.png" alt="pricing" />
                </div> 
                <h2>Custome Price for Bulk Order</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis! </p> */}
            </div>

        </div>
        <div className="row justify-content-around m-2 mt-5" >
            {/* <div className="col-12 col-md col-sm-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio quo commodi recusandae deserunt consectetur quasi soluta nesciunt laudantium sapiente!</p>
            </div>
        </div>
        <div className="row justify-content-center mx-5 mt-5">
            <div className="col-12 col-md-4 col-sm-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus enim expedita, nihil, perspiciatis dolor quas nesciunt consequuntur fugit earum dolores porro minus alias quos reiciendis temporibus eveniet exercitationem. Ex.</p>
            </div>
            <div className="col-12 col-md-4 col-sm-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus enim expedita, nihil, perspiciatis dolor quas nesciunt consequuntur fugit earum dolores porro minus alias quos reiciendis temporibus eveniet exercitationem. Ex.</p>
            </div>
            <div className="col-12 col-md-4 col-sm-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus enim expedita, nihil, perspiciatis dolor quas nesciunt consequuntur fugit earum dolores porro minus alias quos reiciendis temporibus eveniet exercitationem. Ex.</p>
            </div> */}
            <div className="col-12 col-md-10 col-sm-12">
                <p>We acknowledges your faith in us and we endeavor to maintain and secure your privacy at highest standards. HB recognizes that your privacy is important to you and that you have certain rights in relation to your personal information (“information”). HB appreciates your trust and uses your information carefully and sensibly. The aim of this privacy policy is to ensure that you understand what information we collect about you, the reasons for collection and use, and entities we share it with. By providing your consent to this privacy policy, you agree to the collection, use and transfer of your information as set out in this privacy policy. HB may change its privacy policy from time to time and may display the same on its website/mobile application. In case you disapprove any of the terms and conditions of this privacy policy, then you should immediately cease to use the website/mobile application. Our objective is to provide a better shopping experience to our customers and customers of our affiliates.</p>
            </div>

        </div>
        {/* <div className="row justify-content-evenly mx-5 mt-5">
                <div className="col-12 col-md-5 col-sm-12" >
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique praesentium fugit molestias voluptas eius. Rem possimus quis fuga asperiores dolore labore perferendis id itaque ipsa repellendus. Temporibus deserunt incidunt exercitationem!</p>
                </div>
                <div className="col-12 col-md-5 col-sm-12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis eveniet porro at, voluptates ex, molestiae deserunt ducimus non animi, autem amet dolore. Deleniti asperiores consectetur, similique sunt ipsum exercitationem!</p>
                    
                </div>
            </div> */}
            <marquee behavior="rotation" direction="right" loop="2" scrollamount="20" className="my-5">
                <h2 className="text-center">Earn by joining us || Promote your brand here &nbsp; &nbsp;
                Earn by joining us || Promote your brand here </h2>
            </marquee>
      </div>
    )
}
    

export default UpperFooter