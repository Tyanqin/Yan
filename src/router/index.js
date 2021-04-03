import React,{Fragment} from 'react'
import {Route, Switch,NavLink } from 'react-router-dom'
import HomeContainer from '../container/HomeContainer/index'
import PhysicalRehabilitationTheoryGuidance from '../container/SecondaryNavigation/PhysicalRehabilitationTheoryGuidance'
import PsychologicalRehabilitation from '../container/SecondaryNavigation/PsychologicalRehabilitation'
import RehabilitationOfSocialFunction from '../container/SecondaryNavigation/RehabilitationOfSocialFunction'
import DrugMentor from '../container/SecondaryNavigation/DrugMentor'
import LaborRehabilitation from '../container/SecondaryNavigation/LaborRehabilitation'
import MedicalRehabilitation from '../container/SecondaryNavigation/MedicalRehabilitation'
import CognitiveRehabilitation from '../container/SecondaryNavigation/CognitiveRehabilitation'

export const CombineRoutes = () => (
    <Fragment>
        <Switch>
            <Route exact  path = "/" component={HomeContainer}/>
            {/*身体康复*/}
            <Route exact path = "/physicalRehabilitationTheoryGuidance" component={PhysicalRehabilitationTheoryGuidance}/>
            {/*心理康复*/}
            <Route exact path = "/psychologicalRehabilitation" component={PsychologicalRehabilitation}/>
            {/*社会功能康复*/}
            <Route exact path = "/rehabilitationOfSocialFunction" component={RehabilitationOfSocialFunction}/>
            {/*戒毒导师*/}
            <Route exact path = "/drugMentor" component={DrugMentor}/>
            {/*劳动康复*/}
            <Route exact path = "/laborRehabilitation" component={LaborRehabilitation}/>
            {/*劳动康复*/}
            <Route exact path = "/medicalRehabilitation" component={MedicalRehabilitation}/>
            {/*认知康复*/}
            <Route exact path = "/cognitiveRehabilitation" component={CognitiveRehabilitation}/>
        </Switch>
    </Fragment>
)

