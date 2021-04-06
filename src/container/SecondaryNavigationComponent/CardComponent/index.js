import React from 'react'
import {connect} from 'react-redux'
import { Card } from 'antd';
import {Link} from "react-router-dom";
import VideoComponent from '../../components/VideoComponent'

import './style.css'

export default connect(state=>({}),{})(

    class  CardComponent extends React.Component{

        callback=(key)=> {
            console.log(key);
        }

        state={
            display:"none"
        }

        handelOnClick=(e)=>{
            // todo 获取视频url,进行加载播放
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
           console.log("this.props.image====>   ",this.props.image)
           return(
               <>
                   <div id="personal-style-wrap">
                       <div><Link to={"#"}>{this.props.title}</Link></div>
                       <div style={this.props.imgStyle} onClick={this.props.sourceFlag === 1?this.handelOnClick:""}><img src={this.props.imageUrl} alt=""/></div>
                       <div>{this.props.secondaryTitle}</div>
                       <div>
                           胡晓晖，女，1967年2月出生，安徽人。1989年毕业于江西财经大学，曾在安徽铜陵财经专科学校任教，2001年8月调入上海科学技术职业学院工作至今，现任上海科学技术职业学院经营管理系系主任，副教授。数年来一直从事经济管理教育工作，曾执教过多门专业课程，主要讲授课程：统计学原理、管理会计、市场营销学、人力资源管理统计。发表论文11篇。在上海科学技术学院工作期间，积极探索高职学生的教学模式，并积极为地区行业经济服务，先后6次为嘉定区统计人员上岗、继续教育培训服务，3次为上海市公安局嘉定区分局开展技术服务。注重开展科研工作，担任《市场营销理论与实训》、《应用统计EXCEL运用》、《管理学教程》和《绩效与薪酬管理》教材的主编、副主编工作。其中《市场营销理论与实训》教材获2007年上海市优秀教材三等奖。获“双师型教师证书”、“物流管理人员高级证书”、“高级信息师证书”及“人力资源中介师证书”。
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