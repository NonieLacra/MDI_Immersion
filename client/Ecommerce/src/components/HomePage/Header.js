import React from 'react';
<<<<<<< Updated upstream:client/Ecommerce/src/components/Header.js
import '../styles/Header.css';
import Menu from '../icons/menu.svg';
import Search from '../icons/search.svg';
import { Link } from 'react-router-dom';
=======
import '../../styles/Header.css';
import Menu from '../../icons/menu.svg';
import Search from '../../icons/search.svg';

>>>>>>> Stashed changes:client/Ecommerce/src/components/HomePage/Header.js

const Header = () => {
  return (
    <div>
      <div className='container'>

        <div className='left-section'>
            <img className='menu' src={Menu} />

        </div>

        <div className='middle-section'>
          <input className='search' type='textbox' placeholder='Search' />
          <button className='search-btn'>
          <img className='search-icon' src={Search} />
          </button>

        </div>

        <div className='right-section'>
<<<<<<< Updated upstream:client/Ecommerce/src/components/Header.js
          <Link to='/register'>
          <span>Register</span>
          </Link>
          <Link to='/login'>
          <span>Login</span>
          </Link>
=======
>>>>>>> Stashed changes:client/Ecommerce/src/components/HomePage/Header.js
          

        </div>
         
      </div>

      <div className='category'>
      
      <span>Mac</span>
      <span>Ipad</span>
      <span>Iphone</span>
      <span>Watch</span>
      <span>Airpods</span>
      <span>Accessories</span>
      <span>Support</span>

      </div>

    </div>
  )
}

export default Header
