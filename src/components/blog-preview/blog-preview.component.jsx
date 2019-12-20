import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './blog-preview.styles.scss'

const BlogPreview = ({title, content, image}) => (
    <div className='preview-container'>
        <div className='title'>
            {title}
        </div>

        <div className='image-container'>
            <img src={image} alt='img'/>
        </div>
        
        <Button animated className='button'
        // onClick={() => {
        //     history.push(`/blog-${id}`)
        // }}
        >
            <Button.Content visible> Read More </Button.Content>
                <Button.Content hidden>
                <Icon name='arrow right'/>
            </Button.Content>
        </Button>
    </div>
)

export default BlogPreview;