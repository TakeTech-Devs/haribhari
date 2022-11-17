import React from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Disclaimer from './DisclaimerComponent';
import FAQ from './FaqComponent';
import Grievance from './GrievanceComponent';
import Payment from './PaymentComponent';
import Privacy from './PrivacyComponent';
import Quality from './QualityComponent';
import Vision from './VisionComponent';
import axios from 'axios';
import {Route, Routes} from  'react-router-dom';


class Main extends React.Component {

  async componentDidMount(){
    const responese = await axios.get('http://localhost:4000/product');
    console.log(responese);
  }
  render(){
    return (
      <>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/disclaimer" element={<Disclaimer/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/grievance" element={<Grievance/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/quality" element={<Quality/>}/>
            <Route path="/vision" element={<Vision/>}/>
          </Routes>
        <Footer/>
      </>   
    );
  }
}

export default Main;