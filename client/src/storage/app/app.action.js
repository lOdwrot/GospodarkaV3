import { SET_USER_ROLE } from "./app.const";

export const setUserRole = (role) => ({
    type: SET_USER_ROLE,
    payload: role
})