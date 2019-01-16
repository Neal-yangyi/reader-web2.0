import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {FocusBox, Slider} from "./style";
import { Carousel } from 'antd';

class Index extends PureComponent{
    constructor() {
        super();
        this.state = {
            cover: ['http://nealcaffrey.oss-cn-beijing.aliyuncs.com/cover/csom.jpg',
                'http://nealcaffrey.oss-cn-beijing.aliyuncs.com/cover/cyjs.jpg',
                'http://nealcaffrey.oss-cn-beijing.aliyuncs.com/cover/jddzz.jpg',
                'http://nealcaffrey.oss-cn-beijing.aliyuncs.com/cover/sx.jpg'],
        }
    }

    render() {
        return (
            <FocusBox>
                <Slider>
                    <Carousel trigger = "click">
                        {
                            this.state.cover.map((item, index) => (
                                <div key = {index}>
                                    <img src = {item} alt="cover" width="748" height="250"/>
                                </div> )
                            )
                        }
                    </Carousel>
                </Slider>
            </FocusBox>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Index)