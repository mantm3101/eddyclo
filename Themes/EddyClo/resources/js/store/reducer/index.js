import profile from "./profile";
import products from "./products";
import { combineReducers } from "redux";

const reducer = combineReducers({
    profile,
    products
});

export default reducer;
