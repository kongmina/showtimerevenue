import React from 'react';
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
        {description.split("\n").map((i,key) => {
            return (
            <div className='line'key={key}>{i}</div>
            
            )
        })}
        </div>
        </div>
    </div>
)
export default Layout;