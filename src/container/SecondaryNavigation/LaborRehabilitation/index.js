import React from 'react'
import {connect} from "react-redux";
import PubNavComponent from '../../components/PubNavComponent/index'
import {Menu} from "antd";

export default connect(state=>({}),{})(
   class LaborRehabilitation extends React.Component{
       render() {
           return(
               <>
                  <PubNavComponent
                    titles = {["安全生产教育知识","安全生产教育视频","康复劳动流程",,"劳动技能培训"]}
                  />
               </>
           )
       }
   }
)
