import {
    REQUEST_PRODUCTS,
    REQUEST_PRODUCTS_SUCCESS,
    REQUEST_PRODUCTS_FAIL
} from "../logic/product";

const initialState = {
    loading: false,
    data: [],
    errorMsg: "",
    successMsg: ""
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                ...state,
                loading: true
            };
        case REQUEST_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: true,
                data: action.products
            };
        case REQUEST_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default products;
