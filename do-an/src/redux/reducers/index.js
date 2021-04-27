import openFormReducers from "./openForm";
import LoginReducers from "./account";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    openForm: openFormReducers,
    Login: LoginReducers
});
export default rootReducer;