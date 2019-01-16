import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../commont/header'
import LoginDialogComponent from "../../commont/LoginDialog";
import LogoWrap from "./components/LogoWrap/";
import MenuNav from '../../commont/MenuWrap';
import ClassifyList from './components/ClassifyList';
import Exhibition from './components/Exhibition';
import Notice from './components/NoticeWrap';
import BookListWrap from '../../commont/BookListWrap'
import EditRecWrap from './components/EditRecWrap'
import RankList from '../../commont/RankList'
import { getIndexNovel } from "../../api/novel";
import {Title} from "./style";

class Home extends PureComponent {

    constructor() {
        super();
        this.state = {
            indexNovel: {}
        }
    }

    componentDidMount() {
        getIndexNovel().then(res => {
            console.log(res.data);
            this.setState({
                indexNovel: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <Header/>

                <LoginDialogComponent/>

                <LogoWrap/>

                <MenuNav/>

                <div className='focus-wrap box-center mb40'>
                    <ClassifyList/>
                    <Exhibition/>
                    <Notice/>
                </div>

                <div className="box-center mb40" style={{ overflow: 'hidden' }}>
                    <BookListWrap pos = {0} title="本周强推" novelList = {this.state.indexNovel.recommendNovels}/>
                    <EditRecWrap novelList = {this.state.indexNovel.editNovels}/>
                    <BookListWrap pos = {1} title="网文新风" novelList = {this.state.indexNovel.newNovels}/>
                </div>
                <div className="rank-wrap box-center mb20">
                    <div>
                        <RankList title = '新书风云榜' novelList = { this.state.indexNovel.newNovelsRank }/>
                        <RankList title = '会员点击榜' novelList = { this.state.indexNovel.clickNovelsRank }/>
                        <RankList title = '推荐榜' novelList = { this.state.indexNovel.recommendNovelsRank }/>
                        <RankList title = '评分榜' novelList = { this.state.indexNovel.scoreNovelsRank }/>
                        <RankList last = { 1 } title = '完结榜' novelList = { this.state.indexNovel.completeNovelsRank }/>
                    </div>
                </div>
                <div className='box-center mb40'>
                    <div className='fl'>
                        <Title>最近更新</Title>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        indexNovel: state.get('home').get('indexNovel')
    }
};

const mapDispatch = (dispatch) => {
    return {
        // getIndexNovel() {
        //     dispatch(actionCreators.indexNovel())
        // }
    }
};

export default connect(mapState, mapDispatch)(Home)