import {getAccumulators} from "../../api/api";

const SET_ACCUMULATORS = 'SET-ACCUMULATORS'

let initialState = {
    accumulators:[
        // {
        //     id: 1,
        //     temperature: 20
        // },
        // {
        //     id: 2,
        //     temperature: 22
        // },
        // {
        //     id: 3,
        //     temperature: 23
        // },
        // {
        //     id: 4,
        //     temperature: 24
        // },
        // {
        //     id: 5,
        //     temperature: 10
        // },
        // {
        //     id: 6,
        //     temperature: 11
        // },
    ]
}

const AccumulatorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCUMULATORS: {
            return {
                ...state,
                accumulators: action.accumulators
            }
        }
        default:
            return state
    }
}


export const setAccumulators = (accumulators) => {
    return{
        type: SET_ACCUMULATORS,
        accumulators: accumulators
    }
}
export const getAccumsThunkCreator = () => {
    return async (dispatch) => {
        let accumulators = await getAccumulators()
        console.log(accumulators)
        dispatch(setAccumulators(accumulators))
    }
}

export default AccumulatorsReducer;
