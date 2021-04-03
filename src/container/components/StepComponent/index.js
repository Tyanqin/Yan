import React from 'react'
import {connect} from 'react-redux'
import { Steps } from 'antd';
import './style.css'
const { Step } = Steps;



export default connect(state=>({}),{})(
    class StepComponent extends React.Component{

        state={
            current: 0
        }

        //点击跳转
        onChange = (current) => {

            console.log("current=====>   ",current)
            switch (current) {
                case 0:
                    this.setState({
                        current:0
                    })
                    break;
                case 1:
                    this.setState({
                        current:1
                    })
                    break;
                default:
                    this.setState({
                        current:2
                    })
                    break;
            }
            this.setState({ current })
        }

        render() {
            return(
                <>
                   <div id = "step-wrap">
                       <Steps
                           direction="vertical"
                           size="small"
                           style={{width:100}}
                           current={this.state.current}
                           onChange={this.onChange}
                       >
                           <Step
                               title="第一步"
                               // status="finish"
                               // description="This is a description."
                           />
                           <Step
                               title="第二步"
                               // status="process"
                               // description="This is a description."
                           />
                           <Step
                               title="第三步"
                               // status="wait"
                               // description="This is a description."
                           />
                       </Steps>
                   </div>
                </>
            )
        }
    }
)