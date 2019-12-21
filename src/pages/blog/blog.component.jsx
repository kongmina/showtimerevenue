import React from 'react'
import BLOG_DATA from './blog.data';
import BlogPreview from '../../components/blog-preview/blog-preview.component';
import './blog.styles.scss'

<<<<<<< HEAD
const BlogPage = ({match}) => (
    <div className='blog-page'>
        <Route path={`${match.url}`} component={BlogDirectory} exact/>
        <Route path={`${match.url}-3`} component={BlogPost}/>
    </div>
)
export default BlogPage;
=======
export default class Blog extends React.Component {
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
>>>>>>> parent of 4e04370... blog post dilemma tbd
