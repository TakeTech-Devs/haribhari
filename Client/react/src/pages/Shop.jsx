import React from 'react'
import CategoryProducts from '../components/CategoryProductsComponent'
import Footer from '../components/FooterComponent'
import Header from '../components/Header'
import CategoryNav from '../components/ProductCategoryNavComponent'
import UpperFooter from '../components/UpperFooterComponent'

const Shop = () => {
    return (
        <>
            <Header />
            <CategoryNav />
            <CategoryProducts />
            <UpperFooter />
            <Footer />
        </>
    )
}

export default Shop