import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import {MainNav, MenuWrap} from "./style";

const SubMenu = Menu.SubMenu;


class Index extends PureComponent{

    render() {



        return (
            <MenuWrap>
                <MainNav className = 'box-center'>
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        defaultOpenKeys={['allType']}
                        selectedKeys={['allType']}
                    >
                        <SubMenu key='allType' style = {{width: 214}} title={<span className="submenu-title-wrapper"><Icon type="bars" />作品分类</span>}>
                            {/*<Menu.Item key="1" style = {{width: 214}}>奇幻玄幻</Menu.Item>*/}
                            {/*<Menu.Item key="2" style = {{width: 214}}>武侠仙侠</Menu.Item>*/}
                            {/*<Menu.Item key="3" style = {{width: 214}}>都市言情</Menu.Item>*/}
                            {/*<Menu.Item key="4" style = {{width: 214}}>历史军事</Menu.Item>*/}
                            {/*<Menu.Item key="5" style = {{width: 214}}>科幻灵异</Menu.Item>*/}
                            {/*<Menu.Item key="6" style = {{width: 214}}>网游竞技</Menu.Item>*/}
                            {/*<Menu.Item key="7" style = {{width: 214}}>女生频道</Menu.Item>*/}
                        </SubMenu>
                        <Menu.Item key="all" style = {{ width: 116, textAlign: 'center'}}>
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">全部作品</a>
                        </Menu.Item>
                        <Menu.Item key="rank" style = {{ width: 96}}>
                            排行
                        </Menu.Item>
                        <Menu.Item key="finish" style = {{ width: 96}}>
                            完本
                        </Menu.Item>
                        <Menu.Item key="free" style = {{ width: 96}}>
                            免费
                        </Menu.Item>
                        <Menu.Item key="author" style = {{ width: 96}}>
                            作家专区
                        </Menu.Item>
                    </Menu>
                </MainNav>

            </MenuWrap>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Index)