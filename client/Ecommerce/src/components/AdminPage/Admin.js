import React from 'react';
import User from '../../icons/user.png'
import '../../styles/Admin.css'; 

const Admin = () => {
  return (
    <div>
        <div className='container'>
            <div className='header'>

                <div className='left-section'>

                </div>
                <div className='middle-section'>
                <h2>Admin Page</h2>
                </div>
                
                <div className='right-section'>
                <button className='user-btn'>
                    <img className='user-icon' src={User} alt='admin'/>
                </button>
                </div>
               

            </div>


            <div className='body'>
                
                <div className='table-container'>

                <table>
                    <div className='table-label'>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>

                    </tr>
                    </div>
                   
                    {/* <div className='table-data'>
                    <tr>
                        <td>Sample</td>
                        <td>Sample</td>
                        <td>Sample</td>
                        <td>Sample</td>
                        <td>Sample</td>
                        <td>Sample</td>
                    </tr>
                    </div> */}
                    
                </table>

                </div>


            </div>


        </div>
      
    </div>
  )
}

export default Admin
