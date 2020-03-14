import React from 'react'
import Layout from '../../components/layout/layout.component';
import contactcropped from "../../assets/visuals/contact-cropped.jpg"
import { Button } from 'semantic-ui-react';

export default class CaseStudy extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'Case Study For Restaurant Owners',
            imageUrl: contactcropped,
            description: `
            FREE Case Study Reveals: \n
            Why you need a niche and a "proof of concept" \n 
            The secret weapon of all 7-figure Restaurant Owners \n
            The simple two-step system to get high value clients
            `,
            buttonUrl: 'hi'
        }
    }

    render() {
        return (
            <div className='case-study-container'>
                <Layout {...this.state}/>
            </div>
        )
    }
}