import React from 'react';
import Header from './HeaderComponent';
import Index from './IndexComponent';
import UpperFooter from './UpperFooterComponent';
import Footer from './FooterComponent';

// import {Switch, Route, Redirect} from  'react-router-dom';


class Main extends React.Component {

  render(){
    return (
      <div>
        <Header/>
        <Index />
        <UpperFooter/>
        <Footer/>
      </div>
    );
  }
}

export default Main;