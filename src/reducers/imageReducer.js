import { GET_IMAGES, SET_IMAGES, VIEW_IMAGE, CLEAR_IMAGE } from '../constants/actionTypes';

const initialState = {
    images: [],
    selectedImage: {}
}

export default function imageReducer(state=initialState, action) {
    const { type, data } = action;
    switch(type) {
        case GET_IMAGES:
        case SET_IMAGES:
            return {
                ...state,
                images: {
                    data
                }
            };
        case VIEW_IMAGE:
            return {
                ...state,
                selectedImage: {
                    ...data
                }
            }
        case CLEAR_IMAGE:
            return {
                ...state,
                selectedImage: {}
            }
        default: {
            return state;
        }
    }
}