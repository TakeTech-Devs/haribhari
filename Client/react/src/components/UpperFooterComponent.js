import React, { Component } from 'react'

function UpperFooter(props) {
    return (
      <div className="UpperFooter">
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h1 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</p>
                <span className="firstCircle"></span>
                <span className='secondCircle'></span>
                <span className='thirdCircle'></span>
            </div>
        </div>
      </div>
    )
}
    

export default UpperFooter