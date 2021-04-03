import React from 'react'
import {connect} from 'react-redux'
import Test4 from './source/test1.mp4'
import './style.css'

export default connect(state=>({}),{})(

    class VideoSource extends React.Component{

        render() {
            return(
                <>
                   <div id = "video-source-id">
                       <video width="100%" height="100%"
                              autoplay="autoplay"
                              loop="loop"
                              muted="muted"
                              controlsList="nodownload" className="video">
                              <source src={Test4} type="video/mp4"/>
                              {/*<source src="movie.ogg" type="video/ogg"/>*/}
                                   您的浏览器不支持 HTML5 video 标签。
                       </video>
                   </div>
                </>
            )
        }
    }
)

// object-fit:fill