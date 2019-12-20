import React from 'react'
import './blog.styles.scss'
import BlogDirectory from '../../components/blog-directory/blog-directory.component'
import { Route } from 'react-router-dom'
import BlogPost from '../../components/blog-post/blog-post.component'

const BlogPage = ({match}) => (
    <div className='blog-page'>
        <Route path={`${match.path}`} component={BlogDirectory} exact/>
        <Route path={`${match.path}-3`} component={BlogPost}/>
    </div>
)
export default BlogPage;
