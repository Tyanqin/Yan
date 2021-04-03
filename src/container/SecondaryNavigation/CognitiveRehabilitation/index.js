import React from 'react'
import {connect} from "react-redux";
import PubNavComponent from '../../components/PubNavComponent/index'
import {Menu} from "antd";

export default connect(state=>({}),{})(
   class CognitiveRehabilitation extends React.Component{
       render() {
           return(
               <>
                  <PubNavComponent
                    titles = {["电子阅览","课堂化教育","思想道德教育","辅助教育","教育成果展示"]}
                  />
               </>
           )
       }
   }
)

