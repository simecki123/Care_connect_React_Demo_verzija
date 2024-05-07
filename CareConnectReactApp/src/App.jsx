import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import RemeberedUsersLoginComponent from './LogingComponents/RemeberedUsers-login/RemeberedUsersLoginComponent';
import RemeberedProfiles from './RemeberedProfilesData';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RemeberedUsersLoginComponent RemeberedProfilesData={RemeberedProfiles} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
