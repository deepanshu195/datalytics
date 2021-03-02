import { combineReducers } from "redux";
import demo from "./demo"
const appReducer = combineReducers({
    demo:demo
});
export const rootReducer = (state, action) => {
    return appReducer(state, action);
};
