import React from 'react'
import {connect} from 'react-redux'
import './style.css'

export default connect(state=>({}),{})(
    class Footer extends React.Component{
        render() {
            return(
                <>
                    <div id = "footer-wrap">
                        <div className = "footer-box">
                            <p>网站使用帮助　网站声明　联系我们　网站地图</p>
                            <p>主办单位：湖北省戒毒管理局</p>
                            <p>版权所有：湖北省戒毒管理局</p>
                            <p> 鄂ICP备19028317号-1　　司法门户政府网站标识码：4201000037网站使用帮助　网站声明</p>
                        </div>
                    </div>
                </>
            )
        }
    }
)



















