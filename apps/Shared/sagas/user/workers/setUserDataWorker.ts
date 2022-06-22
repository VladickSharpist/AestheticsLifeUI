import { call, put } from "redux-saga/effects";
import { api } from "../../../api";
import { ICurrentUserDataResponse } from "../../../api/account/currentUserData";
import { setUserDataFailed, setUserDataSucceded } from "../../../reducers/user/actions";

export function* setUserDataWorker() {
  try {
    const response: ICurrentUserDataResponse = yield call(api.account.currentUserData);
    yield put(setUserDataSucceded(response));
  } catch (e) {
    yield put(setUserDataFailed());
  }
}