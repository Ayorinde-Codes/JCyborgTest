import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'


export default function Health() {

    const [doctors, setDoctors]= useState([]);
    const [hospitals, setHospitals]= useState([]);
    const [isError, setIsError] = useState(false);
	const [isSucess, setIsSucess] = useState(false);
    const [message, setMessage] = useState(false);




    useEffect(() => {
        let scripts = [
            { src: "/assets/js/custom.js" },
        ]

        scripts.map(item => { 
            const script = document.createElement("script")
            script.src = item.src
            script.async = true
            document.body.appendChild(script)
        }) 

        getDoctors();

        getHospitals();
      }, []);
	  

      const getDoctors = () => {
            axios.get('/public/custom_data/health/doctors.json')
            .then(result => {

                    console.log(result.data.doctors)
                    setDoctors(result.data.doctors)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
      }

      const getHospitals = () => {
            axios.get('/public/custom_data/health/hospitals.json')
            .then(result => {
                    console.log(result.data.hospitals)
                    
                    setHospitals(result.data.hospitals)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
        }




        const doctorsGrid = () => {
            return doctors && doctors.map(({ index, specialization, lastname, firstname, phone_numer, sex }) => {
                return (
                        <article key={phone_numer}>
                            <div align="center"> <img src="/assets/images/doctors.png" alt="tshirt photo" style={{height : "150px", width : "150px"}}/> </div>
                            <div className="text">
                                <h3>specialization: {specialization} </h3>
                                <p> Firstname: {firstname} </p>
                                <p> Lastname: {lastname} </p>
                                <p> Phone: {phone_numer} </p>
                                <p> Sex: {sex} </p>

                            </div>
                        </article>
                )
            })
        }

        const hospitalGrid = () => {
            return hospitals && hospitals.map(({ index, address, lga, name, type }) => {
                return (
                        <article key={name}>
                            <div align="center"> <img src="/assets/images/hospital.png" alt="tshirt photo" style={{height : "150px", width : "150px"}}/> </div>
                            <div className="text">
                                <h3> {name} </h3>
                                <p> <b> type: </b> {type} </p>
                                <p> <b> lga: </b> {lga} </p>
                                <p> <b> address: </b> {address} </p>
                            </div>
                        </article>
                )
            })
        }

      return (
        <div>
            
            <div className="dashboard-container">


            <div className="dashboard-content-container" data-simplebar>
				<div className="dashboard-content-inner" >
					
					<div className="dashboard-headline">
						<h3>Health Data</h3>

						<nav id="breadcrumbs" className="dark">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Health</a></li>
							</ul>
						</nav>
					</div>
	
			<div className="row">

				<div className="col-xl-12">
					<div className="dashboard-box margin-top-0">

						<div className="headline">
							<h3><i className="icon-material-outline-account-circle"></i> Health</h3>
						</div>

						<div className="content with-padding padding-bottom-0">

							<div className="row">

								
							</div>

						</div>
					</div>
				</div>


				</div>


					<div className="row">


						<div className="col-xl-12">

                        <div id="test1" className="dashboard-box">

                            <div className="headline">
                                <h3><i className="icon-line-awesome-hospital-o"></i> Doctors </h3>
                            </div>

						<div className="content with-padding padding-bottom-0">

                        <div className="container"> 

                            <main className="grid">

                                { doctorsGrid() }

                            </main>
                        </div> 
                        </div>

                        <br />
                        

 
                        </div>

						</div>
                    </div>


                        <div className="row">
						    <div className="col-xl-12">

                                <div id="test1" className="dashboard-box">

                                    <div className="headline">
                                        <h3><i className="icon-line-awesome-hospital-o"></i> Hospitals </h3>
                                    </div>

                                    <div className="content with-padding padding-bottom-0">

                                    <div className="container"> 

                                        <main className="grid">

                                            { hospitalGrid() }

                                        </main>
                                    </div> 
                                    </div>

                                    <br />

                            </div>
					    </div>

			</div>
   

		</div>
	</div>
    </div>


        
        </div>
    )
}