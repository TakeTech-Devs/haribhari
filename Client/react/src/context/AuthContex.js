import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext([]);
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);
    const [billingInfo, setbillingInfo] = useState({});
    const onAddProduct = (product) => {
        const exist = cartItems.find((x) => x._id === product._id);
        const token = JSON.parse(localStorage.getItem('token'))

        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
            axios.post('http://localhost:4000/cart/', { qty: exist.qty, product_id: product._id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                },

            )
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
            axios.post('http://localhost:4000/cart/', { qty: 1, product_id: product._id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                },

            )
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
        getMyCart()
    }, [])
    const getMyCart = () => {
        const token = JSON.parse(localStorage.getItem('token'))
        // console.log(token)
        axios.get('http://localhost:4000/cart', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            console.log(res, "resd")
            setbillingInfo(res.data.info)
            setCartItems(res.data.info.items)
        }).catch(err => {
            localStorage.removeItem('token')
        })
    }

    const handleRefresh = () => {
        window.location.reload(true);
    }
    const handelLogout = () => {
        localStorage.removeItem('token')
        handleRefresh()
    }

    const value = {
        onAddProduct,
        onRemoveProduct,
        cartItems,
        setCartItems,
        handelLogout,
        handleRefresh,
        billingInfo, setbillingInfo,
        getMyCart
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
