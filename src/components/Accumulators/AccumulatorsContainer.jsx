import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Accumulators from "./Accumulators";
import {getAccumsThunkCreator} from "../../redux/reducers/accumulators-reducer";

let mapDispatchToProps = (dispatch) =>{
    return {
        getAccumulators: () => {
            dispatch(getAccumsThunkCreator())
        }
    }
}
let mapStateToProps = (state) =>{
    return {
        state: state,
        accumulators: state.AccumulatorsPage.accumulators
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Accumulators);