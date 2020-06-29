import {DATA_INFO_PAGES, DRAWER_CLEAR, DRAWER_DATA, LOAD_POSTS} from "./actionType/actionType";

const initialState = {
    cartoons: [],
    data: [],
    drawer: false,
    postDrawer: []
}

export function reducer(state = initialState, action) {

    switch (action.type) {

        case DATA_INFO_PAGES:
            return {
                ...state, cartoons: action.pages
            }

        case LOAD_POSTS:
            return {
                ...state, data: action.data
            }

        case DRAWER_DATA:
            return {
                ...state, drawer: action.drawer, postDrawer: action.postDrawer
            }

        case DRAWER_CLEAR:
            return {
                ...state, postDrawer: [], drawer: action.drawer
            }

        default:
            return state;
    }
}