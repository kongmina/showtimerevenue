import React from 'react'
import './text.styles.scss'
const WallText = ({title, content}) => (

    <div className='text-container'>
        <div className='title'>
            {title}
        </div>
        <div className='content'>
        {content.split("\n").map((i, key) => {
                        return (
                            <div className='line' key={key}>{i}</div>

                        )
                    })}
        </div>
    </div>
    
);

export default WallText