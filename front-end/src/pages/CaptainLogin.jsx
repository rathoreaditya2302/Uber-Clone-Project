import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('')
  const [ captainData , setCaptainData ] = useState({});
      
  const submitHandelor =(e) => {
    e.preventDefault();
    setCaptainData({ 
      email: email,
      password: password
    });
    setEmail('');
    setPassword('');
    console.log('form submitted')
  }
        

  return (

    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>

        <img className= 'w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Diver Logo" />
        
        <form onSubmit={ (e) => {
          submitHandelor(e)
        }}>

          <h3 className='text-lg font-medium mb-2 '>What's your email</h3>

          <input
            id= "email"
            name= "email"
            required 
            value= {email} 
            onChange= {(e) => {

              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            autoComplete="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2 '>Enter Password</h3>

          <input
            id= "password"
            name= "password"
            value= {password}
            onChange= {(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            autoComplete="current-password"
            placeholder='password'
          />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full ' > Login </button>
            
          <p className='text-center'> Join a fleet?<Link to= '/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        
        </form>
      </div>
      <div>

        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full ' >Sign in as User</Link>
            
      </div>
    </div>
  )
}

export default CaptainLogin
