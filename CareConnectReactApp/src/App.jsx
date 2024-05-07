import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import RemeberedUsersLoginComponent from './LogingComponents/RemeberedUsers-login/RemeberedUsersLoginComponent';
import RemeberedProfiles from './RemeberedProfilesData';
import LoginComponent from './LogingComponents/LoginComponents/LoginComponent';
import RegisterComponent from './LogingComponents/RegisterComponents/RegisterComponents';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RemeberedUsersLoginComponent RemeberedProfilesData={RemeberedProfiles} />} />
          <Route path='/login' element={<LoginComponent></LoginComponent>} />
          <Route path='/register' element={<RegisterComponent></RegisterComponent>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
