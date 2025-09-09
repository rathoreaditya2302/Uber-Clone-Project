import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CaptainSignup = () => {
  
  const navigate = useNavigate();


  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ vehicleColor, setVehicleColor ] = useState('');
  const [ vehiclePlate, setVehiclePlate ] = useState('');
  const [ vehicleCapacity, setVehicleCapacity ] = useState('');
  const [ vehicleType, setVehicleType ] = useState('');

  const { captain , setCaptain } = React.useContext(CaptainDataContext);
  
  const submitHandelor = async (e) => {
    e.preventDefault();
  
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType
      }
    }
    

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    
    if(response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-login');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>

        <img className= 'w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Diver Logo" />
        
        <form onSubmit={ (e) => {
          submitHandelor(e)
        }}>

          <h3 className='text-lg font-medium mb-2 '>What's our Captain's name</h3>
          <div className= 'flex gap-2 mb-4'>
            <input      
              id= "firstName"
              name= "firstName"
              required 
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              type="text" 
              placeholder='First name'
              value={firstName}
              onChange= {(e) => {
                setFirstName(e.target.value)
              }}
            />
             
            <input       
              id= "lastName"
              name= "lastName"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              type="text" 
              placeholder='Last name'
              value={lastName}
              onChange= {(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>

          <h3 className='text-lg font-medium mb-1 '>What's our Captain email</h3>
          <input
            id= "email"
            name= "email"
            required 
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            autoComplete="email"
            placeholder='email@example.com'
            value= {email} 
            onChange= {(e) => {
              setEmail(e.target.value)
            }}
          />

          <h3 className='text-lg font-medium mb-1 '>Enter Password</h3>

          <input
            id= "password"
            name= "password"
            
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            autoComplete="current-password"
            placeholder='password'
            value= {password} 
            onChange= {(e) => {
              setPassword(e.target.value)
            }}
          />

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className=' flex gap-2 mb-3'>
            <input
              id="vehicleColor"
              name="vehicleColor"
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xm placeholder:text-base'
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              id="vehiclePlate"
              name="vehiclePlate"
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xm placeholder:text-base'
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className=' flex gap-2 mb-6'>  
            <input
              id="vehicleCapacity"
              name="vehicleCapacity"
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xm placeholder:text-base'
              type="number"
              min="1"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              id="vehicleType"
              name="vehicleType"
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xm'
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
          </div>
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full ' > Create Captain Account </button>
            
          <p className='text-center'> Already have a account?<Link to= '/captain-login' className='text-blue-600'>Login here </Link></p>
        
        </form>
      </div>
      <div>
        <p className='text-xs leading-tight text-gray-500 text-center px-10'> 
          This site is protected by reCAPTCHA and the <span className='underline'>the Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>
        </p> 
      </div>
    </div>
  )

}

export default CaptainSignup
