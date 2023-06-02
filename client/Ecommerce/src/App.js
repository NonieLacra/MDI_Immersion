import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from './components/loginform.js';
import RegistrationForm from './components/Registration/RegistrationForm.js';
import Header from './components/HomePage/Header.js';
import Body from './components/HomePage/Body.js';
import '../src/styles/loginform.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
          <Header />
          <Body />
            </div>
          } />
          <Route path='/login' element={<LoginForm />} />        
          <Route path='/register' element={<RegistrationForm />} />    
        </Routes>
      </Router>
      <div></div>
    </div>
  );
}

export default App;
