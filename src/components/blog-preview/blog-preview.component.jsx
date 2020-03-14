import React from 'react'
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

import './blog-preview.styles.scss'

const BlogPreview = ({id, title, content, image, history, match}) => (
    <div className='preview-container'>
        <div className='title'>
            {title}
        </div>

        <div className='image-container'>
            <img src={image} alt='img'/>
        </div>
        
        <Button className='button'
        onClick={() => {
            history.push(`${match.url}-${id}`)
        }}
        >
            <Button.Content visible>Read More </Button.Content>
        </Button>
    </div>
)

export default withRouter(BlogPreview);