import React from 'react';
import { withRouter } from 'react-router-dom'
import './layout.styles.scss'


const Layout = ( { title, imageUrl, description} ) => (
    <div className='container'>
         <div className='title'>
             {title}
        </div>
        <div className='contain'>
        <div className='image-container'>
         <img src={imageUrl} alt='img'/>
        </div>
        <div className='description'>
            {description}
        </div>
        </div>
    </div>
)
export default Layout;