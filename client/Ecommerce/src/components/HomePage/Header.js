import React from 'react';
import '../../styles/Header.css';
import Menu from '../../icons/menu.svg';
import Search from '../../icons/search.svg';


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
          
          <span>Register</span>
          
         
          <span>Login</span>
          

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
