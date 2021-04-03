import React from 'react'
import {connect} from "react-redux";
// import LevelThreeMenu from '../../components/LevelThreeMenu'
import './style.css'
import PrimaryNavigation from '../../components/PrimaryNavigation'




// import PubNavComponent from '../../components/PubNavComponent/index'

export default connect(state=>({}),{})(
   class PhysicalRehabilitationTheoryGuidance extends React.Component{

       render() {
           return(
               <>
                   {/*<LevelThreeMenu/>*/}
                   <PrimaryNavigation/>
                   <div id = "physica-lrehabilitation-theory-guidance-wrap">

                   </div>
               </>
           )
       }
   }
)

//

{/*<PubNavComponent*/}
{/*  titles = {["身体康复理论指导","身体康复视频指导","身体康复风采指导"]}*/}
{/*/>*/}