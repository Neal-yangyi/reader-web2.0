import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
    Author, BookCover,
    BookInfo,
    BookWrap, Cover,
    Digital,
    First,
    FirstPlace,
    FirstTitle, NameBox, NumBox, Other,
    Point, RankListItem,
    RankListWrap,
    RecNum, Second, Third,
    Title, Total
} from "./style";

class Index extends PureComponent {

    constructor() {
        super();
        this.state = {
            first: {},
            second: {},
            third: {},
            novelList: []
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const novelList = nextProps.novelList;
        this.setState({
            first: novelList.shift(),
            second: novelList.shift(),
            third: novelList.shift(),
            novelList: novelList
        })
    }

    render() {

        const titleStyle = {
            'overflow': 'hidden',
            'height': '31px',
            'whiteSpace': 'nowrap',
            'textOverflow': 'ellipsis',
            'color': '#1a1a1a',
            'font': "14px/31px PingFangSC-Regular,'-apple-system',Simsun",
            'float': 'left',
            'width': '116px'
        };

        const coverStyle = {
            'position': 'relative',
            'zIndex': '10',
            'display': 'inline-block',
            'transform': 'translateZ(50px)'
        };

        return (
            <RankListWrap style = { this.props.last !== 1 ? {  marginRight: 30 } : {}}>
                <Title className = "lang">{ this.props.title }</Title>
                <div>
                    <ul>
                        <FirstPlace>
                            <BookWrap>
                                <BookInfo>
                                    <First>NO.1</First>
                                    <FirstTitle>{ this.state.first.title }</FirstTitle>
                                    <Digital>
                                        <RecNum> { this.state.first.recommendNum } </RecNum>
                                        推荐
                                    </Digital>
                                    <Author>
                                        <Link to="" style = {{ color: '#a6a6a6' }}>{ this.state.first.labelName }</Link>
                                        <Point>·</Point>
                                        <Link to="" style = {{ color: '#a6a6a6' }}>{ this.state.first.username }</Link>
                                    </Author>
                                </BookInfo>
                                <BookCover>
                                    <Link to = "" style = { coverStyle }>
                                        <Cover src = { this.state.first.cover }></Cover>
                                    </Link>
                                </BookCover>
                            </BookWrap>
                        </FirstPlace>
                        <RankListItem>
                            <NumBox>
                                <Second>2</Second>
                            </NumBox>
                            <NameBox>
                                <Link to="" style = {titleStyle}>{ this.state.second.title }</Link>
                                <Total>{ this.state.second.recommendNum }</Total>
                            </NameBox>
                        </RankListItem>
                        <RankListItem>
                            <NumBox>
                                <Third>3</Third>
                            </NumBox>
                            <NameBox>
                                <Link to="" style = {titleStyle}>{ this.state.third.title }</Link>
                                <Total>{ this.state.third.recommendNum }</Total>
                            </NameBox>
                        </RankListItem>
                        {
                            this.state.novelList.map((item, index) => {
                                return <RankListItem key = { index }>
                                    <NumBox>
                                        <Other>{ index + 4 }</Other>
                                    </NumBox>
                                    <NameBox>
                                        <Link to="" style = {titleStyle}>{ item.title }</Link>
                                        <Total>{ item.recommendNum }</Total>
                                    </NameBox>
                                </RankListItem>
                            })
                        }
                    </ul>
                </div>
            </RankListWrap>
        )
    }
}

const mapState = (state) => {
    return {

    }
};

const mapDispatch = (dispatch) => {
    return {

    }
};

export default connect(mapState, mapDispatch)(Index)