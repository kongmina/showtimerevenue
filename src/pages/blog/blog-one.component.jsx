import React from 'react'
import BLOG_DATA from '../../redux/blog/blog.data'
import BlogPost from '../../components/blog-post/blog-post.component';

export default class BlogOne extends React.Component {
    constructor() {
        super();

        this.state = { data: BLOG_DATA[0] }
        
    }

    render() {
        console.log(this.state);
        return (
            <div className='blog-post'>
                <BlogPost {...this.state.data}/>
            </div>
        )
    }
}