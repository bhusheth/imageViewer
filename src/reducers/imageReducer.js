import { GET_IMAGES, SET_IMAGES } from '../constants/actionTypes';

export default function imageReducer(state=[], action) {
    const { type, data } = action;
    switch(type) {
        case GET_IMAGES:
        case SET_IMAGES:
            return {
                ...state,
                data
            };
        default: {
            return state;
        }
    }
}