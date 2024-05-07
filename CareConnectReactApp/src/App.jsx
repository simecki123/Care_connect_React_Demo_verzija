import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import RemeberedUsersLoginComponent from './LogingComponents/RemeberedUsers-login/RemeberedUsersLoginComponent';
import RemeberedProfiles from './RemeberedProfilesData';
import LoginComponent from './LogingComponents/LoginComponents/LoginComponent';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RemeberedUsersLoginComponent RemeberedProfilesData={RemeberedProfiles} />} />
          <Route path='/login' element={<LoginComponent></LoginComponent>} />
          <Route path='/register' element={<><p>Hello World</p></>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
