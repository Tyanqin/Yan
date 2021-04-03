import React from 'react'
import {connect} from "react-redux";
import './style.css'

export default connect(state=>({}),{})(
    class HeaderComponent extends React.Component {
        render() {
            return (
                <div id = "header-component-wrap">
                    <div></div>
                    <div></div>
                    <div></div>

                    <div className = "header-title">
                        <div>家园教育</div>
                        <div>文化、道德、法律、技能、艺术、知识</div>
                        <div>学习、康复、矫正</div>
                    </div>
                </div>
            );
        }
    }
)