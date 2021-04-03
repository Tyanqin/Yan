import React from 'react'
import {connect} from "react-redux";
import PubNavComponent from '../../components/PubNavComponent/index'
import {Menu} from "antd";

export default connect(state=>({}),{})(
   class MedicalRehabilitation extends React.Component{
       render() {
           return(
               <>
                  <PubNavComponent
                    titles = {["医疗戒毒知识指导","生活知识指导","卫生防疫知识指导"]}
                  />
               </>
           )
       }
   }
)

{/*<SubMenu key="6" icon={<SettingOutlined />} title="医疗康复">*/}
{/*    <Menu.Item key="setting:1" icon={<SettingOutlined />}>医疗戒毒知识指导</Menu.Item>*/}
{/*    <Menu.Item key="setting:2" icon={<SettingOutlined />}>生活知识指导</Menu.Item>*/}
{/*    <Menu.Item key="setting:3" icon={<SettingOutlined />}>卫生防疫知识指导</Menu.Item>*/}
{/*</SubMenu>*/}