import api from '../../api';


export const REQUEST_PROFILE = 'FETCH_PROFILE';
export const REQUEST_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const REQUEST_PROFILE_FAIL = 'FETCH_PROFILE_FAIL';

const requestProfile = () => {
    return {
        type: REQUEST_PROFILE
    }
}

const requestProfileSuccess = (profile) => {
    return {
        type: REQUEST_PROFILE_SUCCESS,
        profile
    }
}

const requestProfileFail= () => {
    return {
        type: REQUEST_PROFILE_FAIL
    }
}

export const fetchProfile = () => {

    return async dispatch => {

        if(!localStorage.getItem('auth_token')){
            return dispatch(requestProfileFail("Invalid credential"));
        }

        dispatch(requestProfile());

        try{
            const { data } = await api.get('http://eddyclo.test/api/profile');
            return dispatch(requestProfileSuccess(data));
        }catch(err){
            localStorage.removeItem('auth_token');
            return dispatch(requestProfileFail("No"));
        }
    }
}
