import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import RemeberedUsersLoginComponent from './LogingComponents/RemeberedUsers-login/RemeberedUsersLoginComponent';
import RemeberedProfiles from './RemeberedProfilesData';
import LoginComponent from './LogingComponents/LoginComponents/LoginComponent';
import RegisterComponent from './LogingComponents/RegisterComponents/RegisterComponents';
import MainPageComponents from './MainPageComponents/MainPageComponent';
import DevicesComponent from './DevicesComponents/DevicesComponent';
import YourDoctorComponent from './YourDoctorComponents/YourDoctorComponent';
import ConvoHistoryComponent from './ConvoHistoryComponents/ConvoHistoryComponent';
import MedicalHistoryComponent from './MedicalHistoryComponents/MedicalHistoryComponents';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RemeberedUsersLoginComponent RemeberedProfilesData={RemeberedProfiles} />} />
          <Route path='/login' element={<LoginComponent></LoginComponent>} />
          <Route path='/register' element={<RegisterComponent></RegisterComponent>} />
          <Route path='/mainpage' element={<MainPageComponents />} />
          <Route path='/devices' element={<DevicesComponent />} />
          <Route path='/yourDoctor' element={<YourDoctorComponent />} />
          <Route path='/convoHistory' element={<ConvoHistoryComponent />} />
          <Route path='/medicalHistory' element={<MedicalHistoryComponent />} />
          <Route path='/medicalDocuments' element={<YourDoctorComponent />} />
          <Route path='/medications' element={<YourDoctorComponent />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
