import React, { Component } from 'react';
import './Home.css';
import Data from '../../data.json'
class Home extends Component {
  render() {
    return (
      <div className="container" style={{margin: "0px 300px"}}>
        {
          Data.data.map((list) => {
            return (
              <table className="table">
                <tr>
                  <td style={{width:"10px"}}>Q.{list.id}</td>
                  <td style={{margin:"0px 70px", float:"left", width:"500px"}}>{list.question}</td>
                </tr>
                <tr>
                  <td style={{width:"10px"}}>Answer:</td>
                  <td style={{margin:"0px 70px", float:"left", width:"500px"}}><textarea style={{width:'500px'}} class="form-control"></textarea></td>
                </tr>
              </table>
            );
          })
        }
        <button type="button" class="btn btn-success" style={{margin:'10px 300px', float:"left"}}>Submit</button>
      </div>
    );
  }
}

export default Home;
