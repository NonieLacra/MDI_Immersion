import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from './components/loginForm.js';
import RegistrationForm from './components/registrationForm';
import Header from './components/Header.js';
import Body from './components/Body.js';
import '../src/styles/loginform.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login' element={<LoginForm />} />        
          <Route path='/register' element={<RegistrationForm />} />    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
