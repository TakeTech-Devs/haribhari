import React from 'react';
import Header from './HeaderComponent';
import Index from './IndexComponent';
import Category from './CategoryComponents';
import UpperFooter from './UpperFooterComponent';
import Footer from './FooterComponent';
// import {Route} from  'react-router-dom';


class Main extends React.Component {

  render(){
  
    return (
      <div>
        <Header/>
        <Index />
        <Category/>
        <UpperFooter/>
        <Footer/>

      </div>
    );
  }
}

export default Main;