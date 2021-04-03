import React from 'react'
import {connect} from "react-redux";
import PubNavComponent from '../../components/PubNavComponent/index'
import {Menu} from "antd";

export default connect(state=>({}),{})(
   class DrugMentor extends React.Component{
       render() {
           return(
               <>
                  <PubNavComponent
                    titles = {["戒毒导师活动介绍","戒毒导师风采","与戒毒导师交流"]}
                  />
               </>
           )
       }
   }
)
