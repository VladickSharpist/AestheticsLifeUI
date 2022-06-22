import { all, takeLatest } from "redux-saga/effects";
import { SET_USER_DATA_REQUEST } from "../../reducers/user/actions";
import { setUserDataWorker } from "./workers/setUserDataWorker";

export function* userSagaWatcher () {
  yield all([
    takeLatest(SET_USER_DATA_REQUEST, setUserDataWorker),
  ]);
}