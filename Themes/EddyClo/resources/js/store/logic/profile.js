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
        dispatch(requestProfile());

        try{
            const { data } = await api.get('http://eddyclo.test/api/profile');
            return dispatch(requestProfileSuccess());
        }catch(err){
            return dispatch(requestProfileFail());
        }
    }
}
