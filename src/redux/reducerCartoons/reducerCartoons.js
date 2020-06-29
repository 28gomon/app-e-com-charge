import {DATA_INFO_PAGES, DRAWER_CLEAR, DRAWER_DATA, LOAD_POSTS} from "../actionType/actionType";

const URL_API = `https://rickandmortyapi.com/api/character`;


// getCartoonsPageDispatch
export function dataInfoPages(pages) {
    return {
        type: DATA_INFO_PAGES,
        pages
    }
}

// loadPostsDispatch
export function loadPosts(data) {
    return {
        type: LOAD_POSTS,
        data
    }
}

// drawerDispatch
export function drawerData(postDrawer) {
    return {
        type: DRAWER_DATA,
        drawer: true,
        postDrawer
    }
}

// drawerUpdate
export function drawerClear() {
    return {
        type: DRAWER_CLEAR,
        drawer: false
    }
}

export function getCartoonsPageDispatch() {
    // return {
    //     type: DATA_INFO_PAGES
    // }
    return async dispatch => {

        const response = await fetch(URL_API);
        const data = await response.json();

        let pages = [];

        for (let i = 0; i < data.info.pages; i++) {
            pages.push(i + 1);
        }

        dispatch({type: DATA_INFO_PAGES, pages: pages})
        // dispatch(dataInfoPages(pages));
    }
}

export function loadPostsDispatch(number = 1) {
    return async dispatch => {

        const response = await fetch(`${URL_API}?page=${number}`);
        const data = await response.json();

        dispatch(loadPosts(data.results));

        window.scrollTo(0, 0);
    }
}

export function drawerDispatch(id) {
    return async dispatch => {

        const response = await fetch(`${URL_API}/${id}`);
        const data = await response.json();

        dispatch(drawerData(data));
    }
}

export function drawerUpdate() {
    return dispatch => {

        dispatch(drawerClear());
    }
}