import React from 'react';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from './components/loginForm.js';
import RegistrationForm from './components/registrationForm';
import Header from './components/Header.js';
import Body from './components/Body.js';
import '../src/styles/loginform.css'
=======
// import LoginForm from './components/loginform.js';
// import RegistrationForm from './components/Registration/RegistrationForm';
// import Header from './components/HomePage/Header';
// import Body from './components/HomePage/Body';
import Admin from './components/AdminPage/Admin';
import HomePage from './components/HomePage/HomePage';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login' element={<LoginForm />} />        
          <Route path='/register' element={<RegistrationForm />} />    
        </Routes>
      </Router>
=======
      
      {/* <LoginForm />
      <RegistrationForm /> */}
      {/* <Header />
      <Body /> */}
      {/* <Admin /> */}
      <HomePage />

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
