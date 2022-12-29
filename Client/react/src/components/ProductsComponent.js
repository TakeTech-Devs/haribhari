import axios from "axios";
import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Card, CardImg, CardBody, CardTitle } from "reactstrap";
// import { Link } from 'react-router-dom';


function Products() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    getProducts()


  }, [])

  const getProducts = () => {
    // const token = JSON.parse(localStorage.getItem('token'))
   
    axios.get('http://localhost:4000/product/find/639a0c0e56faa05e018e85ec', {
      headers: {
        // Authorization: `Bearer ${token}`639a0c0e56faa05e018e85ec
      }
    }).then(res => {
     
      setproducts(res.data.info)
    })
  }
  const navigate = useNavigate()
  const gotoShop = () => {
    navigate('/shop')
  }
  return (
    <div className="products">
      <div className="vegetable mx-4">
        <div className="buttons d-flex justify-content-between mt-5">
          <Button className="mt-5">Grocery</Button>
          <Button className="mt-5" onClick={gotoShop}>See More</Button>
        </div>
        <div className="container d-flex flex-wrap align-items-center justify-content-between pt-2 m-auto">
          <div className="ShiftButton">
            <span>
              <p>&#60;</p>
            </span>
          </div>
        
          {products?.map(pd => (
            <div className="row">
              <Card style={{ border: "none" }}>
                <CardBody>
                  <CardImg
                    src={`http://localhost:4000/${pd?.images[0]}`}
                    class="card-img-top"
                    alt="..."
                  />
                  <div className="card-body-bottom">
                    <CardTitle className="text-left">
                      {pd?.description}
                    </CardTitle>
                    <div className="amount  d-flex justify-content-between align-items-bottom">
                      <p>${pd?.price}</p>
                      <Button>Add</Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
))}
        
          <div className="ShiftButton">
            <span>
              <p>&#62;</p>
            </span>
          </div>
          <div className="snacks mx-4">
            <div className="buttons d-flex justify-content-between mt-5">
              <Button>Snacks</Button>
              <Button className="mt-5" onClick={gotoShop}>See More</Button>
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
              <Button className="mt-5" onClick={gotoShop}>See More</Button>
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
              <Button className="mt-5" onClick={gotoShop}>See More</Button>
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
