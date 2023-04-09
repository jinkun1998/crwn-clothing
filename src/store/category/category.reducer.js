const INIT_CATEGORY = {
    categories: []
}

export const CATEGORIES_ACTION_TYPE = {
    SET_CATEGORIES: "cateories/SET_CATEGORIES"
}

export const categoriesReducer = (state = INIT_CATEGORY, action) => {
    const { type, payload } = action
    switch (type) {
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
            return { ...state, categories: payload }
        default:
            return state
    }
}