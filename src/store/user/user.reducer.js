const INIT_USER = { currentUser: null }

export const USER_ACTION_TYPE = {
    SET_CURRENT_USER: "user/SET_CURRENT_USER"
}

export const userReducer = (state = INIT_USER, action) => {
    const { type, payload } = action
    switch (type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
}