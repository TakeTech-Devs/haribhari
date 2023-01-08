import { Link } from 'react-router-dom';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/actions/ProductActions";


const Product = (props) => {
	let { _id, name, images, price, description, stock } = props.product;
	const dispatch = useDispatch();

	const deletehandler = (id) => {
		if (window.confirm("Are you sure want to delete product?")) {
			dispatch(deleteProduct(id));
		}
	};
	return (
		<>
			<tr>
				<td>{name}</td>
				<td><p>{description}</p></td>
				<td><img src={`https://apidevelopment.hari-bhari.com/${images[0]}`} /></td>
				<td>{price}</td>
				<td>{stock}</td>
				<td><Link
					to={`/product/edit/${_id}`}
				>
					<i className="fa fa-edit"></i>
				</Link>
					<Link
						to="#"
						onClick={() => deletehandler(_id)}
					>
						<i className="fa fa-trash"></i>
					</Link>
				</td>
			</tr>
		</>
	)
}

export default Product;