import React from 'react';

const PropertySearchFrom = () => {
     const str = ">>";
    return ( 

        <div className="container-fluid">
            <div className="container mt-5">
                <div className="row">
                    <ul className="property-search d-flex">
                        <li>Home</li>
                        <li>  {str} Property Search </li>
                        <li> {str} Search Result </li>
                    </ul>
                   
                </div>
            </div>
            <div className="container mt-5">
            <label >Location</label>
                <div className="row">

                    <div className="col">
                   
                        <select className="form-select" aria-label="Default select example">
                        <option default>Aucakland</option>
                        <option value="1">Hamilton</option>
                        <option value="2">Wellinton</option>
                        </select>
                    </div>
                    <div className="col">
                   
                        <select className="form-select" aria-label="Default select example">
                        <option default>District</option>
                        <option value="1">Auckland City</option>
                        <option value="2">Manukau City</option>

                        </select>
                    </div>
                    <div className="col">
                   
                        <select className="form-select" aria-label="Default select example">
                        <option default>Suburb</option>
                        <option value="1">Mount Eden</option>
                        <option value="2">Epsom</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-select" aria-label="Default select example">
                        <option default>Property Type</option>
                        <option value="1">Residential</option>
                        <option value="2">Apartments</option>
                        </select></div>
                </div>
            </div>
            <div className="container mt-5">
                
                <div className="row searchform">
    
                    <div className="col-3">
                             <label >Price</label>
                    <input type="text" className="form-control"/>
                       
                    </div>
                    <div className="col">
                         <label >Bedroom</label>
                        <select className="form-select" aria-label="Default select example">
                        <option value="1">2</option>
                        <option value="2">3</option>

                        </select>
                    </div>
                    <div className="col">
                        <label >Bathroom</label>
                        <select className="form-select" aria-label="Default select example">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        </select>
                    </div>

                    <div className="col-3">
                    <label ></label>
                    <input type="text" className="form-control" placeholder="keyword" />
                       
                    </div>
                    <div className="col-3">
                    <label ></label>
                            <select className="form-select" aria-label="Default select example">
                                <option default>Extra Feature</option>
                            </select>
                        </div>
                </div>
            </div>
        </div>
     );
    
}
 
export default PropertySearchFrom;

