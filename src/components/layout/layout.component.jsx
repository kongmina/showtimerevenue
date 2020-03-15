import React from 'react';
import './layout.styles.scss'
import { Button } from 'semantic-ui-react';


const Layout = ({ title, imageUrl, description, buttonUrl }) => (

    <div className='container'>

        <div className='contain'>
            <div className='image-container'>
                <img src={imageUrl} alt='img' />
            </div>
            <div className='text'>
                <div className='title'>
                    {title}
                </div>
                <div className='description'>
                    {description.split("\n").map((i, key) => {
                        return (
                            <div className='line' key={key}>{i}</div>

                        )
                    })}

                </div>
                <div className='button'>
                    {buttonUrl != null &&
                        <Button 
                            color='teal'
                            size='huge'
                        > FREE Case Study </Button>
                    }
                </div>
            </div>
        </div>
    </div>
)
export default Layout;