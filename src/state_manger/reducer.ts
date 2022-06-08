import { USER_LOGIN, USER_LOGOUT } from "./constants";


export let initialState = {
    user : null
}



export const reducer = (state : any , action : any)=>{
    const  {type, payload} = action;

    switch(type){
        case USER_LOGIN:
            return {
                ...state,
                user : payload
            }

        case USER_LOGOUT:
            return {
                ...state,
                user : null
            }


        default:
            return {
                ...state
            }
    }
}