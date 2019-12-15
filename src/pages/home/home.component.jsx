import React from 'react'
import Layout from '../../components/layout/layout.component'

export default class Home extends React.Component {
    constructor(){
        super();

        this.state = {
            
              content: { title:'I help Restaurant Owners grow into profitable businesses',
                imageUrl: 'https://www.showtimerevenue.com/wp-content/uploads/2019/06/Untitled-1.jpg',
                description: `Are you a Restaurant Owner struggling to attract new clients?

                My name is Michael Leung and I help Restaurant Owner get high value clients using my predictable clients system.
                
                If you're interested in getting more clients with predictability click the button below to learn more.`
            }

        }
    }

    render() {
        return (
            <div className='intro'>
              {/* <Layout {...this.state}/> */}
            </div>
    )
        }
    }