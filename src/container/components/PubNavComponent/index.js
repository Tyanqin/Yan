import React from 'react'
import {connect} from "react-redux";
import { Menu } from 'antd';
import {SettingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

export default connect(state=>({}),{})(
    class PubNavComponent extends React.Component{
        state = {
            current: 'mail',
        };

        handleClick = e => {
            console.log('click ', e);
            this.setState({ current: e.key });
        };

        render() {
            return(
                <>
                    <Menu onClick={this.handleClick}  mode="horizontal" style = {{marginLeft:"153px",width:"80%"}}>
                        {
                            this.props.titles.map((item,index)=>{
                                return (
                                    <Menu.Item key={index} icon={<SettingOutlined />}>
                                        <Link to={"/physicalRehabilitationTheoryGuidance"} target={"_blank"}>{item}</Link>
                                    </Menu.Item>
                                )
                            })
                        }




                    </Menu>
                </>
            )
        }
    }
)

{/*<Menu.Item key="2" icon={<SettingOutlined />}>*/}
{/*    <Link to={"/physicalRehabilitationTheoryGuidance"} target={"_blank"}>{this.props.titles[1]}</Link>*/}
{/*</Menu.Item>*/}
{/*<Menu.Item key="3" icon={<SettingOutlined />}>*/}
{/*    <Link to={"/physicalRehabilitationTheoryGuidance"} target={"_blank"}>{this.props.titles[2]}</Link>*/}
{/*</Menu.Item>*/}
{/*<Menu.Item key="4" icon={<SettingOutlined />}>*/}
{/*    <Link to={"/physicalRehabilitationTheoryGuidance"} target={"_blank"}>{this.props.titles[3]}</Link>*/}
{/*</Menu.Item>*/}
{/*<Menu.Item key="5" icon={<SettingOutlined />}>*/}
{/*    <Link to={"/physicalRehabilitationTheoryGuidance"} target={"_blank"}>{this.props.titles[4]}</Link>*/}
{/*</Menu.Item>*/}
{/*<Menu.Item key="6" icon={<SettingOutlined />}>*/}
{/*    <Link to={"/physicalRehabilitationTheoryGuidance"} target={"_blank"}>{this.props.titles[5]}</Link>*/}
{/*</Menu.Item>*/}