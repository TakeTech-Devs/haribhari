import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { useAuth } from "../context/AuthContex";

function CategoryProducts(props) {
  const [products, setproducts] = useState([]);
  const { onAddProduct, onRemoveProduct, cartItems, setCartItems } = useAuth();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    // const token = JSON.parse(localStorage.getItem('token'))
    // console.log(token)
    axios
      .get(
        "https://apidevelopment.hari-bhari.com/product/find/639a0c0e56faa05e018e85ec",
        {
          headers: {
            // Authorization: `Bearer ${token}`639a0c0e56faa05e018e85ec
          },
        }
      )
      .then((res) => {
        console.log(res, "resd");
        setproducts(res.data.info);
      });
  };
  console.log(products, "products");
  return (
    <div className="products-category">
      <div className="mx-4">
        <div className="container d-flex flex-wrap align-items-center justify-content-between pt-2">
          <div className="row col-12 col-md-3 col-sm-1">
            <Card className="filter-products">
              <CardBody className="category-button">
                <button className="active">
                  <img src="assets/images/vegetables.webp" alt="" />
                  Vegetables
                </button>
                <button>
                  <img src="assets/images/download.jfif" alt="" />
                  Frogen Veges
                </button>
                <button>
                  <img src="assets/images/fruits.jpg" alt="" />
                  Fruits
                </button>
                <button>
                  <img src="assets/images/combo.jpg" alt="" />
                  Combo Offer
                </button>
              </CardBody>
            </Card>
          </div>
          {products?.map((pd) => (
            <div className="row col-12 col-md-3 col-sm-1">
              <Card className="filter-products">
                <Link to={`/products/${pd._id}`}>
                  <CardBody>
                    <CardImg
                      src={`https://apidevelopment.hari-bhari.com/${pd?.images[0]}`}
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body-bottom">
                      <CardTitle className="text-left">
                        {pd?.description}
                      </CardTitle>

                      <div className="add-button  d-flex justify-content-between align-items-bottom">
                        <p>${pd?.price}</p>
                        <Button onClick={() => onAddProduct(pd)}>Add</Button>
                      </div>
                    </div>
                  </CardBody>
                </Link>
              </Card>
            </div>
          ))}
          <div className="row col-12 col-md-3 col-sm-1">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/cauliflower.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/bringle.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/broccoli.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/onion.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/potatoes.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/garlic.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/beans.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/carrot.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/lady-finger.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/Bittermelon.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/cabbage.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/ginger.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/kale.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
                    <p>$20</p>
                    <Button>Add</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row col-12 col-md-3 col-sm-1 mt-4">
            <Card className="filter-products">
              <CardBody>
                <CardImg
                  src="assets/images/products/pepper.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body-bottom">
                  <CardTitle className="text-left">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
                  </CardTitle>
                  <div className="add-button  d-flex justify-content-between align-items-bottom">
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

export default CategoryProducts;
