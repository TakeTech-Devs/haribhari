import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
// import { Link } from 'react-router-dom';

class Category extends Component {
    render(){
        return(
            <div className="category">
            <div className="container d-flex flex-wrap d-block justify-content-start pt-5 m-auto">
                <div className="row m-auto m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/vegetables.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Fruits and Vegetables</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Fish.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Fish, Meat & Egg</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Breakfast.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Breakfast & Instant Food</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Snacks.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Snacks</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Biscuit.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Biscuits & Cookies</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Tea.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Tea, Coffee & Health Drinks</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Drinks.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Cold Drinks & Juices</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/0.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Chocolates & Ice Creams</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Rice.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Rice, Dal & Atta</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Mashala.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Mashala, Oil & more</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Sauce.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Sauces</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Freshner.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Mouth Freshner Soap</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/petFood.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Pet Foods</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Chemist.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Chemist Store</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row m-auto">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Personal.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Personal Care</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row mx-2">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/babyCare.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Baby Care</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row mx-2">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Home.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Home & Office Essentials</CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="row mx-2">
                    <Card style={{border:'none'}}>
                        <CardImg src="assets/images/products/Cleaning.png" class="card-img-top" alt="..." />
                        <CardBody>
                        <CardTitle className='text-center'>Cleaning Essentials</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        );
    }
}

export default Category;