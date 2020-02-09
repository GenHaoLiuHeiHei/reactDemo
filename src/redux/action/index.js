export const type = {
    MEUN_NAME: 'MEUN_NAME',
    LOGIN_NUM: 'LOGIN_NUM',
}
export function menuTypeName (menuName) {
    return {
        type: type.MEUN_NAME,
        menuName
    }
}
export function loginContent (isLogged) {
    return {
        type: type.LOGIN_NUM,
        isLogged
    }
}