import React from 'react'
import {connect} from "react-redux";
import PrimaryNavigation from '../../components/PrimaryNavigation'
import PhyComponent from './component/PhyComponent'
import './style.css'


export default connect(state=>({}),{})(
   class PhysicalRehabilitationTheoryGuidance extends React.Component{

       render() {
           return(
               <>
                   <PrimaryNavigation
                      background = {"#F2F8FE"}
                      boxShadow={"5px 5px 5px #CFCFCF"}
                      height = {""}
                   />
                   <PhyComponent/>


                   {/*<div id = "physica-lrehabilitation-theory-guidance-wrap">*/}

                   {/*</div>*/}
               </>
           )
       }
   }
)



{/*<PubNavComponent*/}
{/*  titles = {["身体康复理论指导","身体康复视频指导","身体康复风采指导"]}*/}
{/*/>*/}