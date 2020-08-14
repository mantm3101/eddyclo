import { REQUEST_PROFILE, REQUEST_PROFILE_FAIL, REQUEST_PROFILE_SUCCESS } from "../logic/profile";

const defaultProfile = {
    loading : false,
    data: null,
    errorMsg : "",
    successMsg: ""
};

const profile = (state = defaultProfile, action) => {
    switch(action.type){
        case REQUEST_PROFILE:
            return {
                ...state,
                loading: true
            };
        case REQUEST_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "Error",

            };
        case REQUEST_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                successMsg: "Success",
                data: action.profile
            };
        default:
            return state;
    }
}

export default profile;
