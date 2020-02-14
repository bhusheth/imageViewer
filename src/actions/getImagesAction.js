import { GET_IMAGES, SET_IMAGES, VIEW_IMAGE, CLEAR_IMAGE, ADD_IMAGE } from '../constants/actionTypes';

export const getImgaes = () => ({
    type: GET_IMAGES
})

export const setImages = (data) => ({
    type: SET_IMAGES,
    data
})

export const viewImage = (data) => ({
    type: VIEW_IMAGE,
    data
})

export const clearImage = () => ({
    type: CLEAR_IMAGE
})

export const addImage = (data) => ({
    type: ADD_IMAGE,
    data
})