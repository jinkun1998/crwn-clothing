import { createReducerAction } from "../../utils/reducer.utils";
import { USER_ACTION_TYPE } from "./user.reducer";

export const setCurrentUser = (user) => createReducerAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)