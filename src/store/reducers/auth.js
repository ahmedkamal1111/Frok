import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState={
    userPhone:null,
    error:null,
    loading:false,
    authRedirectPath: '/',
    redirectToReferrer:null

}

        const authStart=(state=initialState ,action)=>{
                return updateObject(state,{error:null,loading:true});
            }
        const authSuccess=(state=initialState,action)=>{
                return updateObject(state,
                    {error:null,
                     loading:false,
                     userPhone:action.userPhone,
                     redirectToReferrer:true
                    });

            }
        
        const authFail=(state=initialState,action)=>{
                    return updateObject(state,{error:action.error,loading:false });
                }

        const authLogout = (state=initialState, action) => {
                    return updateObject(state, { userPhone: null });
                };
        const setAuthRedirectPath = (state, action) => {
                    return updateObject(state, { authRedirectPath: action.path })
                }

            const reducer=(state=initialState ,action)=>{
                switch(action.type){
                    case actionTypes.AUTH_SUCCESS:return authSuccess(state=initialState,action);
                    case actionTypes.AUTH_START:return authStart(state=initialState ,action);
                    case actionTypes.AUTH_FAIL:return authFail(state=initialState,action);
                    case actionTypes.AUTH_LOGOUT:return authLogout(state=initialState,action);
                    case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
                    default:
                    return state;
                }
            }
export default reducer;