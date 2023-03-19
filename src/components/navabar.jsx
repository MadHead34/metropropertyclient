import React,{Component} from 'react';
class Navbar
 extends Component {
  state = { 

   } 
  render() { 
    return (
      <div>
        <div className="container-fluid bg-light">
          <div className="container">
            <div id="nav" className="row">
              <div className="col-4 ">
                <div className="col-4 ">
                  <ul className="d-flex ">
                    <li>
                      <p>Contact</p>
                    </li>
                    <li>
                      <p>09987924</p>
                    </li>
                    <li>|</li>
                    <li>
                      <p>+64212312</p>
                    </li>
                  </ul>
                </div>
                <div className="col-4 ">
                  <ul className="d-flex icons">
                    <i
                      className="fa fa-facebook-official"
                      aria-hidden="true"
                    ></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </ul>
                </div>
              </div>
              <div className="col-8 d-flex justify-content-end">
                <button className="btn btn-primary">Login/Signup</button>
              </div>
            </div>
          </div>
        </div>

       

        
      </div>
      
    );
  }
}
 
export default Navbar
;
