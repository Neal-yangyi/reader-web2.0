import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {Brackets, NoticeItem, NoticeList, NoticeTitle, NoticeWrap} from "./style";

class Index extends PureComponent {
    render() {

        const aStyle = {
            'display': 'block',
            'overflow': 'hidden',
            'width': '196px',
            'whiteSpace': 'normal',
            'textOverflow': 'ellipsis',
            'color': '#262626'
        };

        return (
            <div className='fr'>
                <NoticeWrap>
                    <NoticeTitle>通知公告</NoticeTitle>
                    <NoticeList>
                        <ul>
                            <NoticeItem>
                                <Link to='' style={aStyle}>
                                    <Brackets>「</Brackets>
                                    资讯
                                    <Brackets>」</Brackets>
                                    游戏脑洞风暴征文
                                </Link>
                            </NoticeItem>
                            <NoticeItem>
                                <Link to='' style={aStyle}>
                                    <Brackets>「</Brackets>
                                    资讯
                                    <Brackets>」</Brackets>
                                    游戏脑洞风暴征文
                                </Link>
                            </NoticeItem>
                            <NoticeItem>
                                <Link to='' style={aStyle}>
                                    <Brackets>「</Brackets>
                                    资讯
                                    <Brackets>」</Brackets>
                                    游戏脑洞风暴征文
                                </Link>
                            </NoticeItem>
                        </ul>
                    </NoticeList>
                </NoticeWrap>
            </div>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Index)