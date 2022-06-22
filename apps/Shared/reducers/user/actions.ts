import { actionCreator } from "../../utils/actionCreator";

export const SET_USER_DATA_REQUEST = 'user/SET_USER_DATA_REQUEST';
export const setUserData = actionCreator(SET_USER_DATA_REQUEST);

export const SET_USER_DATA_SUCCEEDED = 'user/SET_USER_DATA_SUCCEEDED';
export const setUserDataSucceded = actionCreator(SET_USER_DATA_SUCCEEDED);

export const SET_USER_DATA_FAILED = 'user/SET_USER_DATA_FAILED';
export const setUserDataFailed = actionCreator(SET_USER_DATA_FAILED);