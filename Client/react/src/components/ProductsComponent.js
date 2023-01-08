import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { useAuth } from "../context/AuthContex";
// import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Products() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const [categoryIds, setCategoryIds] = useState([])

  const [category1, setcategory1] = useState([])
  const [category2, setcategory2] = useState([])
  const [category3, setcategory3] = useState([])
  const [category4, setcategory4] = useState([])
  const {

    categoryAll
  } = useAuth()

  const getProducts = (catId, position) => {
    // const token = JSON.parse(localStorage.getItem('token'))

    axios
      .get(
        `https://apidevelopment.hari-bhari.com/product/find/${catId}`,
        {
          headers: {
            // Authorization: `Bearer ${token}`639a0c0e56faa05e018e85ec
          },
        }
      )
      .then((res) => {
        if (position == "z") {
          setcategory1(res.data.info);

        }
        if (position == "o") {
          setcategory2(res.data.info);

        }
        if (position == "t") {
          setcategory3(res.data.info);

        }
        if (position == "th") {

          setcategory4(res.data.info);
        }

      });
  };


  useEffect(() => {

    getProducts(categoryAll[0]?._id, "z");
    getProducts(categoryAll[1]?._id, "o");
    getProducts(categoryAll[2]?._id, "t");
    getProducts(categoryAll[3]?._id, "th");
    console.log('categoryAll[1]?._id', categoryAll[1]?._id)
  }, [categoryAll])
  const navigate = useNavigate();
  const gotoShop = () => {
    navigate("/shop");
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="products">



      {
        category1.length !== 0 && <>
          <div className="buttons d-flex justify-content-between mt-5">
            <Button className="mt-5">{categoryAll[0]?.name}</Button>

            <Button className="mt-5" onClick={gotoShop}>
              See More
            </Button>
          </div>

          <Carousel
            swipeable={false}
            draggable={false}
            //   showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            itemClass="carousel-item-padding-60-px"
          >
            {category1?.map((pd) => (
              <div className="row" style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",


              }}>
                <Card style={{ border: "none" }}>
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
                      <div className="amount  d-flex justify-content-between align-items-bottom">
                        <p>${pd?.price}</p>
                        <Button>Add</Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}

          </Carousel>
        </>
      }

      {
        category2.length !== 0 && <>
          <div className="buttons d-flex justify-content-between mt-5">
            <Button className="mt-5">{categoryAll[1]?.name}</Button>

            <Button className="mt-5" onClick={gotoShop}>
              See More
            </Button>
          </div>

          <Carousel
            swipeable={false}
            draggable={false}
            //   showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            itemClass="carousel-item-padding-60-px"
          >
            {category2?.map((pd) => (
              <div className="row" style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",


              }}>
                <Card style={{ border: "none" }}>
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
                      <div className="amount  d-flex justify-content-between align-items-bottom">
                        <p>${pd?.price}</p>
                        <Button>Add</Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}

          </Carousel>
        </>
      }

      {
        category3.length !== 0 && <>
          <div className="buttons d-flex justify-content-between mt-5">
            <Button className="mt-5">{categoryAll[2]?.name}</Button>

            <Button className="mt-5" onClick={gotoShop}>
              See More
            </Button>
          </div>

          <Carousel
            swipeable={false}
            draggable={false}
            //   showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            itemClass="carousel-item-padding-60-px"
          >
            {category3?.map((pd) => (
              <div className="row" style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",


              }}>
                <Card style={{ border: "none" }}>
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
                      <div className="amount  d-flex justify-content-between align-items-bottom">
                        <p>${pd?.price}</p>
                        <Button>Add</Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}

          </Carousel>
        </>
      }

      {
        category4.length !== 0 && <>
          <div className="buttons d-flex justify-content-between mt-5">
            <Button className="mt-5">{categoryAll[3]?.name}</Button>

            <Button className="mt-5" onClick={gotoShop}>
              See More
            </Button>
          </div>

          <Carousel
            swipeable={false}
            draggable={false}
            //   showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            itemClass="carousel-item-padding-60-px"
          >
            {category4?.map((pd) => (
              <div className="row" style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",


              }}>
                <Card style={{ border: "none" }}>
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
                      <div className="amount  d-flex justify-content-between align-items-bottom">
                        <p>${pd?.price}</p>
                        <Button>Add</Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}

          </Carousel>
        </>
      }


    </div>
  );
}

export default Products;
