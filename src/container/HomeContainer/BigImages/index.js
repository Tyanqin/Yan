import React from 'react'
import {connect} from "react-redux";
import bg from './imgs/bg2.png'
import './style.css'

export default connect(state=>({}),{})(
    class BigImages extends React.Component{
        render() {
            return(
                <>
                   <div id = "big-image-wrap">
                       <img src={bg} alt=""/>
                   </div>
                </>
            )
        }
    }
)