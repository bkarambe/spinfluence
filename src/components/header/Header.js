import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="jumbotron">
          <img src={require('../../images/logo.png')} style={{height:'50px', width:'50px'}}/>
            <h1>SpinFluence Test Series</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
