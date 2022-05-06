const NEW_DATA = 'NEW-DATA'

let initialState = {
    some: null,
}

const BatteryReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_DATA: {
            return state
        }
        default:
            return state
    }
}

export default BatteryReducer;
