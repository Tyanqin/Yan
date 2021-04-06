import React from 'react'
import {connect} from "react-redux";
import LabComponent from './component/LabComponent'
import {Menu} from "antd";
import PrimaryNavigation from "../../components/PrimaryNavigation";
import PubPageComponent from "../PhysicalRehabilitationTheoryGuidance/component/PhyComponent";

export default connect(state=>({}),{})(
   class LaborRehabilitation extends React.Component{
       render() {
           return(
               <>
                   <PrimaryNavigation
                       background = {"#F2F8FE"}
                       boxShadow={"5px 5px 5px #CFCFCF"}
                       height = {""}
                   />
                   <LabComponent/>
               </>
           )
       }
   }
)
