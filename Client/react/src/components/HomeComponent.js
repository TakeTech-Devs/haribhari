import React from 'react';
import Header from './HeaderComponent';
import Index from './IndexComponent';
import Category from './CategoryComponents';
import Products from './ProductsComponent';
import UpperFooter from './UpperFooterComponent';
import Footer from './FooterComponent';


class Home extends React.Component {
  render(){
  
    return (
      <div>
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