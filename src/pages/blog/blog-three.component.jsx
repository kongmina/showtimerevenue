import React from 'react'
import BLOG_DATA from '../../redux/blog/blog.data'
import BlogPost from '../../components/blog-post/blog-post.component';
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

import './blog-three.styles.scss'

class BlogThree extends React.Component {
    constructor() {
        super();

        this.state = { data: BLOG_DATA[2] }

    }

    render() {
        const { history } = this.props;
        return (
            <div className='blog-post'>
                <BlogPost {...this.state.data} />
                <div className='button-container'>
                    <div className='text'>
                        Click the link below 👇
                    </div>
                    <Button className='button'
                        onClick={() => {
                            history.push('/case-study');
                        }}
                    >
                        <Button.Content visible> Free Case Study </Button.Content>
                       
                    </Button>
                </div>
            </div>
        )
    }
}

export default withRouter(BlogThree)