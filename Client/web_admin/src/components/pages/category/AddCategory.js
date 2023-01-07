import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import { createProduct } from "../../../redux/actions/ProductActions";
import axios from "axios";
import { useEffect } from "react";

const AddCategory = () => {
  const [submitted, setSubmitted] = useState(false);
  const [categories, setcategories] = useState([]);
  const [imgFile, setimgFile] = useState();
  const dispatch = useDispatch();
  const { id } = useParams()
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, register_status } = userRegister;

  const [formState, setFormState] = useState({
    values: {},
  });

  const handleChange = (event) => {
    console.log(event.target.files, event.target.name);
    if (event.target.type == "file") {
      setimgFile(event.target.files[0]);
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

    formData.append("image", imgFile);

    formData.append("name", formState.values.name);
    if (formState.values.parent_category) {

      formData.append("parent_category", formState.values.parent_category);
    }
    if (id) {
      axios
        .put(`https://apidevelopment.hari-bhari.com/category/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("userInfo")
            )}`,
          },
        })
        .then((res) => {
          // navigate('/categories')
        });
      // setFormState({ values: {} });
      setSubmitted(false);
      // }
    } else {
      axios
        .post("https://apidevelopment.hari-bhari.com/category", formData, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("userInfo")
            )}`,
          },
        })
        .then((res) => {
          // navigate('/categories')
        });
      // setFormState({ values: {} });
      setSubmitted(false);
      // }
    }

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
  useEffect(() => {
    const getSingleCat = async () => {
      axios
        .get(`https://apidevelopment.hari-bhari.com/category/${id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("userInfo")
            )}`,
          },
        })
        .then((res) => {
          setFormState({ values: res.data.info });
        });
    };

    getSingleCat();
  }, [id]);

  console.log(formState.values, "imgFile");
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
                      <h4 className="card-title">Add Category</h4>
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
                                Category Image
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="file"
                                  className={
                                    "form-control form-control-lg"
                                  }
                                  name="image"
                                  onChange={handleChange}
                                // value={formState.values.image || ""}
                                />


                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Parent Category
                              </label>
                              <div className="col-sm-9">
                                <select
                                  className="form-control"
                                  name="parent_category"
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

export default AddCategory;
