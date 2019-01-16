import  React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {LoginBox, LoginBtn, Logout, Message, RegBtn, Separator, SiteName, TopNav, TopWrap, Username} from "./style";
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {actionCreators as messageActionCreators} from "../../pages/message/store";

class Header extends PureComponent {

    componentDidMount() {
        if (this.props.account != null) {
            this.props.getUnReadNum()
        }
    }

    render() {
        const { handleLoginDialog, logout, account, unreadNum } = this.props;
        return (
            <TopNav>
                <TopWrap>
                    <Link to="/">
                        <SiteName>
                            日夜阅读
                        </SiteName>
                    </Link>
                    <LoginBox>
                        {
                            account != null ?
                                <div>
                                    <span className="fl">你好，</span>
                                    <Link to = "/">
                                        <Username className = 'loaded'>{ account }</Username>
                                    </Link>
                                    <Separator>|</Separator>
                                    <Link to = "/">
                                        <Message className = 'loaded'>消息({ unreadNum })</Message>
                                    </Link>
                                    <Separator>|</Separator>
                                    <Link to = "/">
                                        <Logout className = 'loaded' onClick = { () => logout() }>退出</Logout>
                                    </Link>
                                </div> :
                                <div>
                                    <LoginBtn className = 'loaded' onClick = { () => handleLoginDialog() }>登录</LoginBtn>
                                    <Separator>|</Separator>
                                    <Link to="/">
                                        <RegBtn className = 'loaded'>注册</RegBtn>
                                    </Link>
                                </div>
                        }
                    </LoginBox>
                </TopWrap>
            </TopNav>
        )
    }
}

const mapState = (state) => {
    return {
        loginDialog: state.get('header').get('loginDialog'),
        loginState: state.get('login').get('login'),
        account: state.get('login').get('account'),
        unreadNum: state.get('login').get('unreadNum')
    }
};

const mapDispatch = (dispatch) => {
    return {
        handleLoginDialog() {
            dispatch(actionCreators.changeLoginDialog())
        },
        login(accountElem, passwordElem) {
            dispatch(loginActionCreators.login(accountElem.value, passwordElem.value))
        },
        logout() {
            dispatch(loginActionCreators.logOut())
        },
        getUnReadNum() {
            dispatch(messageActionCreators.getUnReadNum())
        }
    }
};

export default connect(mapState, mapDispatch)(Header)