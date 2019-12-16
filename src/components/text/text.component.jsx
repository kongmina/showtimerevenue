import React from 'react'
import './text.styles.scss'
const WallText = ({title, content}) => (

    <div className='text-container'>
        <div className='title'>
            {title}
        </div>
        <div className='content'>
            {content}
        </div>
    </div>
    
);

export default WallText