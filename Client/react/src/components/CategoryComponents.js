import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
const CategoryComponents = () => {
    const [categoryAll, setcategoryAll] = useState([]);
    useEffect(() => {
        getAllCategoris()


    }, [])

    const getAllCategoris = () => {

        axios
            .get(
                "https://apidevelopment.hari-bhari.com/category",
                {
                    headers: {
                        // Authorization: `Bearer ${token}`639a0c0e56faa05e018e85ec
                    },
                }
            )
            .then((res) => {

                setcategoryAll(res.data.info);
            });
    };
    return (
        <div className="category">
            <div className="container d-flex flex-wrap justify-content-start pt-5 m-auto">
                {
                    categoryAll?.map(cate => (

                        <div className="row m-auto">
                            <Card style={{ border: 'none' }}>
                                <CardImg src={`https://apidevelopment.hari-bhari.com/${cate?.image}`} class="card-img-top" alt="..." />
                                <CardBody>
                                    <CardTitle className='text-center'>{cate?.name}</CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default CategoryComponents