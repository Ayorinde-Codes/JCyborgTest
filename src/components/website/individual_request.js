import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link } from "react-router-dom";
import Footer from './footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import axios from 'axios'

import validate from './validation/FormValidationRules';

import FlashMessage from 'react-flash-message'



export default function IndividualRequest() {

    const [dob, setDob] = useState(new Date());
    const [email, setEmail] = useState("");
    const [phone, setPhone]= useState("");
    const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [middlename, setMiddlename] = useState("");
	const [address, setAddress] = useState("");
    const [state, setState]= useState('');
	const [city, setCity]= useState('');    
    const [zipcode, setZipcode]= useState('');
    const [entityCovidVaccination, setEntityCovidVaccination]= useState('');
    const [addressCovidVaccination, setAddressCovidVaccination]= useState('');
    const [phoneVaccination, setPhoneVaccination]= useState('');
    const [organizationNameCovidVaccination, setOrganizationNameCovidVaccination]= useState('');
    const [npiVaccinationNumber, setNpiVaccinationNumber]= useState('');
    const [dateFirstVaccination, setDateFirstVaccination]= useState(new Date());
    const [dateSecondVaccination, setDateSecondVaccination]= useState(new Date());
    const [vaccinationPurpose, setVaccinationPurpose]= useState('');
    const [occupation, setOccupation]= useState('');
    const [travelDate, setTravelDate]= useState(new Date());
    const [startingDestination, setStartingDestination]= useState('');
    const [endingDestination, setEndingDestination]= useState('');
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState('');
    const [selectOrganization, setSelectOrganization] = useState('');
    const [selectOrganizationList, setSelectOrganizationList] = useState('');

    const [cvs, setCvs]= useState([]);
    const [fema, setFema]= useState([]);
    const [publix, setPublix]= useState([]);
    const [walgreen, setWalgreen]= useState([]);
    const [message, setMessage] = useState('');
    const [isSucess, setIsSucess] = useState(false);


    

    useEffect(() => {

        getCvsList();
        getFemaList();
        getPublixList();
        getWalgreenList();

      }, []);
	  

      const getCvsList = () => {
            axios.get('/public/custom_data/cvs.json')
            .then(result => {
                    setCvs(result.data.data)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
      }

      const getFemaList = () => {
            axios.get('/public/custom_data/fema.json')
            .then(result => {
                    
                    setFema(result.data.data)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
        }

        const getPublixList = () => {
            axios.get('/public/custom_data/publix.json')
            .then(result => {
                    setPublix(result.data.data)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
      }

      const getWalgreenList = () => {
            axios.get('/public/custom_data/walgreen.json')
            .then(result => {
                    
                    setWalgreen(result.data.data)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
        }



    const postIndividualRequest = (e) => {
		e.preventDefault();

		var data = {
                dob,
                email,
                phone,
                firstname,
                lastname,
                middlename,
                address,
                state,
                city,
                zipcode,
                entityCovidVaccination,
                addressCovidVaccination,
                phoneVaccination,
                organizationNameCovidVaccination,
                npiVaccinationNumber,
                dateFirstVaccination,
                dateSecondVaccination,
                vaccinationPurpose,
                occupation,
                travelDate,
                startingDestination,
                endingDestination,
		}
		
        let handleError = validate(data)

        if (handleError)
        {
            setErrors(handleError);
        }
        

        setIsSucess(true)
        setMessage('Submitted Successfully');

		

	  }
	  
      const checkboxHandler = () => {
        setConsent(!consent);
      }


const selectOrganizationOption = () => {
{

  let returnResponse = "";

  switch (selectOrganization) 
  {
        case 'cvs': 
        returnResponse = (cvs && cvs.map( (data, index) => { return <option key={index} value={data.name}> {data.name} </option> }) )

          break;

        case 'publix':
        returnResponse = (publix && publix.map( (data, index) => { return <option key={index} value={data.name}> {data.name} </option> }) )

          break;

        case 'fema': 
        returnResponse = (fema && fema.map( (data, index) => { return <option key={index} value={data.name}> {data.name} </option> }) )

          break;
        case 'walgreen': 
        returnResponse = (walgreen && walgreen.map( (data, index) => { return <option key={index} value={data.name}> {data.name} </option> }) )

          break;

      default:
        returnResponse = '';
      break;
  }

  return returnResponse;
 
}
}
    return (
        <div>
            <Header />
            <section className="hero-banner d-flex align-items-center">
                <div className="container text-center">
                    <h2>Individual Request</h2>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/'}> Home </Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Features</li>
                    </ol>
                    </nav>
                </div>
            </section>


            <div className="container mg-top" >

            { isSucess && (<div>
									<FlashMessage duration={5000}>
										<Success>{message}</Success>
									</FlashMessage>
							</div>)

				}
            <div className="welcome-text">
					<h3>We're glad to see you again!</h3>
                    <span>Register here electronically (if you registered using paper or over the phone) <br />
                        <Link to={'/individual_registration'}> 
                            <button className="btn btn-sm btn-primary"> Register here! </button>
                        </Link>
                    </span>

				</div>

            


            {/* <div className="row">
                <div className="col-md-6"> */}

                {/* </div> */}

                {/* <div className="col-md-6">

                </div>

            </div> */}

            <form onSubmit={postIndividualRequest}>

            <p>Already Registered Electronically with a Vaccination Administrator? </p> 

                <div className="col">
                    <div className="row">

                        <div className="col-xl-6 form-group">
                                <div className="submit-field">
                                            <div className="input-with-icon">
                                                <h6> Select the organization from the drop-down list </h6>
                                            <select value={selectOrganization} onChange={e => {setSelectOrganization(e.target.value);}} placeholder="Select the organization from the drop-down list" >
                                                    <option value="fema"> FEMA Mobile Site </option> 
                                                    <option value="publix"> Publix </option> 
                                                    <option value="cvs"> CVS </option> 
                                                    <option value="walgreen"> Walgreen </option> 
                                                </select>
                                                <i className="icon-material-outline-business-center"></i>
                                            </div>
                                </div>
                        </div>

                        <div className="col-xl-6 form-group">
                            <div className="submit-field">
                                            <h6> {selectOrganization} Organization List</h6>
                                        <div className="input-with-icon">
                                            <select value={selectOrganizationList} onChange={e => {setSelectOrganizationList(e.target.value);}} placeholder="Purpose of Vaccination Proof" >
                                                {selectOrganizationOption()}
                                            </select>
                                            <i className="icon-material-outline-business-center"></i>
                                        </div>
                                    </div>
                        </div>
                        


                        <div className="col-xl-6 form-group">
                                <input type="text" name="firstname"  value={firstname || ''} onChange={e => {setFirstname(e.target.value);}} className={`input ${errors.firstname && 'border border-danger'} with-border`}  placeholder="first name"  />
                                {errors.firstname && (
                                    <p className="text-danger">{errors.firstname}</p>
                                 )}
                        </div>

                        <div className="col-xl-6 form-group">
                                <input type="text" name="lastname"  value={lastname} onChange={e => {setLastname(e.target.value);}} className={`input ${errors.lastname && 'border border-danger'} with-border`} placeholder="last name" />
                                {errors.lastname && (
                                    <p className="text-danger">{errors.lastname}</p>
                                 )}
                        </div>

                        <div className="col-xl-6 form-group">
                                <input type="text" name="lastname"  value={middlename} onChange={e => {setMiddlename(e.target.value);}} className={`input ${errors.middlename && 'border border-danger'} with-border`} placeholder="Middle name" />
                                {errors.middlename && (
                                    <p className="text-danger">{errors.middlename}</p>
                                 )}
                        </div>


                        <div className="col-xl-6 form-group">
                                <h6>Date of Birth</h6>
                                <DatePicker  dateFormat="yyyy-MM-dd" selected={dob} onChange={date => setDob(date)} />
                        </div>

                        <div className="col-xl-6 form-group">
                                <input name="phone"  value={phone} onChange={e => {setPhone(e.target.value);}} className={`input ${errors.phone && 'border border-danger'} with-border`} type="number" placeholder="Phone" />
                                {errors.phone && (
                                    <p className="text-danger">{errors.phone}</p>
                                )}
                        </div>


                        <div className="col-xl-6 form-group">
                                <input type="text" name="city"  value={city} onChange={e => {setCity(e.target.value);}} className={`input ${errors.city && 'border border-danger'} with-border`} placeholder="City"  />
                                {errors.city && (
                                    <p className="text-danger">{errors.city}</p>
                                 )}
                        </div>

                        <div className="col-xl-6 form-group">
                                    <input type="text" name="state"  value={state} onChange={e => {setState(e.target.value);}} className={`input ${errors.state && 'border border-danger'} with-border`} placeholder="State"  />
                                    {errors.state && (
                                    <p className="text-danger">{errors.state}</p>
                                 )}
                               
                        </div>

                        <div className="col-xl-6 form-group">
                                    <input type="number" min="0" name="zipcode"  value={zipcode} onChange={e => {setZipcode(e.target.value);}} className={`input ${errors.zipcode && 'border border-danger'} with-border`} placeholder="zip code"  />
                                    {errors.zipcode && (
                                    <p className="text-danger">{errors.zipcode}</p>
                                 )}

                        </div>

                        <div className="col-xl-6 form-group">
                                <input type="text" name="text"  value={entityCovidVaccination} onChange={e => {setEntityCovidVaccination(e.target.value);}} className={`input ${errors.entityCovidVaccination && 'border border-danger'} with-border`} placeholder="Entity Administered Your COVID Vaccination"  />
                                    {errors.entityCovidVaccination && (
                                    <p className="text-danger">{errors.entityCovidVaccination}</p>
                                 )}
                        </div>


                        <div className="col-xl-6 form-group">
                                <input name="phone"  value={phoneVaccination} onChange={e => {setPhoneVaccination(e.target.value);}} className={`input ${errors.phoneVaccination && 'border border-danger'} with-border`} type="number" placeholder="Phone Number of your COVID Vaccination Provider" />
                                {errors.phoneVaccination && (
                                    <p className="text-danger">{errors.phoneVaccination}</p>
                                 )}
                        </div>

                        <div className="col-xl-6 form-group">
                                <textarea cols="30" value={address} onChange={e => {setAddress(e.target.value);}}   rows="5" name="address"  placeholder="Address" className="with-border"></textarea>
                        </div>


                        <div className="col-xl-6 form-group">
                                <textarea cols="30" value={addressCovidVaccination} onChange={e => {setAddressCovidVaccination(e.target.value);}}   rows="5" name="addresscovidvaccination" placeholder="Address of Your COVID Vaccination" className={`input ${errors.addressCovidVaccination && 'border border-danger'} with-border`} ></textarea>
                                {errors.addressCovidVaccination && (
                                    <p className="text-danger">{errors.addressCovidVaccination}</p>
                                )}
                        </div>


                        <div className="col-xl-6 form-group">
                            <i className="icon-material-baseline-mail-outline"></i>
                            <input 
                                type="text" 
                                className={`input ${errors.email && 'border border-danger'} with-border`} 
                                name="email" 
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}  id="emailaddress" placeholder="Email Address" />

                                {errors.email && (
                                    <p className="text-danger">{errors.email}</p>
                                 )}
                        </div>

                        <div className="col-xl-6 form-group">
                                    <input type="text" name="text"  value={organizationNameCovidVaccination} onChange={e => {setOrganizationNameCovidVaccination(e.target.value);}} className={`input ${errors.organizationNameCovidVaccination && 'border border-danger'} with-border`} placeholder="Organization Name of Your COVID Vaccination"  />
                                    {errors.organizationNameCovidVaccination && (
                                    <p className="text-danger">{errors.organizationNameCovidVaccination}</p>
                                 )}
                        </div>
                        
                        <div className="col-xl-6 form-group">
                                <input name="phone"  value={npiVaccinationNumber} onChange={e => {setNpiVaccinationNumber(e.target.value);}} className="with-border" type="number" placeholder="Phone Number of your COVID Vaccination Provider" />
                        </div>

                        <div className="col-xl-6 form-group">
                                <h6>Date of Your 1st Vaccination</h6>
                                <DatePicker className="with-border"  dateFormat="yyyy-MM-dd" selected={dateFirstVaccination} onChange={date => setDateFirstVaccination(date)} />
                        </div>

                        <div className="col-xl-6 form-group">
                                <h6>Date of Your 2nd Vaccination</h6>
                                <DatePicker  dateFormat="yyyy-MM-dd" selected={dateSecondVaccination} onChange={date => setDateSecondVaccination(date)} />
                        </div>


                        <div className="col-xl-6 form-group">
                            <div className="submit-field">
                                            <h6>Purpose of Vaccination Proof</h6>
                                        <div className="input-with-icon">
                                            <select value={vaccinationPurpose} onChange={e => {setVaccinationPurpose(e.target.value);}} placeholder="Purpose of Vaccination Proof" >
                                                <option value="travel"> Travel </option> 
                                                <option value="work"> Work </option> 
                                                <option value="medical record"> Medical Record </option> 
                                            </select>
                                            <i className="icon-material-outline-business-center"></i>
                                        </div>
                                    </div>
                        </div>
                        
                        {/* if selected vaccination Purpose is work display occupation */}

                        <div className="col-xl-6 form-group" style={{ display: `${vaccinationPurpose == "work" ? "block" : "none"}` }}>
                            <div className="submit-field">
                                <h6>Occupation</h6>
                                <div className="input-with-icon">
                                    <input type="text" name="text"  value={occupation} onChange={e => {setOccupation(e.target.value);}} className={`with-border`} placeholder="Occupation" />
                                <i className="icon-material-outline-location-on"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 form-group">
                        <div className="submit-field">
                                <h6>Date of Your Travel</h6>
                                <DatePicker  dateFormat="yyyy-MM-dd" selected={travelDate} onChange={date => setTravelDate(date)} />
                            </div>
                        </div>

                        <div className="col-xl-6 form-group">
                            <div className="submit-field">
                                            <h6>Starting Destination</h6>
                                        <div className="input-with-icon">
                                            <select value={startingDestination} onChange={e => {setStartingDestination(e.target.value);}} placeholder="Starting Destination"  className={`input ${errors.startingDestination && 'border border-danger'} with-border`}>
                                                <option value="country"> Country </option> 
                                                <option value="city"> City </option> 
                                                <option value="state"> State </option> 
                                            </select>

                                        </div>
                                        {errors.startingDestination && (
                                    <p className="text-danger">{errors.startingDestination}</p>
                                 )}
                                    </div>
                        </div>

                        <div className="col-xl-6 form-group">
                            <div className="submit-field">
                                            <h6>Ending Destination</h6>
                                        <div className="input-with-icon">
                                        <select value={endingDestination} onChange={e => {setEndingDestination(e.target.value);}} placeholder="Starting Destination" className={`input ${errors.endingDestination && 'border border-danger'} with-border`} >
                                                <option value="country"> Country </option> 
                                                <option value="city"> City </option> 
                                                <option value="state"> State </option> 
                                            </select>
                                        </div>
                                        {errors.endingDestination && (
                                    <p className="text-danger">{errors.endingDestination}</p>
                                 )}
                                    </div>
                        </div>


                    </div>
                    
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="agree" onChange={checkboxHandler} />
                            <label className="custom-control-label" htmlFor="agree"> 
                                    <small style={{ color: "red" }}> By entering the above information, I consent to authorize Integral Healthcare Foundation, its personnel and contractors to contact 
                                            my vaccination provider to research, validate my COVID vaccination record and prepare the proof of COVID vaccination on my behalf. 
                                    </small>
                            </label>
                        </div>

                    <button className="btn btn-primary btn-block" type="submit" disabled={!consent}> Submit </button>

                    <br />

                    </div>
            </form>

            </div>

            <Footer />
        </div>
    )
}
