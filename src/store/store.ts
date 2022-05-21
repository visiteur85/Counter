import {combineReducers, createStore} from "redux";
import {countReucer} from "./countReucer";

let  rootReducer = combineReducers({
    count:countReucer
});

export type rootReducerType = ReturnType<typeof rootReducer>;
export let store = createStore(rootReducer)