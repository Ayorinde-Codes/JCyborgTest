import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link } from "react-router-dom";
import Footer from './footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import validate from './validation/FormValidationRules';

import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import FlashMessage from 'react-flash-message'




export default function ProviderRegistration() {

	const [npiNumber, setNpiNumber] = useState("");
	const [address, setAddress] = useState("");
    const [state, setState]= useState('');
	const [city, setCity]= useState('');    
    const [zipcode, setZipcode]= useState('');
    const [vaccinationTypeProvided, setVaccinationTypeProvided]= useState('');
    const [entityCovidVaccination, setEntityCovidVaccination]= useState('');
    const [addressCovidVaccination, setAddressCovidVaccination]= useState('');
    const [phoneVaccination, setPhoneVaccination]= useState('');
    const [dateFirstVaccination, setDateFirstVaccination]= useState(new Date());
    const [dateLastVaccination, setDateLastVaccination]= useState(new Date());
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState('');
    
    const [message, setMessage] = useState('');
    const [isSucess, setIsSucess] = useState(false);


    const postProviderRegistration = (e) => {
		e.preventDefault();

		var data = {
                address,
                state,
                city,
                zipcode,
                entityCovidVaccination,
                addressCovidVaccination,
                phoneVaccination,
                dateFirstVaccination,
                dateLastVaccination,
                npiNumber
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

    
    
    return (
        <div>
            <Header />
            <section className="hero-banner d-flex align-items-center">
                <div className="container text-center">
                    <h2> Provider Registration</h2>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/'}> Home </Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Features</li>
                    </ol>
                    </nav>
                </div>
            </section>

           
            <div className="container mg-top">

            { isSucess && (<div>
									<FlashMessage duration={5000}>
										<Success>{message}</Success>
									</FlashMessage>
							</div>)

				}

            <form onSubmit={postProviderRegistration}>

                <div className="col">
                    <div className="row">

                        <div className="col-xl-6 form-group">
                                <input type="text" name="NPINumber"  value={npiNumber} onChange={e => {setNpiNumber(e.target.value);}} className={` with-border`} placeholder="NPI Number" />
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
                                <h6>Date of Your Organization’s 1st Vaccination</h6>
                                <DatePicker className="with-border"  dateFormat="yyyy-MM-dd" selected={dateFirstVaccination} onChange={date => setDateFirstVaccination(date)} />
                        </div>

                        <div className="col-xl-6 form-group">
                                <h6>Date of Your Organization’s Last Vaccination</h6>
                                <DatePicker  dateFormat="yyyy-MM-dd" selected={dateLastVaccination} onChange={date => setDateLastVaccination(date)} />
                        </div>


                        <div className="col-xl-6 form-group">
                                <div className="input-with-icon">
                                    <input type="text" name="text"  value={vaccinationTypeProvided} onChange={e => {setVaccinationTypeProvided(e.target.value);}} className={`with-border`} placeholder="Types of Vaccination Provided" />
                            </div>
                        </div>

                        </div>

                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="agree" onChange={checkboxHandler} />
                            <label className="custom-control-label" htmlFor="agree"> 
                                    <small style={{ color: "red" }}> By entering the above information, I consent to authorize Integral Healthcare Foundation, its personnel and contractors to provide vaccination proof to 
                                                                    individuals who signed consent and authorized Integral Healthcare Foundation, its personnel and contractors to research, validate my COVID vaccination record
                                                                    and prepare the proof of COVID vaccination on their behalf. 
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


// NPI Number
// Address*
 
// City*
 
// State*
 
// Zip Code*
 
// Entity Administered Your COVID Vaccination*
 
// Address of Your COVID Vaccination*
 
// Phone Number of your COVID Vaccination Provider*
 
// Date of Your Organization’s 1st Vaccination*


 
// Date of Your Organization’s Last Vaccination*
 
// Types of Vaccination Provided
 

// By entering the above information, I consent to authorize Integral Healthcare Foundation, its personnel and contractors to provide vaccination proof to individuals who signed consent and authorized Integral Healthcare Foundation, its personnel and contractors to research, validate my COVID vaccination record and prepare the proof of COVID vaccination on their behalf.
