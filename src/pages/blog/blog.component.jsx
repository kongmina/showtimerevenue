import React from 'react'
import BLOG_DATA from '../../redux/blog/blog.data';
import BlogPreview from '../../components/blog-preview/blog-preview.component';


export default class Blog extends React.Component {
    constructor(){
        super();

        this.state = {posts : BLOG_DATA}
    }

    render() {
        const { posts } = this.state;
        return (
            <div className='posts'>
               {posts.map(({...postProps}) => (
                       <BlogPreview {...postProps}/>
               ))}
               </div>
    )
      }
    }
