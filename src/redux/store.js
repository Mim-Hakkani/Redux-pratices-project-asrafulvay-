import colorReducer from "./reducers/colorReducer";
import counterReducer from "./reducers/counterReducer";

const { createStore, combineReducers } = require("redux");

const rootReducer = combineReducers({
    color : colorReducer,
    counter :counterReducer
})

const store = createStore(rootReducer);

export default store;