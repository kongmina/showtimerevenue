import React from 'react'
import './blog-post.styles.scss'
const BlogPost = ({title, content, image}) => (
    <div className='post'>
        <div className='title'>
            {title}
        </div>
        <div className='img'>
             <img src={image} alt='img'/>
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
export default BlogPost;