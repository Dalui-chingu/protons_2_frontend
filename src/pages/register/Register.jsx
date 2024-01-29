import React, { useState } from 'react';
import Uploader from '../../Components/File_Uploader'
import Footer from '../../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/overall_css.css';
import evimg from "/ev_charge_station.png";
import Navbar from '../../Components/Navbar';
function Register() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [modelName, setModelName] = useState('');
  const [chargingType, setChargingType] = useState('');
  const [license, setLicense] = useState('');
  const [mileage, setMileage] = useState('');
  const [batteryCapacity, setBatteryCapacity] = useState('');

  const handleVehicleTypeChange = (value) => {
    setVehicleType(value);
    setModelName('');
  
   // Check if the selected vehicle type is 'Car' and the selected model is one of the specified models
  if (value === 'Car') {
    // Check the specific model and set default values accordingly
    if (modelName === "Tata EV Model") {
      setMileage('50');
      setBatteryCapacity('300');
    } else if (modelName === 'Maruti Suzuki EV Model') {
      setMileage('250');
      setBatteryCapacity('40');
    } else if (modelName === 'Hyundai EV Model') {
      setMileage('350'); // Set the default mileage to 350
      setBatteryCapacity('60'); // Set the default battery capacity to 60
    } else if (modelName === 'Toyota EV Model') {
      setMileage('320'); // Set the default mileage to 320
      setBatteryCapacity('55'); // Set the default battery capacity to 55
    } else if (modelName === 'Mahindra EV Model') {
      setMileage('280'); // Set the default mileage to 280
      setBatteryCapacity('45'); // Set the default battery capacity to 45
    }
  }else if (value === 'Scooter') {
    // Check the specific model for scooters and set default values accordingly
    if (modelName === 'Hero Electric Scooter Model') {
      setMileage('80'); // Set the default mileage to 80
      setBatteryCapacity('5'); // Set the default battery capacity to 5
    } else if (modelName === 'Ather Scooter Model') {
      setMileage('100'); // Set the default mileage to 100
      setBatteryCapacity('7'); // Set the default battery capacity to 7
    } else if (modelName === 'Bajaj Scooter Model') {
      setMileage('90'); // Set the default mileage to 90
      setBatteryCapacity('6'); // Set the default battery capacity to 6
    } else if (modelName === 'Bounce Scooter Model') {
      setMileage('80'); // Set the default mileage to 80
      setBatteryCapacity('5'); // Set the default battery capacity to 5
    } else if (modelName === 'Vida Scooter Model') {
      setMileage('90'); // Set the default mileage to 90
      setBatteryCapacity('6'); // Set the default battery capacity to 6
    }
    // Add more conditions for other scooter models if needed
  }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to the server
    const userData = {
      username: userName,
      email,
      pwd: password,
      country,
      license,
      vehicletype: vehicleType,
      modelname: modelName,
      mileage: Number(mileage),
      batterycapacity: Number(batteryCapacity),
      chargingtype: chargingType,
    };
    
    // Send data to the server for registration
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
    
      if (response.ok) {
        // Handle successful registration
        console.log(response);
        console.log('Registration successful!');
        navigate('/home');
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    
  };



  return (
    <>
    <Navbar/>
      <section className="contact-page" style={{paddingTop:'50px'}}>
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Create an Account</h2>
              <p>
                Discover the future of convenient electric vehicle charging with our user-friendly application. Locate nearby charging stations and manage your charging sessions effortlessly for a seamless driving experience.
              </p>
              <img src={evimg} width={'100%'} alt="EV Charging Station" />
            </div>

            <div className="contact-div__form">
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder='E.g: "Joe Shmoe"'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>
                  Password <b>*</b>
                </label>
                <input
                  type="password"
                  placeholder="Must have 12 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <label>
                  Mobile Number <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder='+91 8866225678'
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />

                <label>
                  Country <b>*</b>
                </label>
                <select
                  name="country"
                  id="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">select...</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="America">America</option>
                </select>

                <label>
                  Vehicle Type <b>*</b>
                </label>
                <select
                  name="vehicleType"
                  id="Vehicle type"
                  value={vehicleType}
                  onChange={(e) => handleVehicleTypeChange(e.target.value)}
                >
                  <option value="">select...</option>
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                  <option value="Scooter">Scooter</option>
                  <option value="Other">Other</option>
                </select>

                {vehicleType === 'Car' && (
                  <>
                    <label>
                      Model Name <b>*</b>
                    </label>
                    <select
                      name="modelName"
                      id="modelName"
                      value={modelName}
                      onChange={(e) => setModelName(e.target.value)}
                    >
                      <option value="">select...</option>
                      <option value="Tata EV Model">Tata EV Model</option>
                      <option value="Maruti Suzuki EV Model">Maruti Suzuki EV Model</option>
                      <option value="Hyundai EV Model">Hyundai EV Model</option>
                      <option value="Toyota EV Model">Toyota EV Model</option>
                      <option value="Mahindra EV Model">Mahindra EV Model</option>

                      <option value="Others">Others</option>
                    </select>
                  </>
                )}
                {vehicleType === 'Scooter' && (
                  <>
                    <label>
                      Model Name <b>*</b>
                    </label>
                    <select
                      name="modelName"
                      id="modelName"
                      value={modelName}
                      onChange={(e) => setModelName(e.target.value)}
                    >
                      <option value="">select...</option>
                      <option value="Hero Electric Scooter Model">Hero Electric Scooter Model</option>
                      <option value="Ather Scooter Model">Ather Scooter Model</option>
                      <option value="Bajaj Scooter Model">Bajaj Scooter Model</option>
                      <option value="Bounce Scooter Model">Bounce Scooter Model</option>
                      <option value="Vida Scooter Model">Vida Scooter Model</option>
                     
                      <option value="Others">Others</option>
                      {/* Add more scooter models here */}
                    </select>
                  </>
                )}

                {modelName === 'Others' && (
                  <>
                    <label>
                      Mileage Ranges <b>*</b>
                    </label>
                    <input
                      type="text"
                      placeholder='Enter Mileage Ranges'
                      value={mileage}
                      onChange={(e) => setMileage(e.target.value)}
                    />
                    <label>
                      Battery Capacity Level <b>*</b>
                    </label>
                    <input
                      type="text"
                      placeholder='Enter Battery Capacity Level'
                      value={batteryCapacity}
                      onChange={(e) => setBatteryCapacity(e.target.value)}
                    />
                  </>
                )}

                <label>
                  Charging Type <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder='Ex: Type 2'
                  value={chargingType}
                  onChange={(e) => setChargingType(e.target.value)}
                />

                <label>Upload your license here</label>
                <Uploader
                  onUpload={(file) => setLicense(file)}
                />
                <div style={{fontSize:'16px',paddingBottom:'30px'}}>
                <p>Already have an account? <span ><Link style={{color:'red'}} to={'/login'}>Sign In</Link></span> </p> 
                </div>

                <button type="submit" >
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Register
                </button>
              </form>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'lightgray', height: '3px' }} ></div>
        <Footer />
      </section>
    </>
  );
}

export default Register;
