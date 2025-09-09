import React, { use, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'

const UserSignup = () => {

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('')
  const [ userData , setUserData ] = useState({});

  const navigate = useNavigate();  

  const [ user, setUser ] = React.useContext(UserDataContext);

  const submitHandelor = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    
    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/login');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

  }

                   
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>

        <img className= 'w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
        
        <form onSubmit={ (e) => {
          submitHandelor(e)
        }}>

          <h3 className='text-lg font-medium mb-3 '>What's your name</h3>
          <div className= 'flex gap-2 mb-6'>
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

          <h3 className='text-lg font-medium mb-3 '>What's your email</h3>
          <input
            id= "email"
            name= "email"
            required 
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            autoComplete="email"
            placeholder='email@example.com'
            value= {email} 
            onChange= {(e) => {
              setEmail(e.target.value)
            }}
          />

          <h3 className='text-lg font-medium mb-3 '>Enter Password</h3>

          <input
            id= "password"
            name= "password"
            
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            autoComplete="current-password"
            placeholder='password'
            value= {password} 
            onChange= {(e) => {
              setPassword(e.target.value)
            }}
          />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full ' > Create account  </button>
            
          <p className='text-center'> Already have a account?<Link to= '/login' className='text-blue-600'>Login here </Link></p>
        
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

export default UserSignup
