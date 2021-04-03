import React, { Fragment,Component } from 'react'
import './App.less'
import {CombineRoutes} from './router/index'

export default class App extends Component {

    render () {
        return (
            <Fragment>
                <CombineRoutes/>
            </Fragment>
        )
    }
}