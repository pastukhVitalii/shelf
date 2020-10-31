import {combineReducers, createStore} from "redux";
import roleReducer from "./roleReducer";

let rootReducer = combineReducers({
    userRole: roleReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);
export default store;

// @ts-ignore
window.store = store