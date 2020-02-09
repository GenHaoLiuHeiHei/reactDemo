import { textCenter } from './../state'
import { type } from '../action';
export default (state = textCenter, action) => {
    switch (action.type) {
        case type.MEUN_NAME:
            return {
                ...state,
                menuName: action.menuName
            }
        case type.LOGIN_NUM:
            return {
                ...state,
                isLogged: action.isLogged
            }
        default:
            return {...state};  
    }
}