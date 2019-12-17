import React from 'react'
import Layout from '../../components/layout/layout.component';

export default class Contact extends React.Component {
    constructor(){
        super();

        this.state = {
            title: `Want to get in touch? Let's talk!`,
            imageUrl: `https://www.showtimerevenue.com/wp-content/uploads/2019/06/Optimized-6Q1A0028.jpg`,
            description: `To contact Michael or his staff please use the following information. \n
            Michael Leung and his staff operate Monday – Friday 9am – 5pm Pacific Time (British Columbia). To contact Michael Leung or his team please use the information below: \n
            Email: 
            \n
            mleung@showtimerevenue.com \n
            Phone: \n
            +1 604 368 2086`
        }
    }

    render() {
        return (
            <div>
                <Layout {...this.state}/>
            </div>
        )
    }
}