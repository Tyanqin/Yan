import React from 'react'
import {connect} from "react-redux";
import PsyComponent from './component/PsyComponent'
import PrimaryNavigation from "../../components/PrimaryNavigation";

export default connect(state=>({}),{})(
    class PsychologicalRehabilitation extends React.Component{
        render() {
            return(
                <>

                    <PrimaryNavigation
                        background = {"#F2F8FE"}
                        boxShadow={"5px 5px 5px #CFCFCF"}
                        height = {""}
                    />
                    <PsyComponent/>
                </>
            )
        }
    }
)
