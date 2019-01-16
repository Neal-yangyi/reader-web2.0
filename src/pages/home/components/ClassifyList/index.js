import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {ClassifyItem, ClassifyList, LabelName, Icon, Label, Title} from "./style";

class Index extends PureComponent{
    render() {
        const aStyle = {
            'display': 'block',
            'color': '#333'
        };

        return (
            <ClassifyList>
                <dl>
                    <ClassifyItem className = 'fl'>
                        <Link to='' style = {aStyle}>
                            <Label>
                                <Icon className = 'iconfont icon-qihuan'/>
                                <Title>
                                    <LabelName>奇幻玄幻</LabelName>
                                </Title>
                            </Label>
                        </Link>
                    </ClassifyItem>
                    <ClassifyItem className = 'fl'>
                        <Link to='' style = {aStyle}>
                            <Label>
                                <Icon className = 'iconfont icon-xianxia'/>
                                <Title>
                                    <LabelName>武侠仙侠</LabelName>
                                </Title>
                            </Label>
                        </Link>
                    </ClassifyItem>
                    <ClassifyItem className = 'fl'>
                        <Link to='' style = {aStyle}>
                            <Label>
                                <Icon className = 'iconfont icon-junshi'/>
                                <Title>
                                    <LabelName>历史军事</LabelName>
                                </Title>
                            </Label>
                        </Link>
                    </ClassifyItem>
                    <ClassifyItem className = 'fl'>
                        <Link to='' style = {aStyle}>
                            <Label>
                                <Icon className = 'iconfont icon-dushi'/>
                                <Title>
                                    <LabelName>都市言情</LabelName>
                                </Title>
                            </Label>
                        </Link>
                    </ClassifyItem>
                    <ClassifyItem className = 'fl'>
                        <Link to='' style = {aStyle}>
                            <Label>
                                <Icon className = 'iconfont icon-lingyi'/>
                                <Title>
                                    <LabelName>科幻灵异</LabelName>
                                </Title>
                            </Label>
                        </Link>
                    </ClassifyItem>
                    <ClassifyItem className = 'fl'>
                        <Link to='' style = {aStyle}>
                            <Label>
                                <Icon className = 'iconfont icon-wangyou'/>
                                <Title>
                                    <LabelName>网游竞技</LabelName>
                                </Title>
                            </Label>
                        </Link>
                    </ClassifyItem>
                    <ClassifyItem className = 'fl'>
                        <Link to='' style = {aStyle}>
                            <Label>
                                <Icon className = 'iconfont icon-nvsheng'/>
                                <Title>
                                    <LabelName>女生频道</LabelName>
                                </Title>
                            </Label>
                        </Link>
                    </ClassifyItem>
                </dl>
            </ClassifyList>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Index)