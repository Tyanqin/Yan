import React from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import './style.css'
export default connect(state=>({}),{})(
    class PrimaryNavigation extends React.Component{

        state = {
            current: 'mail',
        };

        handleClick = e => {
            console.log('click ', e);
            this.setState({ current: e.key });
        };

        render() {
            return(
                <>
                    <div id = "primary-navigation-wrap"
                        style = {{
                            background:this.props.background==""?"":this.props.background,
                            boxShadow:this.props.boxShadow,
                            height:this.props.height
                        }}
                    >
                        <div className="primary-navigation-box">
                            <ul>
                                <li><Link to = {"/physicalRehabilitationTheoryGuidance"}>身体康复</Link></li>
                                <li><Link to = {"/psychologicalRehabilitation"}>心理康复</Link></li>
                                <li><Link to = {"/rehabilitationOfSocialFunction"}>社会功能康复</Link></li>
                                <li><Link to = {"/drugMentor"}>戒毒导师</Link></li>
                                <li><Link to = {"/laborRehabilitation"}>劳动康复</Link></li>
                                <li><Link to = {"/medicalRehabilitation"}>医疗康复</Link></li>
                                <li><Link to = {"/cognitiveRehabilitation"}>认知康复</Link></li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        }
    }
)