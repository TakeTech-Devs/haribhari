import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Product from '../product/Product';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../redux/actions/ProductActions";
import ReactPaginate from 'react-paginate';
import { CSVLink } from "react-csv";
import axios from 'axios';
// import './product.css';

const headers = [
	{ label: "Name", key: "title" },
	{ label: "Description", key: "description" },
	{ label: "Image", key: "image" },
	{ label: "Price", key: "price" },
	{ label: "Stock", key: "stock" }
];

const Categories = () => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [csvData, setCsvData] = useState([]);
	const myRefBtn = useRef(null);
	const [categories, setcategories] = useState([]);

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, numOfPages, sortBy, searchText } = productList;



	//Call Function after stop typing text





	useEffect(() => {


		getCategories();
	}, []);
	const getCategories = async () => {
		axios
			.get("https://apidevelopment.hari-bhari.com/category", {
				headers: {
					Authorization: `Bearer ${JSON.parse(
						localStorage.getItem("userInfo")
					)}`,
				},
			})
			.then((res) => {
				setcategories(res.data.info);
			});
	};
	const handleDeleteCategory = (id) => {
		axios
			.delete(`https://apidevelopment.hari-bhari.com/category/${id}`, {
				headers: {
					Authorization: `Bearer ${JSON.parse(
						localStorage.getItem("userInfo")
					)}`,
				},
			})
			.then((res) => {
				getCategories()
			});
	}
	return (
		<>
			<div className="container-scroller">
				<Header />
				<div className="container-fluid page-body-wrapper">
					<Sidebar />
					<div className="main-panel">
						<div className="content-wrapper">
							<div className="row">
								<div className="col-lg-12 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Categories</h4>
											<div className="row">
												<div className="col-md-12">
													<div className="form-group row">
														<div className="offset-md-2 col-sm-4">
															<input type="text" placeholder="Search" className="form-control"
																name="search" onChange={(e) => setSearchTerm(e.target.value)} />
														</div>
														<div className="col-sm-3 float-right">
															{/* <select className="form-select form-control" aria-label="Sort By" onChange={handleSortBy}>
																<option value="">Sort By</option>
																<option value="name">Name</option>
																<option value="price">Price</option>
															</select> */}
														</div>
														<div className="col-sm-2">
															<Link to="/category/add" className="btn btn-outline-primary btn-fw float-right">
																Add Category
															</Link>
														</div>
														{/* <div className="col-sm-1">
	                                    	<i className="fa fa-download download-csv" onClick={getCsvProducts} title="Download CSV"/>
	                                    	<CSVLink 
	                                    		data={csvData} 
	                                    		headers={headers}
      											className="d-none"
      											ref={myRefBtn}
      											filename={"Product-Data.csv"}
	                                    		>											  
											</CSVLink>											
	                                    </div> */}
													</div>
												</div>
											</div>
											<div className="float-right mr-5">

											</div>
											<p className="card-description">
											</p>
											<div className="table-responsive">
												<table className="table table-hover products-table">
													<thead>
														<tr>
															<th className="product-title">Title</th>
															<th className="product-image">Image</th>

															<th className="product-action">Action</th>
														</tr>
													</thead>
													<tbody>


														{categories?.map((cat) => (
															<tr>
																<>
																	<td>{cat?.name}</td>
																	<td>
																		<img src={`https://apidevelopment.hari-bhari.com/${cat?.image}`} />
																	</td>

																	<td><Link
																		to={`/category/edit/${cat?._id}`
																		}
																	>
																		<i className="fa fa-edit"></i>
																	</Link>
																		<Link
																			to="#"
																			onClick={() => handleDeleteCategory(cat?._id)}
																		>
																			<i className="fa fa-trash"></i>
																		</Link>
																	</td>
																</>
															</tr>
														))}



													</tbody>
												</table>
											</div>
											<div className={'mt-4' + (numOfPages ? '' : ' d-none')}>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Footer />
					</div>
				</div>
			</div>
		</>
	)
}

export default Categories;