import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {BookShelf, Logo, LogoWrap, SearchWrap, ShelfIcon, ShelfTxt} from "./style";
import { Link } from 'react-router-dom'
import { Input } from 'antd';

const Search = Input.Search;

class Index extends PureComponent{

    render() {
        const aStyle = {
            'font': '14px/1 PingFangSC-Regular',
            'display': 'block',
            'width': '118px',
            'height': '38px',
            'textAlign': 'center',
            'border': '1px solid #e6e6e6'
        };

        const logoStyle = {
            'display': 'block',
            'width': '100%',
            'height': '100%',
            'background': 'url(https://nealcaffrey.oss-cn-beijing.aliyuncs.com/cover/riyeyuedu.png) no-repeat'
        };

        return (
            <div>
                <LogoWrap>
                    <div className='box-center'>
                        <BookShelf className = 'fr'>
                            <Link to='' style={aStyle}>
                                <ShelfIcon className='iconfont icon-shujia'/>
                                <ShelfTxt>我的书架</ShelfTxt>
                            </Link>
                        </BookShelf>
                        <Logo className = 'fl'>
                            <Link to='/' style = {logoStyle}/>
                        </Logo>

                        <SearchWrap>
                            <Search
                                placeholder="神墓"
                                enterButton
                                size="large"
                            />
                        </SearchWrap>

                    </div>
                </LogoWrap>
            </div>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Index)