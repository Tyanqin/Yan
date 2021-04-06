import React from 'react'
import {connect} from "react-redux";
import RehComponent from './component/RehComponent'
import PrimaryNavigation from "../../components/PrimaryNavigation";

export default connect(state=>({}),{})(
   class RehabilitationOfSocialFunction extends React.Component{
       render() {
           return(
               <>

                   <PrimaryNavigation
                       background = {"#F2F8FE"}
                       boxShadow={"5px 5px 5px #CFCFCF"}
                       height = {""}
                   />
                   <RehComponent/>
               </>
           )
       }
   }
)

{/*亲情帮教，法律援助，团体帮教*/}
