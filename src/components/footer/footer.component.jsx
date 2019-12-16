import React from 'react'
import { Link } from 'react-router-dom'
import Terms from '../../pages/terms/terms.component'

import './footer.styles.scss'
const Footer = () => (
    <div className='footer'>
        <div className='terms-button'>
            <Link to='/terms-of-service'>
                Terms of Service
            </Link>
        </div>
        <div className='privacy-button'>
            <Link to='/privacy-policy'>
                Privacy Policy
            </Link>
        </div>
    </div>
);
export default Footer