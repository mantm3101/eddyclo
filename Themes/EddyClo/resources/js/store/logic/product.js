import axios from "axios";

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const REQUEST_PRODUCTS_SUCCESS = "REQUEST_PRODUCTS_SUCCESS";
export const REQUEST_PRODUCTS_FAIL = "REQUEST_PRODUCTS_FAIL";

const requestProducts = () => {
    return {
        type: REQUEST_PRODUCTS
    };
};

const requestProductsFail = () => {
    return {
        type: REQUEST_PRODUCTS_FAIL
    };
};

const requestProductsSuccess = products => {
    return {
        type: REQUEST_PRODUCTS_SUCCESS,
        products
    };
};

export const fetchProducts = () => {
    return async dispatch => {
        dispatch(requestProducts());

        try {
            const { data } = await axios.get("/api/products");
            return dispatch(requestProductsSuccess(data.data));
        } catch (e) {
            console.log(e);
            return dispatch(requestProductsFail());
        }
    };
};
