import React from 'react'
import {connect} from "react-redux";
import MedComponent from './component/MedComponent'
import {Menu} from "antd";
import PrimaryNavigation from "../../components/PrimaryNavigation";
import PubPageComponent from "../PhysicalRehabilitationTheoryGuidance/component/PhyComponent";

export default connect(state=>({}),{})(
   class MedicalRehabilitation extends React.Component{
       render() {
           return(
               <>
                   <PrimaryNavigation
                       background = {"#F2F8FE"}
                       boxShadow={"5px 5px 5px #CFCFCF"}
                       height = {""}
                   />
                   <MedComponent/>
               </>
           )
       }
   }
)
