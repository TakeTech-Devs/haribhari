import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { useAuth } from "../context/AuthContex";
function CategoryProducts(props) {



  const [products, setproducts] = useState([]);

  const { onAddProduct, onRemoveProduct, cartItems, setCartItems, categoryAll } = useAuth();

  useEffect(() => {
    getProducts(categoryAll[0]?._id);
  }, [categoryAll]);

  const getProducts = (id) => {
    // const token = JSON.parse(localStorage.getItem('token'))
    // console.log(token)
    axios
      .get(
        `https://apidevelopment.hari-bhari.com/product/find/${id}`,
        {
          headers: {
            // Authorization: `Bearer ${token}`639a0c0e56faa05e018e85ec
          },
        }
      )
      .then((res) => {

        setproducts(res.data.info);
      });
  };

  const handleFilterPdwthCat = (id) => {
    getProducts(id)
    setActiveCategory(id)
  }
  const [activeCategory, setActiveCategory] = useState("")
  useEffect(() => {
    setActiveCategory(categoryAll[0]?._id)
  }, [categoryAll])
  console.log('activeCategory', activeCategory)
  return (
    <div className="products-category">
      <div className="mx-4">
        <div className="container d-flex flex-wrap align-items-center justify-content-between pt-2">
          <div className="row col-12 col-md-3 col-sm-1">
            <Card className="filter-products">
              <CardBody className="category-button">
                {
                  categoryAll?.map(cate => (
                    <button onClick={() => handleFilterPdwthCat(cate?._id)} className={activeCategory == cate?._id && "active"}>
                      <img src={`https://apidevelopment.hari-bhari.com/${cate?.image}`} alt="" />
                      {cate?.name}
                    </button>
                  ))
                }

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

        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
