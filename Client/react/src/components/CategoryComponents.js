import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class Category extends Component {
    render(){
        return(
            <div className="container d-flex flex-wrap d-block justify-content-start mt-5">
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Vegetables.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Fruits and Vegetables</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Fish.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Fish, Meat & Egg</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Breakfast.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Breakfast & Instant Food</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Snacks.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Snacks</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Biscuit.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Biscuits & Cookies</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Tea.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Tea, Coffee & Health Drinks</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Drinks.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Cold Drinks & Juices</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/0.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Chocolates & Ice Creams</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Rice.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Rice, Dal & Atta</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Mashala.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Mashala, Oil & more</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Sauce.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Sauces</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Freshner.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Mouth Freshner Soap</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/petFood.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Pet Foods</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Chemist.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Chemist Store</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Personal.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Personal Care</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/babyCare.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Baby Care</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Home.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Home & Office Essentials</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Cleaning.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle>Cleaning Essentials</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>

        );
    }
}

export default Category;