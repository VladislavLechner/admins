import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import AccumulatorsReducer from "./reducers/accumulators-reducer";
import AlarmReducer from "./reducers/alarm-reducer";
import BatteryReducer from "./reducers/battery-reducer";
import SettingsReducer from "./reducers/settings-reducer";
import SystemReducer from "./reducers/system-reducer";

//собираем данные из всех редукторов в один стор
let rootReducer = combineReducers({
    AccumulatorsPage: AccumulatorsReducer,
    AlarmPage: AlarmReducer,
    BatteryPage: BatteryReducer,
    SettingsPage: SettingsReducer,
    SystemPage: SystemReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleWare)
));

export default store