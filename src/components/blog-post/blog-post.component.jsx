import React from 'react'

const BlogPost = ({ post }) => {
    const {title, image, content} = post;
    return (
    <div className='post'>
        {title}
        {/* <div className='title'>
            {title}
        </div>
        <div className='content-container'>
            {content.split("\
            n").map((line) => {
            return (
            <div className='line'>{line}</div>
            )
        })}
        </div>*/}
    </div>
    )
}

export default BlogPost;