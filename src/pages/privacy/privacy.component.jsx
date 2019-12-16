import React from 'react'
import PRIVACY_TERMS from "../../assets/documentation/privacy-terms";
import WallText from '../../components/text/text.component';

export default class Privacy extends React.Component {
    constructor(){
        super();

        this.state = { privacy: PRIVACY_TERMS }
    }

    render() {
        const { privacy } = this.state;
        return (
            <div>
                <WallText {...privacy}/>
            </div>
        )
    }
}