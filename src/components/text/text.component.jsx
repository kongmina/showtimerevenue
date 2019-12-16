import React from 'react'

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