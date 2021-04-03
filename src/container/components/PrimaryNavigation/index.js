import React from 'react'
import {connect} from "react-redux";
import { Menu } from 'antd';
import {SettingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import './style.css'
import Cv from '../PrimaryNavigation/imgs/cv.png'
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
                    <div id = "primary-navigation-wrap">
                        <div className="primary-navigation-box">
                            <ul>
                                {/*<li><img src={Cv} alt=""/></li>*/}
                                <li><Link to = {"/"}>身体康复</Link></li>
                                <li><Link to = {"/physicalRehabilitationTheoryGuidance"}>心理康复</Link></li>
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