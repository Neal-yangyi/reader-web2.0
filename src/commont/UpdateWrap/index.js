import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {ListUl, UpdateRecList} from "./style";

class Index extends PureComponent{

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <UpdateRecList>
                <ListUl>

                </ListUl>
            </UpdateRecList>
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