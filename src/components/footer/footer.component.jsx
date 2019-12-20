import React from 'react'
import { Link } from 'react-router-dom'
import './footer.styles.scss'

const Footer = () => (
    <div className='footer'>
        <div className='legal'>
        <div className='terms-button'>
            <Link to='/terms-of-service'
             style={{ color: 'black' }} >
                Terms of Service
            </Link>
        </div>
        <div className='divider'>
            |
        </div>
        <div className='privacy-button'>
            <Link to='/privacy-policy'
            style={{ color: 'black' }} >
                Privacy Policy
            </Link>
        </div>
        </div>
        <div className='rights'>
        Copyright 2019 Showtime Revenue, all rights reserved.
        </div>
    </div>
    
);
export default Footer