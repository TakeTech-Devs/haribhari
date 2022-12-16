import React from "react";
import { Button, Card, CardImg, CardBody, CardTitle } from "reactstrap";
// import { Link } from 'react-router-dom';


function Products(){

    return (
      <div className="products">
        <div className="vegetable mx-4">
          <div className="buttons d-flex justify-content-between mt-5">
            <Button className="mt-5">Vegetables</Button>
            <Button className="mt-5">See More</Button>
          </div>
          <div className="container d-flex flex-wrap align-items-center justify-content-between pt-2 m-auto">
            <div className="ShiftButton">
              <span>
                <p>&#60;</p>
              </span>
            </div>
            <div className="row active">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/tomato.png"
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
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/cucumber.jpg"
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
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/cauliflower.webp"
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
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/bringle.webp"
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
            <span>
              <p>&#62;</p>
            </span>
          </div>          
        <div className="snacks mx-4">
          <div className="buttons d-flex justify-content-between mt-5">
            <Button>Snacks</Button>
            <Button>See More</Button>
          </div>
          <div className="container d-flex flex-wrap align-items-center justify-content-between pt-2 m-auto">
            <div className="ShiftButton">
              <span>
                <p>&#60;</p>
              </span>
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
              <span>
                <p>&#62;</p>
              </span>
            </div>
          </div>
        </div>

        <div className="cookies mx-4">
          <div className="buttons d-flex justify-content-between mt-5">
            <Button>Biscuits & Cookies</Button>
            <Button>See More</Button>
          </div>
          <div className="container d-flex flex-wrap align-items-center justify-content-between pt-2 m-auto">
            <div className="ShiftButton">
              <span>
                <p>&#60;</p>
              </span>
            </div>
            <div className="row active">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/hershey-kisses.webp"
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
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/oreo.webp"
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
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/grocery.webp"
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
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/PastsNoodles.jpg"
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
              <span>
                <p>&#62;</p>
              </span>
            </div>
          </div>
        </div>

        <div className="homeEssentials mx-4">
          <div className="buttons d-flex justify-content-between mt-5">
            <Button>Home & Office Essentials</Button>
            <Button>See More</Button>
          </div>
          <div className="container d-flex flex-wrap align-items-center justify-content-between pt-2 m-auto pb-5">
            <div className="ShiftButton">
              <span>
                <p>&#60;</p>
              </span>
            </div>
            <div className="row active">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/move.jpg"
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
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/stayfree.webp"
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
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/handwash.webp"
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
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src="assets/images/products/mask.jpg"
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
              <span>
                <p>&#62;</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Products;
