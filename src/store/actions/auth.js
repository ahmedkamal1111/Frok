import * as actionTypes from './actionTypes';
import axios from 'axios';
export const authStart=()=>{
return{
    type:actionTypes.AUTH_START
};
};

export const authSuccess=(userPhone)=>{
    return{
    type:actionTypes.AUTH_SUCCESS,
    userPhone:userPhone,    
};
};

export const authFail=(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    };
};

export const logout=()=>{
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};



export const auth=(userPhone,countryCode,userPassword,countryCodeName)=>{
    return dispatch=>{
        dispatch(authStart());
        
            userPhone=userPhone;
            countryCode=countryCode;
            userPassword=userPassword;
            countryCodeName=countryCodeName

        
        let url= "https://cors-anywhere.herokuapp.com/https://api-task1.adminssw.com/users/trainerLogin";
        axios.post(url,{userPhone,countryCode,userPassword,countryCodeName})
        .then(response=>{
            console.log(response);
            dispatch(authSuccess(response.data.trainerData.userPhone));
        
        })
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};