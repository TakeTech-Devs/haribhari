import React from "react";
import { useState } from 'react';
import { Button, Card, CardImg, CardBody, CardTitle } from "reactstrap";


function ProductDetails(props){
    let [num1, setNum1]= useState(1);
    let incNum1 =()=>{
        setNum1(num1 + 1); 
    };
    let decNum1 = () => {
        if(num1>1)
        {
        setNum1(num1 - 1);
        }
    };
    return(
        <div className="product-details">
            <div className="container product-desc d-flex align-items-center justify-content-around mt-4">
                <div className="row product-img">
                    <div className="product-image">
                        <img src="assets/images/products/bru.jpg" alt="" />
                    </div>
                    <div className="diff-product-image d-flex align-items-center justify-content-around">
                        <img src="assets/images/products/bru-green.webp" alt="" />
                        <img src="assets/images/products/c6.jpg" alt="" />
                        <img src="assets/images/products/s-min.png" alt="" />
                        <img src="assets/images/products/bru.jpg" alt="" />
                    </div>
                </div>
                <div className="row product-content">
                    <h2>Cofee Powder 25g</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quas? Nesciunt impedit voluptatum aut facilis.</p>
                    <div className="price-discount">
                        <div className="price d-flex  ">
                            <p><strike>&#8377;500</strike> <ins>&#8377;250</ins> <Button className="btn btn-primary">20% off</Button></p> 
                        </div>
                        <div className="add-button d-flex">
                            <Button className="btn m-1">ADD</Button>
                            <Button className="btn d-flex align-items-center justify-content-around p-2">
                                <i className="fa fa-minus" onClick={decNum1} />&nbsp;
                                {num1}
                                &nbsp;<i className="fa fa-plus" onClick={incNum1} />
                            </Button>
                        </div>
                            <Button className="btn btn-primary">Remove</Button>
                        <h3 className="mt-5">Product Details</h3>
                        <h5>Disclaimer</h5>
                        <p>Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>
                        <h5>Shelf Life</h5>
                        <p>18 Months</p>
                        <h5>Customer Care Details</h5>
                        <p>Email: <a href="mailto:company@gmail.com">company@gmail.com</a></p>
                        <p>Customer Care Number: <a href="tel:">18**_***_*88</a></p>
                        <h5>Product Class</h5>
                        <p>Packaged Goods</p>
                        <h5>Expiry Date</h5>
                        <p>25-05-2024</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 mx-4">
                    <h3>Similar Products</h3>
                <div className="container d-flex">
                    <div className="row m-auto">
                    <Card className="p-0">
                        <CardBody>
                        <CardImg
                            src="assets/images/products/c1.webp"
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
                    <div className="row m-auto">
                    <Card style={{ border: "none" }}>
                        <CardBody>
                        <CardImg
                            src="assets/images/products/c2.jpg"
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
                    <div className="row m-auto">
                    <Card style={{ border: "none" }}>
                        <CardBody>
                        <CardImg
                            src="assets/images/products/c3.webp"
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
                    <div className="row m-auto">
                    <Card style={{ border: "none" }}>
                        <CardBody>
                        <CardImg
                            src="assets/images/products/c4.jpg"
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
                </div>
            </div>
            {/* YOU MIGHT ALSO LIKE  */}
            <div className="mt-5 mx-4">
                    <h3>You might also like</h3>
                <div className="container d-flex">
                    <div className="row m-auto">
                    <Card className="p-0">
                        <CardBody>
                        <CardImg
                            src="assets/images/products/y1.jpg"
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
                    <div className="row m-auto">
                    <Card style={{ border: "none" }}>
                        <CardBody>
                        <CardImg
                            src="assets/images/products/y2.jpg"
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
                    <div className="row m-auto">
                    <Card style={{ border: "none" }}>
                        <CardBody>
                        <CardImg
                            src="assets/images/products/y3.jpg"
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
                    <div className="row m-auto">
                    <Card style={{ border: "none" }}>
                        <CardBody>
                        <CardImg
                            src="assets/images/products/y4.webp"
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
                </div>
            </div>
        </div>

    );
}
export default ProductDetails;