//여러 reducer 파일을 하나로 합치기 combinereducer 사용

import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";


export default combineReducers({
    auth: authenticateReducer,
    product: productReducer
});