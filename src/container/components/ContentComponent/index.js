import React from 'react'
import {connect} from "react-redux";
import './style.css'
import JIEDU2 from './imgs/jiedu2.jpg'
import JIEDU3 from './imgs/jiedu3.jpg'
import JIEDU4 from './imgs/jiedu4.jpg'
import BIG1 from './imgs/big1.jpg'


export default connect(state=>({}),{})(

    class ContentComponent extends React.Component {

        render() {
            return (
                <div id = "content-component-wrap">
                    <div></div>
                    <div className="img"><a href="#"><img src={BIG1} alt=""/></a></div>
                    <div className="img"><a href="#"><img src={JIEDU3} alt=""/></a></div>
                    <div className="img"><a href="#"><img src={JIEDU4} alt=""/></a></div>
                </div>
            );
        }
    }
)