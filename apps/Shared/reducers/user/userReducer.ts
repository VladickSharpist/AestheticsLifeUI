import { ICurrentUserDataResponse } from "../../api/account/currentUserData";
import { IAction } from "../../types/IAction";
import { SET_USER_DATA_FAILED, SET_USER_DATA_REQUEST, SET_USER_DATA_SUCCEEDED } from "./actions";

export interface IUserState {
  id: number;
  userName: string;
  name: string | null;
  surName: string | null;
  middleName: string | null;
  email: string;
  isUserStateLoading: boolean;
}

const userInitialValues: IUserState = {
  id: 0,
  userName: "",
  email: "",
  name: null,
  surName: null,
  middleName: null,
  isUserStateLoading: false,
}

export const user = (
  state = userInitialValues,
  action: IAction<Object>
): IUserState => {
  switch (action.type) {
    case SET_USER_DATA_REQUEST: {
      return {
        ...state,
        isUserStateLoading: true,
      }
    }
    case SET_USER_DATA_SUCCEEDED: {
      const data = action.payload as ICurrentUserDataResponse;
      return {
        ...state,
        isUserStateLoading: false,
        ...data,
      }
    }
    case SET_USER_DATA_FAILED: {
      return {
        ...state,
        isUserStateLoading: false,
      }
    }
    default : return state;
  }
}