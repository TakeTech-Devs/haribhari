import React from 'react';
import Header from './HeaderComponent';
import Index from './IndexComponent';
import Category from './CategoryComponents';
import Products from './ProductsComponent';
import UpperFooter from './UpperFooterComponent';
import Footer from './FooterComponent';
import axios from 'axios';
// import {Route} from  'react-router-dom';


class Main extends React.Component {

  async componentDidMount(){
    const responese = await axios.get('http://localhost:4000/product');
    console.log(responese);
  }
  render(){
  
    return (
      <div>
        <Header/>
        <Index />
        <Category/>
        <Products />
        <UpperFooter/>
        <Footer/>
        {/* <Login/> */}
      </div>
    );
  }
}

export default Main;