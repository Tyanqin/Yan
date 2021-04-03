import React from 'react'
import {connect} from 'react-redux'

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

        state={
            display:"none"
        }

        // componentDidMount() {
        //     console.log(this.player)
        //     this.player.subscribeToStateChange(this.handleStateChange.bind(this));
        // }
        //
        // handleStateChange(state, prevState) {
        //     console.log(state)
        // }

        // muted="muted"

        render() {
            return(
                <>
                    <div id = "mask"/>
                    <div id = "video-component-wrap">
                        <div>
　　　　　　　　　　　　　　　　　标题
                        </div>
                        <div>
                            x
                        </div>
                        <Player
                            fluid={false}
                            autoPlay={true}
                            width={800}
                            height = {500}
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

                    </div>

                </>
            )
        }
    }
)