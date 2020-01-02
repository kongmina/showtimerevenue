import React from 'react'
import BLOG_DATA from '../../redux/blog/blog.data'
import BlogPost from '../../components/blog-post/blog-post.component';
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

import './blog-three.styles.scss'

class BlogThree extends React.Component {
    constructor() {
        super();

        // const { history } = this.props;
        this.state = { data: BLOG_DATA[2] }
        
    }

    render() {
        const { history } = this.props;
        return (
            <div className='blog-post'>
                <BlogPost {...this.state.data}/>
                Click the link below 👇
                <Button animated className='button'
        onClick={() => {
            history.push('/case-study');
        }}
        >
            <Button.Content visible> Free Case Study </Button.Content>
                <Button.Content hidden>
                <Icon name='arrow right'/>
            </Button.Content>
        </Button>
            </div>
        )
    }
}

export default withRouter(BlogThree)