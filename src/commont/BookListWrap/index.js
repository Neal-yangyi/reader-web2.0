import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {BookItem, BookList, NovelName, Title, Brackets} from "./style";

class Index extends PureComponent{

    constructor() {
        super();
        this.state = {
            novelList: []
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            novelList: nextProps.novelList
        })
    }

    render() {
        const labelStyle = {
            'overflow': 'hidden',
            'minWidth': '56px',
            'height': '32px',
            'marginLeft': '-8px',
            'color': 'grey',
            'font': "14px/32px PingFangSC-Regular,'-apple-system',Simsun",
            'float': 'left'
        };

        const titleStyle = {
            'overflow': 'hidden',
            'maxWidth': '100px',
            'marginLeft': '0',
            'whiteSpace': 'nowrap',
            'textOverflow': 'ellipsis',
            'color': '#1a1a1a',
            'font': "14px/32px PingFangSC-Regular,'-apple-system',Simsun",
            'float': 'left'
        };

        const authorStyle = {
            'font': "12px/32px PingFangSC-Regular,'-apple-system',Simsun",
            'float': 'right',
            'overflow': 'hidden',
            'width': '64px',
            'textAlign': 'right',
            'whiteSpace': 'normal',
            'textOverflow': 'ellipsis',
            'color': '#b3b3b3'
        };

        return (
            <div className='book-list-wrap' style={this.props.pos === 0 ? { float: 'left', marginRight: '30px' } : { float: 'right' }}>
                <Title>
                    {this.props.title}
                </Title>
                <div className='book-list'>
                    <BookList>
                        {
                            this.state.novelList.map((item, index) => {
                                return <BookItem key = { index }>
                                            <Link style={labelStyle} to="">
                                                <Brackets>
                                                    「
                                                </Brackets>
                                                { item.labelName }
                                                <Brackets>
                                                    」
                                                </Brackets>
                                            </Link>
                                            <NovelName>
                                                <Link style = { titleStyle } to="">{ item.title }</Link>
                                            </NovelName>
                                            <Link style = { authorStyle } to="">{ item.username }</Link>
                                        </BookItem>
                            })
                        }
                    </BookList>
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Index)