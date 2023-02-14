import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';

const AuthContext = React.createContext([]);
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [categoryAll, setcategoryAll] = useState([]);

  const [UserInfo, setUserInfo] = useState([]);
  const [billingInfo, setbillingInfo] = useState({});
  const onAddProduct = (product, click) => {
    const exist = cartItems.find((x) => x._id === product._id);
    const token = JSON.parse(localStorage.getItem("token"));

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      if (click == "click") {
        axios.post(
          "https://apidevelopment.hari-bhari.com/cart/",
          { qty: exist.qty, product_id: product._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then(res => {
          toast.success(`${product.name} added suucessfully`)

        }).catch(err => {
          toast.error(`${product.name} added fails`)

        })
      }

    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      if (click == "click") {
        axios.post(
          "https://apidevelopment.hari-bhari.com/cart/",
          { qty: 1, product_id: product._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then(res => {
          toast.success(`${product.name} added suucessfully`)

        }).catch(err => {
          toast.error(`${product.name}  added fails`)

        })
      }

    }
  };
  const onRemoveProduct = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    getUserDetails();
    getAllCategoris()
    document.body.classList.remove("stop-scrolling");
  }, []);
  useEffect(() => {
    if (JSON.stringify(UserInfo) !== "{}") {
      getMyCart();
    }
  }, [UserInfo]);

  const getMyCart = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .get("https://apidevelopment.hari-bhari.com/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setbillingInfo(res.data.info);
        setCartItems(res.data.info.items);
      })
      .catch((err) => {
        // localStorage.removeItem('token')
      });
  };
  const getUserDetails = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .get("https://apidevelopment.hari-bhari.com/auth/viewprofile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserInfo(res?.data?.info);
      })
      .catch((err) => {
        localStorage.removeItem("token");
      });
  };

  const handleRefresh = () => {
    window.location.reload(true);
  };
  const handelLogout = () => {
    localStorage.removeItem("token");
    handleRefresh();
  };


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

  const value = {
    onAddProduct,
    onRemoveProduct,
    cartItems,
    setCartItems,
    handelLogout,
    handleRefresh,
    billingInfo,
    setbillingInfo,
    getMyCart,
    UserInfo,
    setUserInfo,
    getUserDetails,
    categoryAll
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
