import { all, fork } from 'redux-saga/effects';
import { userSagaWatcher } from './Shared/sagas/user';

function* rootSaga () {
  yield all([
    fork(userSagaWatcher),
  ]);
}

export { rootSaga };