export default function validate(values) {
    let errors = {};
    
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if(!values.firstname){
      
      errors.firstname = "firstname is required";
    }
    if(!values.middlename){
        
        errors.middlename = "middlename is required";
      }

      if(!values.lastname){
        
        errors.lastname = "lastname is required";
      }

      if(!values.phone){
        
        errors.phone = "phone is required";
      }

      if(!values.address){
        
        errors.address = "address is required";
      }

      if(!values.city){
        
        errors.city = "city is required";
      }

      if(!values.state){
        
        errors.state = "state is required";
      }
          
      if(!values.zipcode){
        
        errors.zipcode = "zipcode is required";
      }        
      if(!values.entityCovidVaccination){
        
        errors.entityCovidVaccination = "entityCovidVaccination is required";
      }        
      
      if(!values.addressCovidVaccination){
        
        errors.addressCovidVaccination = "addressCovidVaccination is required";
      }     
      if(!values.phoneVaccination){
        
        errors.phoneVaccination = "phoneVaccination is required";
      }      
      if(!values.organizationNameCovidVaccination){
        
        errors.organizationNameCovidVaccination = "Covid Vaccination organization name is required";
      }      
      if(!values.startingDestination){
        
        errors.startingDestination = "starting Destination is required";
      }

      if(!values.endingDestination){
        
        errors.endingDestination = "ending Destination is required";
      }


    return errors;
  };
  

