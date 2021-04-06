import React from 'react'
import {connect} from 'react-redux'
import { Drawer} from 'antd';
import '../../../icon/iconfont.css'

import {
    Player,
    ControlBar,
    PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
    ReplayControl, // 后退按钮
    ForwardControl,  // 前进按钮
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,  // 倍速播放选项
    VolumeMenuButton
} from 'video-react';
import "../../../../node_modules/video-react/dist/video-react.css";
import Test from './source/test1.mp4'
import './style.css'

export default connect(state=>({}),{})(
    class VideoComponent extends React.Component{

        playRef=React.createRef()

        state = {
            visible: false,
            display:"none",
        };

        showDrawer = () => {
            this.setState({
                visible: !this.state.visible,
            });
        };

        onClose = () => {
            this.setState({
                visible: false,
            });
        };

        handelOnClickClose=()=>{
            //点击视频关闭按钮 隐藏遮罩
            this.props.updateDisplay("none")
            //点击视频关闭按钮 视频停止播放
            this.playRef.current.video.pause()
        }

        render() {
            let displaySate = this.props.display
            console.log("displaySate=================>    ",displaySate)
            return(
                <>
                    <div id = "mask" style={{display:this.props.display}}/>
                        <div id = "video-component-wrap" style={{display:this.props.display}}>
                            <div>
    　　　　　　　　　　　　　　　　　标题
                            </div>
                            <div onClick={this.handelOnClickClose}>
                                <button><span className="iconfont">&#xe665;</span></button>
                            </div>
                            <div onClick={this.showDrawer} style = {{display:this.props.flag}}>
                                ...
                            </div>
                            <div className="site-drawer-render-in-current-wrapper">
                                <Player
                                    fluid={false}
                                    width={"100%"}
                                    height = {"100%"}
                                    ref={this.playRef}

                                >
                                    <source src={Test} />
                                    <ControlBar autoHide={false} disableDefaultControls={false}>
                                        <ReplayControl seconds={10} order={1.1} />
                                        <ForwardControl seconds={30} order={1.2} />
                                        <PlayToggle />
                                        <CurrentTimeDisplay order={4.1} />
                                        <TimeDivider order={4.2} />
                                        <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
                                        <VolumeMenuButton />
                                    </ControlBar>
                                </Player>
                                <Drawer
                                    // title="播放列表"
                                    placement="right"
                                    closable={false}
                                    onClose={this.onClose}
                                    visible={this.state.visible}
                                    getContainer={false}
                                    maskStyle={{background:"rgba(255,255,255,0)"}}
                                    maskClosable = {true}
                                    headerStyle={{background:"rgba(28,28,28,0.5)",borderBottom:"1px solid #000"}}
                                    drawerStyle={{background:"rgba(28,28,28,0.5)"}}
                                    style={{ position: 'absolute'}}
                                >
                                    <ul onClick = {this.showDrawer}>
                                        <li><a id = "0" href="#">点击播放</a></li>
                                        <li><a id = "1" href="#">点击播放</a></li>
                                        <li><a id = "2" href="#">点击播放</a></li>
                                        <li><a id = "3" href="#">点击播放</a></li>
                                        <li><a id = "4" href="#">点击播放</a></li>
                                        <li><a id = "5" href="#">点击播放</a></li>
                                        <li><a id = "6" href="#">点击播放</a></li>
                                        <li><a id = "7" href="#">点击播放</a></li>
                                        <li><a id = "8" href="#">点击播放</a></li>
                                    </ul>
                                </Drawer>
                            </div>
                        </div>

                </>
            )
        }


    }
)