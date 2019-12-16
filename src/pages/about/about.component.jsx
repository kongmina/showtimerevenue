import React from 'react'
import Layout from '../../components/layout/layout.component';
import { withRouter } from 'react-router-dom';

class About extends React.Component {
    constructor() {
        super();

        this.state = {            
                title: 'About Michael Leung',
                imageUrl: `https://www.showtimerevenue.com/wp-content/uploads/2019/06/6Q1A0268-1600x1526.jpg`,
                description: `Michael Leung
                Born in Hong Kong and raised in British Columbia, majority of Michael’s family are chefs, he became very interested in food and flavors at a young age. He began learning from mentors and family members in different restaurants and business meetings.
                Michael has been building his own brand using different social media platforms to generate sales online. He is experienced in optimizing pages to improve growth in traffic and conversions.
                In 2017, Michael founded Showtime Revenue with his partner. Their vision is to use the knowledge they’ve gained over the years to help restaurant owners create successful businesses.`
        }
    }

    render() {
        return (
        <div className='about'>
        <Layout {...this.state} />
    </div>
    )
}
}
export default About