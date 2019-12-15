import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/showtimelogo.svg'

import './header.styles.scss'

const Header = () => (
    <BrowserRouter>
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo-container'/>                
        </Link>
        <div className='options'>
            <Link to='/about' className='option'>
                About
            </Link>
            <Link to='/contact' className='option'>
                Contact
            </Link>
            <Link to='/case-study' className='option'>
                Case Study
            </Link>
        </div>
    </div>
    </BrowserRouter>
);

export default Header