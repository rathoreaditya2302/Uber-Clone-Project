import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserLogout } from './pages/UserLogout'
import { UserDataContext } from './context/userContext'
import UserProtectiveWrapper from './pages/UserProtectiveWrapper'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectiveWrapper from './pages/CaptainProtectiveWrapper'

const App = () => {

  const ans = useContext(UserDataContext)
  console.log(ans)
  return (

    <div>
      <Routes>
        <Route path='/' element= {<Start />} />
        <Route path='/login' element= {<Userlogin />} />
        <Route path='/signup' element= {<UserSignup />} />
        <Route path='/captain-login' element= {<CaptainLogin />} />
        <Route path='/captain-signup' element= {<CaptainSignup />} /> 
        <Route path='/home' 
          element= {
            <UserProtectiveWrapper>
              <Home />
            </UserProtectiveWrapper>
          }
        />
        <Route path='/user/logout' 
          element= { 
            <UserProtectiveWrapper>
              <UserLogout />
            </UserProtectiveWrapper> 
          }
        />
        <Route path='/captain-home' 
          element= {
            <CaptainProtectiveWrapper>
              <CaptainHome />
            </CaptainProtectiveWrapper>
          }
        />

      </Routes>
      
    </div>
  )
}

export default App
