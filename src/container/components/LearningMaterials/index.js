import React from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import './style.css'
import BG2 from './imgs/bg2.png'
import BG3 from './imgs/bg3.png'



export default connect(state=>({}),{})(

    class LearningMaterials extends React.Component {
        handleClick = e => {
            console.log('click ', e);
        };
        render() {
            return (
                <>
                    <div className="learning-materials-title">
                        学习资料
                    </div>
                    <div id = "learning-materials-wrap" >
                        <ul>
                            <li><Link to={"#"}>学习资料111</Link></li>
                            <li><Link to={"#"}>学习资料222222222</Link></li>
                            <li><Link to={"#"}>学习资料3333333333333</Link></li>
                            <li><Link to={"#"}>学习资料4444444444444444</Link></li>
                            <li><Link to={"#"}>学习资料55555555555555555555</Link></li>
                            <li><Link to={"#"}>学习资料66666666666666666666666</Link></li>
                            <li><Link to={"#"}>学习资料7777777777777777777777777777</Link></li>
                            <li><Link to={"#"}>学习资料888888888888888888888888888888888</Link></li>
                        </ul>
                        <ul>
                            <li><Link to={"#"}>学习资料111</Link></li>
                            <li><Link to={"#"}>学习资料222222222</Link></li>
                            <li><Link to={"#"}>学习资料3333333333333</Link></li>
                            <li><Link to={"#"}>学习资料4444444444444444</Link></li>
                            <li><Link to={"#"}>学习资料55555555555555555555</Link></li>
                            <li><Link to={"#"}>学习资料66666666666666666666666</Link></li>
                            <li><Link to={"#"}>学习资料7777777777777777777777777777</Link></li>
                            <li><Link to={"#"}>学习资料888888888888888888888888888888888</Link></li>
                        </ul>

                    </div>
                </>
            );
        }
    }
)

// F2F3F7