import { call, put, takeEvery } from 'redux-saga/effects';
import { setImgaes } from '../actions/getImagesAction';
import { GET_IMAGES } from '../constants/actionTypes';

export default function* getAllImages() {

    const response = yield call(fetch, 'https://picsum.photos/v2/list');
    const responseBody = yield response.json();
    
    yield put(setImgaes(responseBody));
}

export function* watchImageCommands() {
    yield takeEvery(GET_IMAGES, getAllImages)
}