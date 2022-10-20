import React from 'react';
import Header from './HeaderComponent';
import Index from './IndexComponent';
import Category from './CategoryComponents';
import UpperFooter from './UpperFooterComponent';
import Login from './LoginComponent';
import Footer from './FooterComponent';

import {Route} from  'react-router-dom';


class Main extends React.Component {

  render(){

    const LoginPage =()=>{
      return(
        <Login/>
      );
    }
    return (
      <div>
        <Header/>
        <Index />
        <Category/>
        <UpperFooter/>
        <Footer/>
        <Route exact path="/login" component={LoginPage}/>

      </div>
    );
  }
}

export default Main;