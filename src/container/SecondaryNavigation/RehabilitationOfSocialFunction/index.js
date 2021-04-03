import React from 'react'
import {connect} from "react-redux";
import PubNavComponent from '../../components/PubNavComponent/index'


export default connect(state=>({}),{})(
   class RehabilitationOfSocialFunction extends React.Component{
       render() {
           return(
               <>
                  <PubNavComponent
                    titles = {["社会适应性考验","社会功能训练指导","社会康复知识指导","回访情况",,"社会帮教"]}
                  />
               </>
           )
       }
   }
)

{/*亲情帮教，法律援助，团体帮教*/}
