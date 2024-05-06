import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import ChooseAccountComponent from './LogingComponents/ChooseAcountComponents/ChooseAccountComponent';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ChooseAccountComponent></ChooseAccountComponent>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
