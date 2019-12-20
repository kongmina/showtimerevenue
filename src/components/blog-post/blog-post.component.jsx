import React from 'react'

const BlogPost = ({title, content}) => (
    <div className='post'>
        <div className='title'>
            {title}
        </div>
        <div className='content-container'>
            {content.split("\n").map((line) => {
            return (
            <div className='line'>{line}</div>
            )
        })}
        </div>
    </div>
)