import React,{useRef,useState} from 'react'
import {connect} from 'react-redux'
import Intro from './source/intro.mp3'
import './style.css'
import BV from './imgs/bv.jpg'
import {even} from "../../../redux/actions/count_action";
// import ReactAudioPlayer from 'react-audio-player';

export default connect(state=>({}),{})(
    function AudioComponent () {
        const audioRef = useRef()

        const volumeBarRef = useRef()
        const progressBarRef = useRef()


        const handelPlayOnClick=()=>{
            if(audioRef.current.paused){
                audioRef.current.play()
            }else{
                audioRef.current.pause()
            }

        }

       const handelVolumeBarOnClick=e=>{

               let element = e.target;
               let coordinates = {x:0,y:0}
               coordinates.x = element.offsetLeft
               // console.log("coordinates.x======>   ",coordinates.x)
               element.parentNode.onmousemove = function(e){
                  let pointX =  e.clientX
                  let movePointX = e.target.parentNode.parentNode.offsetLeft
                  console.log("e.target.parentNode.parentNode===>  ",e.target.parentNode)
                   console.log("==================e.target.parentNode.offsetLeft======================   ",pointX,"  :  ",movePointX)
                   // element.style.left = pointX-movePointX+"px"
               }

               element.onmouseup = function(){
                   document.onmousemove = "";
                   element.parentNode.onmouseup = "";
               }







           return false

        }





        return(
            <>
                <div id = "audio-component-wrap">

                </div>
                <div id="audio-component-box">
                    <div>
                        {/*<ReactAudioPlayer*/}
                        {/*    src={""}*/}
                        {/*    autoPlay*/}
                        {/*    // controls*/}
                        {/*/>*/}

                        <audio  src={Intro}
                           ref = {audioRef}
                        >
                        </audio>
                    </div>
                    <div className="audio-component-img-box">
                        <img src={BV} alt=""/>
                    </div>
                    <div id="audio-component-controls">
                        <div><span className="iconfont" onClick = {handelPlayOnClick}>&#xe60a;</span></div>
                        <div><span className="iconfont">&#xeb15;</span></div>
                        <div><span className="iconfont">&#xeb14;</span></div>
                        <div><span className="iconfont">&#xe662;</span></div>
                        <div>
                            {/*进度条外框*/}
                            <div className = "volume-bar">
                                <div></div>
                                {/*拖拽的点*/}
                                <div onMouseDown={handelVolumeBarOnClick}></div>
                            </div>
                        </div>
                        <div>0:00&nbsp;&nbsp;/&nbsp;&nbsp;4:00</div>
                        <div>
                            {/*进度条外框*/}
                            <div className = "progress-bar">
                                <div></div>
                                {/*拖拽的点*/}
                                <div></div>
                            </div>
                        </div>
                        <div>4:00</div>
                        <div><span className="iconfont">&#xe786;</span></div>
                    </div>
                </div>

            </>
        )
    }
)