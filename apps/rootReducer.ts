import { combineReducers } from "redux";
import { user } from "./Shared/reducers/user";

const rootReducer =  combineReducers({
  user,
});

type TRootState = ReturnType<typeof rootReducer>;

export { rootReducer, TRootState };