import { all, fork } from 'redux-saga/effects';
import { watchImageCommands } from './imagesSaga'


export default function* rootSaga() {
    yield all([
        fork(watchImageCommands)
    ])
}