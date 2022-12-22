import React from 'react';
import HeaderClass from './HeaderComponent';
import Index from './IndexComponent';
import Category from './CategoryComponents';
import Products from './ProductsComponent';
import UpperFooter from './UpperFooterComponent';
import Footer from './FooterComponent';
import Header from './Header';


class Home extends React.Component {
  render(){
  
    return (
      <div>
        {/* <HeaderClass /> */}
        <Header/>
        <Index/>
        <Category/>
        <Products/>
        <UpperFooter/>
        <Footer/>
      </div>
    );
  }
}

export default Home;