import { CATEGORIES_ACTION_TYPE } from "./category.reducer";
import { createReducerAction } from "../../utils/reducer.utils"

export const setCategories = (categories) => createReducerAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories)