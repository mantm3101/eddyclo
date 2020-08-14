import axios from "axios";
import { fetchProfile } from "./profile";

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_LOGIN_FAIL = "REQUEST_LOGIN_FAIL";
export const REQUEST_LOGIN_SUCCESS = "REQUEST_LOGIN_SUCCESS";

const requestLogin = credential => {
    return {
        type: REQUEST_LOGIN,
        credential
    };
};

const requestLoginSuccess = () => {
    return {
        type: REQUEST_LOGIN_SUCCESS
    };
};

const requestLoginFail = () => {
    return {
        type: REQUEST_LOGIN_FAIL
    };
};

export const callLogin = credential => {
    return async dispatch => {
        dispatch(requestLogin(credential));

        try {
            const { data } = await axios.post(
                `http://eddyclo.test/api/auth_token`,
                credential
            );

            localStorage.setItem("auth_token", data.access_token);

            dispatch(requestLoginSuccess());

            return dispatch(fetchProfile());
        } catch (e) {
            return dispatch(requestLoginFail());
        }
    };
};
