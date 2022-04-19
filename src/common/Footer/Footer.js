import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <div className='footer'>
           <p><img src={logo} alt="" /></p>
        </div>
    );
};

export default Footer;