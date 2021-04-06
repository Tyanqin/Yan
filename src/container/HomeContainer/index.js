import React from 'react'
import {connect} from 'react-redux'
import PrimaryNavigation from '../components/PrimaryNavigation/index'
import News from '../components/News'
import Footer from './footer'
import './style.css'

import HeaderComponent from '../components/HeaderComponent'
import ContentComponent from '../components/ContentComponent'
import NewBooks from '../components/NewBooks'
import LearningMaterials from '../components/LearningMaterials'
import AudioComponent from '../components/AudioComponent'



export default connect(state=>({}),{})(
    class HomeContainer extends React.Component{
        render() {
            return(
                <>
                    <HeaderComponent/>
                    {/*一级导航*/}
                    <PrimaryNavigation/>
                    {/*内容区*/}
                    <ContentComponent/>
                    <NewBooks
                       title = "指导"
                    />
                    <NewBooks
                        title = "康复"
                    />
                    {/*/!*热门*!/*/}
                    <News
                      title = {"音乐"}
                    />
                    {/*/!*热门*!/*/}
                    <News
                       title = {"视频"}
                    />
                    {/*/!*热门*!/*/}
                    <News
                      title = "艺术"
                    />
                    {/*学习资料*/}
                    <LearningMaterials/>
                    {/*学习资料*/}
                    <LearningMaterials/>
                    {/*音乐组件*/}
                    <AudioComponent/>

                    <Footer/>
                </>
            )
        }
    }
)