import React from 'react'
import Layout from '../../components/layout/layout.component';

export default class CaseStudy extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'Case Study For Restaurant Owners',
            imageUrl: `https://www.showtimerevenue.com/wp-content/uploads/2019/06/6Q1A0327-1600x2060.png`,
            description: `
            FREE Case Study Reveals:
            Why you need a niche and a "proof of concept"
            The secret weapon of all 7-figure Restaurant Owners
            The simple two-step system to get high value clients
            `
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