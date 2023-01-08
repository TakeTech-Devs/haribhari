import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import { createProduct } from "../../../redux/actions/ProductActions";
import axios from "axios";
import { useEffect } from "react";

const AddProduct = () => {
  const [submitted, setSubmitted] = useState(false);
  const [categories, setcategories] = useState([]);
  const [imgFile, setimgFile] = useState();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, register_status } = userRegister;

  const [formState, setFormState] = useState({
    values: {},
  });

  const handleChange = (event) => {
    console.log(event.target.files, event.target.name);
    if (event.target.type == "file") {
      setimgFile(event.target.files);
    }
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const { title, description, image } = formState.values;
    // if (title && description && image) {
    // dispatch(createProduct(formState.values));
    const formData = new FormData();
    let fileObj = [];

    fileObj.push(imgFile);
    for (let j = 0; j < imgFile.length; j++) {
      formData.append("image", imgFile[j]);
    }
    // formData.append('image', imgFile)
    formData.append("expary_date", formState.values.expary_date);
    formData.append("category", formState.values.category);
    formData.append("disclaimer", formState.values.disclaimer);
    formData.append("description", formState.values.description);
    formData.append("price", formState.values.price);
    formData.append("actual_price", formState.values.actual_price);
    formData.append("name", formState.values.name);
    axios
      .post("https://apidevelopment.hari-bhari.com/product", formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("userInfo")
          )}`,
        },
      })
      .then((res) => {
        // setcategories(res.data.info)
      });
    // setFormState({ values: {} });
    setSubmitted(false);
    // }
  };
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
  const [editedPd, seEditedPd] = useState()
  const { id } = useParams()


  useEffect(() => {
    axios.get(`https://apidevelopment.hari-bhari.com/product/${id}`)
      .then(res => {
        setFormState({ values: res.data.info })
        seEditedPd(res.data.info)
      })
  }, [id])
  console.log(editedPd, "editedPd");
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
                      <h4 className="card-title">Add Product</h4>
                      <form className="form-sample" onSubmit={handleSubmit}>
                        <p className="card-description"></p>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Name
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className={
                                    "form-control form-control-lg" +
                                    (submitted && !formState.values.name
                                      ? " is-invalid"
                                      : "")
                                  }
                                  name="name"
                                  onChange={handleChange}
                                  value={formState.values.name || ""}
                                />
                                {submitted && !formState.values.name && (
                                  <div className="inline-errormsg">
                                    Name is required
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Description
                              </label>
                              <div className="col-sm-9">
                                <textarea
                                  rows={5}
                                  cols={5}
                                  className={
                                    "form-control form-control-lg" +
                                    (submitted && !formState.values.title
                                      ? " is-invalid"
                                      : "")
                                  }
                                  name="description"
                                  onChange={handleChange}
                                  value={formState.values.description || ""}
                                />
                                {submitted && !formState.values.description && (
                                  <div className="inline-errormsg">
                                    Description is required
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Products Images
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="file"
                                  className={
                                    "form-control form-control-lg" +
                                    (submitted && !formState.values.images
                                      ? " is-invalid"
                                      : "")
                                  }
                                  name="images"
                                  multiple
                                  onChange={handleChange}
                                // value={formState.values.images || ""}
                                />

                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                disclaimer
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  name="disclaimer"
                                  onChange={handleChange}
                                  value={formState.values.disclaimer || ""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                expary_date
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="date"
                                  className="form-control form-control-lg"
                                  name="expary_date"
                                  onChange={handleChange}
                                  value={formState.values.expary_date || ""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Price
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="number"
                                  className="form-control form-control-lg"
                                  name="price"
                                  onChange={handleChange}
                                  value={formState.values.price || ""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                actual_price
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="number"
                                  className="form-control form-control-lg"
                                  name="actual_price"
                                  onChange={handleChange}
                                  value={formState.values.actual_price || ""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Category
                              </label>
                              <div className="col-sm-9">
                                <select
                                  className="form-control"
                                  name="category"
                                  onChange={handleChange}
                                  multiple
                                >
                                  {categories?.map((cat) => (
                                    <option key={cat?._id} value={cat?._id}>
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
                              <label className="col-sm-3 col-form-label">
                                customer_care_email
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className={
                                    "form-control form-control-lg" +
                                    (submitted &&
                                      !formState.values.customer_care_email
                                      ? " is-invalid"
                                      : "")
                                  }
                                  name="customer_care_email"
                                  onChange={handleChange}
                                  value={
                                    formState.values.customer_care_email || ""
                                  }
                                />
                                {submitted &&
                                  !formState.values.customer_care_email && (
                                    <div className="inline-errormsg">
                                      customer_care_email is required
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                customer_care_phone
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className={
                                    "form-control form-control-lg" +
                                    (submitted &&
                                      !formState.values.customer_care_phone
                                      ? " is-invalid"
                                      : "")
                                  }
                                  name="customer_care_phone"
                                  onChange={handleChange}
                                  value={
                                    formState.values.customer_care_phone || ""
                                  }
                                />
                                {submitted &&
                                  !formState.values.customer_care_phone && (
                                    <div className="inline-errormsg">
                                      customer_care_phone is required
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Stock
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className={
                                    "form-control form-control-lg" +
                                    (submitted && !formState.values.stock
                                      ? " is-invalid"
                                      : "")
                                  }
                                  name="stock"
                                  onChange={handleChange}
                                  value={formState.values.stock || ""}
                                />
                                {submitted && !formState.values.stock && (
                                  <div className="inline-errormsg">
                                    Stock is required
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Submit
                          </button>
                          <Link to="/products">
                            <button className="btn btn-light">Cancel</button>
                          </Link>
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
  );
};

export default AddProduct;
