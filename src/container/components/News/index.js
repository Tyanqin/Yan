import React from 'react'
import {connect} from "react-redux";
import { Tabs } from 'antd';
import BV from './img/bv.jpg'
import {Link} from 'react-router-dom'
import './style.css'
const { TabPane } = Tabs;

export default connect(state=>({}),{})(
    class News extends React.Component{

        callback=(key)=> {
            console.log(key);
        }

        render() {
            return(
                <>
                    <div id = "news-wrap">
                        <div className="news-title">{this.props.title}</div>
                        <div className="new-box">
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
                </>
            )
        }
    }
)