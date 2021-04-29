import React from 'react'
import { Link } from 'react-router-dom'

export default function VaccineProof() {
    return (
        <div>
            
            <section>
            <div className="container" >
               
                        <div className="row">
                           <div className="col-lg-4 col-md-4 col-sm-4">
                           <img src="/assets/images/location.jpg" height="100px" width="100px" />
                              <h5>Individual Registration</h5>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                 </p>
                                 <Link to={'/individual_registration'}> 
                                       <button className="btn btn-sm btn-info" > Register here</button> 
                                 </Link>
                           </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                              <img src="/assets/images/location.jpg" height="100px" width="100px" />
                              <h5>Individual Request</h5>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                 </p>
                                 <Link to={'/individual_request'}> 
                                       <button className="btn btn-sm btn-info" > Register here</button> 
                                 </Link>
                           </div>
                           <div className="col-lg-4 col-md-4 col-sm-4">
                           <img src="/assets/images/location.jpg" height="100px" width="100px" />

                              <h5>Provider Registration</h5>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                 </p>                              
                                 <Link to={'/provider_registration'}> 
                                       <button className="btn btn-sm btn-info" > Register here</button> 
                                 </Link>
                           </div>
                        </div>
                     </div>
                  
         </section>
        </div>
    )
}
