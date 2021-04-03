import React from 'react'
import {connect} from "react-redux";
import PubNavComponent from '../../components/PubNavComponent/index'

export default connect(state=>({}),{})(
    class PsychologicalRehabilitation extends React.Component{
        render() {
            return(
                <>
                    <PubNavComponent
                        titles = {["心理指导中简介","常见心理问题","心理健康知识普及","同伴教育","艺术鉴赏","咨询师风采"]}
                    />
                </>
            )
        }
    }
)
