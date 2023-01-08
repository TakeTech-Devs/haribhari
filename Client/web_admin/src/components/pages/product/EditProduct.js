import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import { editProduct } from '../../../redux/actions/ProductActions';
import { updateProduct } from '../../../redux/actions/ProductActions';
import { PRODUCT_UPDATE_RESET } from "../../../redux/constants/ProductConstants";
import { toast } from "react-toastify";
import { ToastObjects } from '../../../redux/actions/toastObject';
import axios from 'axios';

const EditProduct = ({ match }) => {
	const productId = match.params.id;
	const [submitted, setSubmitted] = useState(false);
	const dispatch = useDispatch();
	const [categories, setcategories] = useState([]);

	const productEdit = useSelector((state) => state.productEdit);
	const { loading, error, product } = productEdit;

	const productUpdate = useSelector((state) => state.productUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = productUpdate;

	const [formState, setFormState] = useState({
		values: {}
	});

	// useEffect(() => {
	// 	setFormState({ values: {} })
	// 	if (successUpdate) {
	// 		dispatch({ type: PRODUCT_UPDATE_RESET });
	// 		toast.success("Product updated successfully", ToastObjects);
	// 	} else {
	// 		if (!product?.title || product?._id !== productId) {
	// 			dispatch(editProduct(productId));
	// 		} else {
	// 			setFormState({ values: product })
	// 		}
	// 	}

	// }, [product, dispatch, productId, successUpdate]);


	const handleChange = (event) => {
		setFormState(formState => ({
			...formState,
			values: {
				...formState.values,
				[event.target.name]:
					event.target.type === 'checkbox'
						? event.target.checked
						: event.target.value
			}

		}));
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('formState', formState)
		// setSubmitted(true);
		// const { title, description, image } = formState.values;
		// if (title && description && image) {
		// 	dispatch(updateProduct(formState.values));
		// 	setSubmitted(false);
		// }
	}
	const [editedPd, seEditedPd] = useState()
	const { id } = useParams()


	useEffect(() => {
		axios.get(`https://apidevelopment.hari-bhari.com/product/${id}`)
			.then(res => {
				setFormState({ values: res.data.info })
				seEditedPd(res.data.info)
			})
	}, [id])
	useEffect(() => {
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

		getCategories();
	}, []);
	return (
		<>
			<div className="container-scroller">
				<Header />
				<div className="container-fluid page-body-wrapper">
					<Sidebar />
					<div className="main-panel">
						<div className="content-wrapper">
							<div className="row">
								<div className="col-12 grid-margin">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Edit Product</h4>
											<form className="form-sample" onSubmit={handleSubmit}>
												<p className="card-description">
												</p>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group row">
															<label className="col-sm-3 col-form-label">Name</label>
															<div className="col-sm-9">
																<input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.name ? ' is-invalid' : '')}
																	name="name"
																	onChange={handleChange}
																	value={formState.values.name || ''}
																/>
																{submitted && !formState.values.name &&
																	<div className="inline-errormsg">Name is required</div>
																}
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group row">
															<label className="col-sm-3 col-form-label">Description</label>
															<div className="col-sm-9">
																<textarea rows={5} cols={5} className={'form-control form-control-lg' + (submitted && !formState.values.name ? ' is-invalid' : '')}
																	name="description"
																	onChange={handleChange}
																	value={formState.values.description || ''}
																/>
																{submitted && !formState.values.description &&
																	<div className="inline-errormsg">Description is required</div>
																}
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group row">
															<label className="col-sm-3 col-form-label">Image URL</label>
															<div className="col-sm-9">
																<input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.image ? ' is-invalid' : '')}
																	name="image"
																	onChange={handleChange}
																	value={formState.values.image || ''}
																/>
																{submitted && !formState.values.image &&
																	<div className="inline-errormsg">Image is required</div>
																}
															</div>
														</div>
													</div>
												</div>


												<div className="row">
													<div className="col-md-6">
														<div className="form-group row">
															<label className="col-sm-3 col-form-label">Price</label>
															<div className="col-sm-9">
																<input type="number" className="form-control form-control-lg"
																	name="price"
																	onChange={handleChange}
																	value={formState.values.price || ''}
																/>
															</div>
														</div>
													</div>
												</div>

												<div className="row">
													<div className="col-md-6">
														<div className="form-group row">
															<label className="col-sm-3 col-form-label">Category</label>
															<div className="col-sm-9">

																<select className="form-control" name="category" multiple>
																	{categories?.map((cat) => (
																		<option selected={editedPd?.category == cat?._id} key={cat?._id} value={cat?.slug}>
																			{cat?.name}

																		</option>
																	))}
																</select>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group row">
															<label className="col-sm-3 col-form-label">Stock</label>
															<div className="col-sm-9">
																<input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.stock ? ' is-invalid' : '')}
																	name="stock"
																	onChange={handleChange}
																	value={formState.values.stock || ''}
																/>
																{submitted && !formState.values.stock &&
																	<div className="inline-errormsg">Stock is required</div>
																}
															</div>
														</div>
													</div>
												</div>
												<div className="text-center">
													<button type="submit" className="btn btn-primary me-2">Update</button>
													<Link to="/products"><button className="btn btn-light">Cancel</button></Link>
												</div>
											</form>
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

export default EditProduct;