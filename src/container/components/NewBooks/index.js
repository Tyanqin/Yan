import React from 'react'
import {connect} from "react-redux";
import { Tabs } from 'antd';
import BV from './img/bv.jpg'
import {Link} from 'react-router-dom'
import './style.css'
import BOOKTwo from './img/book2.jpg'

const { TabPane } = Tabs;

export default connect(state=>({}),{})(
    class News extends React.Component{

        callback=(key)=> {
            console.log(key);
        }

        render() {
            return(
                <>
                    <div id = "new-books-wrap">
                        <div className="news-title">{this.props.title}</div>
                        <div className="new-box">
                            <div>
                                <Link to = "#">
                                    <img src={BOOKTwo} alt=""/>
                                    {/*<div className="img-title">*/}
                                    {/*    学习资料标题*/}
                                    {/*</div>*/}
                                </Link>

                            </div>
                            <div>
                                <Link to = "#">
                                    <img src={BOOKTwo} alt=""/>
                                    {/*<div className="img-title">*/}
                                    {/*    学习资料标题*/}
                                    {/*</div>*/}
                                </Link>
                            </div>
                            <div>
                                <Link to = "#">
                                    <img src={BOOKTwo} alt=""/>
                                    {/*<div className="img-title">*/}
                                    {/*    学习资料标题*/}
                                    {/*</div>*/}
                                </Link>
                            </div>
                            <div>
                                <Link to = "#">
                                    <img src={BOOKTwo} alt=""/>
                                    {/*<div className="img-title">*/}
                                    {/*    学习资料标题*/}
                                    {/*</div>*/}
                                </Link>
                            </div>
                            <div>
                                <Link to = "#">
                                    <img src={BOOKTwo} alt=""/>
                                    {/*<div className="img-title">*/}
                                    {/*    学习资料标题*/}
                                    {/*</div>*/}
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
)