import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { useAuth } from "../context/AuthContex";
import Header from "./Header";
// import imgpd from './assets/images/products/c1.webp'
import impd from "../images/Sauce.webp";

function ProductDetails(props) {
  const { id } = useParams();

  const { onAddProduct, onRemoveProduct, cartItems, setCartItems } = useAuth();
  const [ProductDetails, setProductDetails] = useState({});
  const [imgDefault, setimgDefault] = useState("");
  useEffect(() => {
    getSingleProduct();
  }, [id]);
  const getSingleProduct = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .get(`https://apidevelopment.hari-bhari.com/product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProductDetails({
          ...res.data?.info,
          ...res.data?.metaData,
          similarProduct: res.data?.similarProduct,
        });
      });
  };
  console.log(imgDefault, "imgDefault");
  return (
    <>
      <Header />

      {Object.keys(ProductDetails).length > 0 && (
        <div className="product-details">
          <div className="container product-desc d-flex align-items-center justify-content-around mt-4">
            <div className="row product-img">
              <div className="product-image">
                <img
                  src={
                    imgDefault
                      ? `https://apidevelopment.hari-bhari.com/${imgDefault}`
                      : `https://apidevelopment.hari-bhari.com/${ProductDetails?.images[0]}`
                  }
                  alt=""
                />
              </div>
              <div className="diff-product-image d-flex align-items-center justify-content-around">
                {ProductDetails?.images?.map((pimg) => (
                  <img
                    src={`https://apidevelopment.hari-bhari.com/${pimg}`}
                    alt=""
                    onClick={() => setimgDefault(pimg)}
                  />
                ))}
              </div>
            </div>
            <div className="row product-content">
              <h2>{ProductDetails?.name}</h2>
              <p>{ProductDetails?.description}</p>
              <div className="price-discount">
                <div className="price d-flex  ">
                  <p>
                    <strike>&#8377;{ProductDetails?.actual_price}</strike>{" "}
                    <ins>&#8377;{ProductDetails?.price}</ins>{" "}
                    <Button className="btn btn-primary">
                      {ProductDetails?.discount}% off
                    </Button>
                  </p>
                </div>
                <Button
                  className="btn"
                  onClick={() => onAddProduct(ProductDetails)}
                >
                  ADD
                </Button>
                <h3 className="mt-5">Product Details</h3>
                <h5>Disclaimer</h5>
                <p>
                  Every effort is made to maintain the accuracy of all
                  information. However, actual product packaging and materials
                  may contain more and/or different information. It is
                  recommended not to solely rely on the information presented.
                </p>
                <h5>Shelf Life</h5>
                <p>{ProductDetails?.shelfLife}</p>
                <h5>Customer Care Details</h5>
                <p>
                  Email:{" "}
                  <a href="mailto:company@gmail.com">company@gmail.com</a>
                </p>
                <p>
                  Customer Care Number: <a href="tel:">18**_***_*88</a>
                </p>
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
              {ProductDetails?.similarProduct?.map((pd) => (
                <div className="row m-auto">
                  <Card className="p-0">
                    <CardBody>
                      <CardImg src={impd} class="card-img-top" alt="..." />
                      <div className="card-body-bottom">
                        <CardTitle className="text-left">{pd?.name}</CardTitle>
                        <div className="amount  d-flex justify-content-between align-items-bottom">
                          <p>${pd?.price}</p>
                          <Button onClick={() => onAddProduct(pd)}>Add</Button>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          {/* YOU MIGHT ALSO LIKE  */}
          <div className="mt-5 mx-4">
            <h3>You might also like</h3>
            <div className="container d-flex">
              {ProductDetails?.similarProduct?.map((pd) => (
                <div className="row m-auto">
                  <Card className="p-0">
                    <CardBody>
                      <CardImg src={impd} class="card-img-top" alt="..." />
                      <div className="card-body-bottom">
                        <CardTitle className="text-left">{pd?.name}</CardTitle>
                        <div className="amount  d-flex justify-content-between align-items-bottom">
                          <p>${pd?.price}</p>
                          <Button onClick={() => onAddProduct(pd)}>Add</Button>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductDetails;
