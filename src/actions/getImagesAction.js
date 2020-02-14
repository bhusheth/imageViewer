import { GET_IMAGES, SET_IMAGES } from '../constants/actionTypes';

export const getImgaes = () => ({
    type: GET_IMAGES
})

export const setImgaes = (data) => ({
    type: SET_IMAGES,
    data
})