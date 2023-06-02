import React from 'react'
import '../../styles/Body.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import iphone14Pro from '../../images/iphone14-pro.jpeg';
import iphoneSportsBand from '../../images/pride-sportband.jpeg';
import ipadPro from '../../images/ipad-pro.jpeg'
import appleWatch8 from '../../images/apple-watch-8.jpeg';
import macBookPro from '../../images/macbook-pro.jpeg';
import iphone14 from '../../images/iphone14.jpeg';
import appleWatchUltra from '../../images/apple-watch-ultra.jpeg';
import ipad from '../../images/ipad.jpeg';
import macMini from '../../images/mac-mini.jpeg';


const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Body = () => {
  return (
    <div>
      
    <div className='carousel'>
        <Carousel responsive={responsive}>

        <div className='card'>
            <img className='product-image' src={iphone14Pro} />

            <div className='card-details-white'>
            <p>IPHONE 14 PRO</p>
            <h2>Pro. Beyond.</h2>
            <p>From ₱70,990</p>
            </div>
        </div>

        <div className='card'>
            <img className='product-image' src={iphoneSportsBand} alt='product image'/>

            <div className='card-details-black'>
            <p>PRIDE EDITION SPORT BAND</p>
            <h2>Pride is in the air.</h2>
            <p>₱2,890</p>
            </div>
        </div>

        <div className='card'>
            <img className='product-image' src={ipadPro} alt='product image'/>

            <div className='card-details-white'>
            <p>IPAD PRO</p>
            <h2>Supercharged by M2.</h2>
            <p>From ₱55,990</p>
            </div>
        </div>

        <div className='card'>
            <img className='product-image' src={iphone14} alt='product image'/>

            <div className='card-details-black'>
            <p>IPHONE 14</p>
            <h2>Wonderfull.</h2>
            <p>From ₱56,990</p>
            </div>
        </div>

        <div className='card'>
            <img className='product-image' src={macBookPro} alt='product image'/>

            <div className='card-details-white'>
            <p>MACBOOK PRO</p>
            <h2>Mover. Maker.</h2>
            <h2>Bondary breaker.</h2>
            <p>From ₱126,990</p>
            </div>
        </div>

        <div className='card'>
            <img className='product-image' src={appleWatchUltra} alt='product image'/>

            <div className='card-details-black'>
            <p>APPLE WATCH ULTRA</p>
            <h2>Adventure awaits.</h2>
            <p>From ₱52,990</p>
            </div>
        </div>

        <div className='card'>
            <img className='product-image' src={appleWatch8} alt='product image'/>

            <div className='card-details-white'>
            <p>APPLE WATCH SERIES 8</p>
            <h2>A healthy leap ahead.</h2>
            <p>From ₱25,990</p>
            </div>
        </div> 

        <div className='card'>
            <img className='product-image' src={ipad} alt='product image'/>

            <div className='card-details-black'>
            <p>IPAD</p>
            <h2>Lovable. Drawable.</h2>
            <h2>Magical.</h2>
            <p>From ₱29,990</p>
            </div>
        </div>

        <div className='card'>
            <img className='product-image' src={macMini} alt='product image'/>

            <div className='card-details-white'>
            <p>MAC MINI</p>
            <h2>More muscle. More hustle.</h2>
            <p>From ₱36,990</p>
            </div>
        </div>

       
        </Carousel>;
    </div>


    </div>
  )
}

export default Body
