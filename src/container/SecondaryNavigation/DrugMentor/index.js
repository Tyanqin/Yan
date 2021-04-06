import React from 'react'
import {connect} from "react-redux";
import DrugComponent from './component/DrugComponent'
import {Menu} from "antd";
import PrimaryNavigation from "../../components/PrimaryNavigation";


export default connect(state=>({}),{})(
   class DrugMentor extends React.Component{
       render() {
           return(
               <>
                   <PrimaryNavigation
                       background = {"#F2F8FE"}
                       boxShadow={"5px 5px 5px #CFCFCF"}
                       height = {""}
                   />
                   <DrugComponent/>
               </>
           )
       }
   }
)
