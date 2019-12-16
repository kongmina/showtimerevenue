import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/visuals/showtimelogo.svg'
import { ReactComponent as RectLogo } from '../../assets/visuals/showtimelogo-rect.svg'
import './header.styles.scss'

const Header = () => (
      <div className='header'>
        <Link to="/" className='logo-container'>
            <RectLogo className='logo-container'/>                
        </Link>
        <div className='options'>
            <Link to='/about' className='option'>
                About
            </Link>
            <Link to='/blog' className='option'>
                Blog
            </Link>
            <Link to='/contact' className='option'>
                Contact
            </Link>
            <Link to='/case-study' className='option'>
                Case Study
            </Link>
        </div>
    </div>
);

export default Header