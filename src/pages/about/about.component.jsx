import React from 'react'
import Layout from '../../components/layout/layout.component';

export default class About extends React.Component {
    constructor() {
        super();

        this.state = {
            content: {
                title: '',
                imageUrl: '',
                description: ''
            }
        }
    }

    render() {
        return (
    <div className='about'>
        <Layout content={this.state.content} />
    </div>
    )
}
}