import React from 'react'
import {connect} from "react-redux";
import { Tabs } from 'antd';
import BV from './img/bv.jpg'
import {Link} from 'react-router-dom'
import './style.css'
import VideoComponent from '../VideoComponent'
const { TabPane } = Tabs;

export default connect(state=>({}),{})(
    class News extends React.Component{

        videoRef = React.forwardRef()

        callback=(key)=> {
            console.log(key);
        }

        state={
            display:"none"
        }

        handelOnClick=(e)=>{
            // todo 获取视频url,进行加载播放
            console.log("this.videoRef====>   ",this.videoRef)
            this.setState({
                display:"block"
            })
        }

        updateDisplay=(value)=>{
            this.setState({
                display:value
            })
        }


        render() {
            return(
                <>
                    <div id = "news-wrap">
                        <div className="news-title">{this.props.title}</div>
                        <div className="new-box" onClick={this.handelOnClick}>
                            <div>
                                <img src={BV} alt=""/>
                                <div className="img-title">
                                    视频资料标题
                                </div>
                            </div>
                            <div>
                                <img src={BV} alt=""/>
                                <div className="img-title">
                                    视频资料标题
                                </div>
                            </div>
                            <div>
                                <img src={BV} alt=""/>
                                <div className="img-title">
                                    视频资料标题
                                </div>
                            </div>
                            <div>
                                <img src={BV} alt=""/>
                                 <div className="img-title">
                                     视频资料标题
                                </div>
                            </div>
                        </div>
                    </div>

                    <VideoComponent
                      display = {this.state.display}
                      updateDisplay={this.updateDisplay}
                      flag = {"block"}  //控制查看更多按钮是还是显示 ...
                    />
                </>
            )
        }




    }
)