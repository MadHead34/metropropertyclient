import React, { Component } from 'react';
import axios from 'axios';
class Property extends Component {

    state = {  property:[]}

     componentDidMount() {
      axios.get('http://localhost:8000/api/test')
      .then(response => {
        const property = response.data;
        this.setState({ property });
        console.log("properties",property);
      })
      .catch(error => {
        console.log(error);
      });
    } 
    render() { 
       
        return (
            <div className="container mt-5">
            <div className="row">
             <div className="col d-flex">
             {this.state.property.map(prop=>(
                
                    <div key={prop.id} className="card" style={{width: "18rem",margin:"10px"}}>
                        <img src={prop.img} className="card-img-top" alt="..."/>

                        <div className="card-body">
                            <p className="card-title"><i className="fa fa-bed me-2" aria-hidden="true"></i>{prop.bedroom}</p>
                            <p className="card-text"><i className="fa fa-bath me-2" aria-hidden="true"></i>
 {prop.bathroom}</p>
                            <p className="card-text"><i className="fa fa-car me-2" aria-hidden="true"></i>
 {prop.parking}</p>
                        </div>

                </div>
                ))}
             </div>
               
          </div>
          </div>
        );
    }
}
 
export default Property;