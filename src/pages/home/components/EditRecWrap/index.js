import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import {EditRecWrap, FocusToday, SliderWrap, Title} from "./style";

class Index extends PureComponent {

    constructor() {
        super();
        this.state = {
            sliderNovels: [],
            textNovels: [],
            cardNovels: []
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const novelList = nextProps.novelList;
        this.setState({
            sliderNovels: novelList.splice(0, 7),
            textNovels: novelList.splice(0, 6),
            cardNovels: novelList
        })
    }

    render() {
        return (
            <EditRecWrap>
                <Title>编辑推荐</Title>
                <FocusToday>
                    <SliderWrap>
                        {/*<Carousel autoplay centerMode={true } className='center' infinite = {false} slidesToShow = {3}>*/}
                                {/*{*/}
                                    {/*this.state.sliderNovels.map((item, index) => {*/}
                                        {/*return <div key = {index}>*/}
                                            {/*<img src={item.cover} alt="" width={93} height={124}/>*/}
                                        {/*</div>*/}
                                    {/*})*/}
                                {/*}*/}
                        {/*</Carousel>*/}
                    </SliderWrap>
                </FocusToday>
            </EditRecWrap>
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