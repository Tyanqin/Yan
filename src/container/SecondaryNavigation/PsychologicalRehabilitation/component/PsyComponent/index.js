import React from 'react'
import {connect} from 'react-redux'
import DocumentsComponent from '../../../../SecondaryNavigationComponent/DocumentsComponent'
import CardComponent from '../../../../SecondaryNavigationComponent/CardComponent'
import '../../../../../icon/iconfont.css'
import './style.css'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

export default connect(state=>({}),{})(

    class PsyComponent extends React.Component {

        callback=(key)=> {
            console.log(key);
        }

        render() {
            return (
                <>
                    <div id = "pub-page-component-wrap">
                        <Tabs defaultActiveKey="1"
                              onChange={this.callback}
                              tabBarGutter = {50}
                              style={{
                                  position:"absolute",
                                  top:0,
                                  left:"15%",
                                  right:0,
                                  bottom:0,
                                  width:"70%",
                                  height:"100%",
                                  background:"#FFF"
                              }}
                        >
                            <TabPane tab="心理指导中心简介" key="4">
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                                <DocumentsComponent/>
                            </TabPane>
                            <TabPane tab="常见心理问题" key="5">
                                <CardComponent
                                    image = {"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fsite1000%2F2019-06%2F26%2F5b6809c2-c111-47f9-a371-6b851c62dfc4_batchwm.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620305680&t=8ce10ef81b364ce540c55aeb328a9263"}
                                    secondaryTitle = {"摘要"}
                                    title = {"毒瘾发作后的自救手段！"}
                                    sourceFlag = {1}
                                    // imgStyle = {{width:"15%"}}
                                />
                                <CardComponent
                                    image = {"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fsite1000%2F2019-06%2F26%2F5b6809c2-c111-47f9-a371-6b851c62dfc4_batchwm.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620305680&t=8ce10ef81b364ce540c55aeb328a9263"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                    sourceFlag = {1}
                                />
                                <CardComponent
                                    image = {"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fsite1000%2F2019-06%2F26%2F5b6809c2-c111-47f9-a371-6b851c62dfc4_batchwm.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620305680&t=8ce10ef81b364ce540c55aeb328a9263"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                    sourceFlag = {1}
                                />
                                <CardComponent
                                    image = {"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fsite1000%2F2019-06%2F26%2F5b6809c2-c111-47f9-a371-6b851c62dfc4_batchwm.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620305680&t=8ce10ef81b364ce540c55aeb328a9263"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                    sourceFlag = {1}
                                />
                                <CardComponent
                                    image = {"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fsite1000%2F2019-06%2F26%2F5b6809c2-c111-47f9-a371-6b851c62dfc4_batchwm.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620305680&t=8ce10ef81b364ce540c55aeb328a9263"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                    sourceFlag = {1}
                                />
                                <CardComponent
                                    image = {"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fsite1000%2F2019-06%2F26%2F5b6809c2-c111-47f9-a371-6b851c62dfc4_batchwm.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620305680&t=8ce10ef81b364ce540c55aeb328a9263"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                    sourceFlag = {1}
                                />
                                <CardComponent
                                    image = {"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fsite1000%2F2019-06%2F26%2F5b6809c2-c111-47f9-a371-6b851c62dfc4_batchwm.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620305680&t=8ce10ef81b364ce540c55aeb328a9263"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                    sourceFlag = {1}
                                />
                                <CardComponent
                                    image = {"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fsite1000%2F2019-06%2F26%2F5b6809c2-c111-47f9-a371-6b851c62dfc4_batchwm.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620305680&t=8ce10ef81b364ce540c55aeb328a9263"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                    sourceFlag = {1}
                                />
                                <CardComponent
                                    image = {"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fsite1000%2F2019-06%2F26%2F5b6809c2-c111-47f9-a371-6b851c62dfc4_batchwm.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620305680&t=8ce10ef81b364ce540c55aeb328a9263"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                    sourceFlag = {1}
                                />
                            </TabPane>
                            <TabPane tab="心理健康知识普及" key="6">
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"他说！风雨过后将是绚丽的彩虹！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"相信自己，我们可以的！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"人生还有诗和远方！他开心的像个孩子。"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                            </TabPane>
                            <TabPane tab="同伴教育" key="7">
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"他说！风雨过后将是绚丽的彩虹！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"相信自己，我们可以的！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"人生还有诗和远方！他开心的像个孩子。"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                            </TabPane>
                            <TabPane tab="艺术鉴赏" key="8">
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"他说！风雨过后将是绚丽的彩虹！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"相信自己，我们可以的！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"人生还有诗和远方！他开心的像个孩子。"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                            </TabPane>
                            <TabPane tab="咨询师风采" key="9">
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"他说！风雨过后将是绚丽的彩虹！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"相信自己，我们可以的！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"人生还有诗和远方！他开心的像个孩子。"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                                <CardComponent
                                    imageUrl = {"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/96dda144ad345982b13aba540df431adcaef8447.jpg"}
                                    secondaryTitle = {"摘要"}
                                    title = {"康复后，他开启了另一段人生！"}
                                />
                            </TabPane>

                        </Tabs>
                    </div>
                </>

            );
        }
    }
)