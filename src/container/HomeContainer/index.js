import React from 'react'
import {connect} from 'react-redux'
import './style.css'
import PrimaryNavigation from '../components/PrimaryNavigation/index'
import BigImages from './BigImages/index'
import StepComponent from '../components/StepComponent'
import News from '../components/News'
import Footer from './footer'
import './style.css'
// import '../../App.less'
import Test from '../components/VideoSource/source/test1.mp4'
import VideoSource from '../components/VideoSource'
import HeaderComponent from '../components/HeaderComponent'
import ContentComponent from '../components/ContentComponent'
import NewBooks from '../components/NewBooks'
import LearningMaterials from '../components/LearningMaterials'
import VideoComponent from '../components/VideoComponent'


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

                    <VideoComponent/>
                    {/*<Footer/>*/}



                    {/*/!*<VideoSource/>*!/*/}


                    {/*大图*/}
                    {/*<BigImages/>*/}

                    {/*<News/>*/}
                    {/*<News/>*/}
                    {/*<News/>*/}
                    {/*<News/>*/}
                    {/*<News/>*/}
                    {/*<video controls="controls" width="320" height="240">*/}
                    {/*    <source src="movie.mp4" type="video/mp4">*/}
                    {/*</video>*/}
                    {/*<video width="320" height="240" controls>*/}
                    {/*    */}
                    {/*        <source src="movie.ogg" type="video/ogg">*/}
                    {/*            您的浏览器不支持 HTML5 video 标签。*/}
                    {/*</video>*/}
                    {/*<video width="320" height="240" controls>*/}
                    {/*    <source src={Test} type="video/mp4"/>*/}
                    {/*        /!*<source src="movie.ogg" type="video/ogg"/>*!/*/}
                    {/*        /!*    您的浏览器不支持 HTML5 video 标签。*!/*/}
                    {/*</video>*/}

                    {/*<Footer/>*/}

                    {/*<StepComponent/>*/}
                </>
            )
        }
    }
)