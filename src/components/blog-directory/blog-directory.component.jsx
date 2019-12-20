import React from 'react'
import BLOG_DATA from '../../pages/blog/blog.data';
import BlogPreview from '../../components/blog-preview/blog-preview.component';

export default class BlogDirectory extends React.Component {
    constructor(){
        super();

        this.state = {posts : BLOG_DATA}
    }

    render() {
        const { posts } = this.state;
        console.log(posts);
        return (
            <div className='posts'>
               {posts.map(({...postProps}) => (
                       <BlogPreview {...postProps}/>
               ))}
               </div>
    )
      }
    }
