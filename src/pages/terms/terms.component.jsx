import React from 'react'
import WallText from '../../components/text/text.component'
import TERMS_SERVICE from '../../assets/documentation/termstext';

export default class Terms extends React.Component {
    constructor() {
        super();

        this.state = {terms : TERMS_SERVICE};
    }

    render() {
        const {terms} = this.state;
        return (
            <div>
                <WallText {...terms}/>
            </div>      
            )
    }
}