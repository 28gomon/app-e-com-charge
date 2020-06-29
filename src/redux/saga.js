import {takeEvery, call, put} from "redux-saga/effects";
import {DATA_INFO_PAGES, REQUESTS_CARTOONS} from "./actionType/actionType";
import {dataInfoPages} from "./reducerCartoons/reducerCartoons";

const URL_API = `https://rickandmortyapi.com/api/character`;

export function* sagaApp() {

    yield takeEvery(REQUESTS_CARTOONS, sagaWorker)
}

function* sagaWorker() {
    try {
        const payload = yield call(fetchCartoons);
        yield put({type: DATA_INFO_PAGES, payload});
    } catch (e) {
        console.log(e)
    }
}

async function fetchCartoons() {
    const response = await fetch(URL_API);
    const data = await response.json();

    let pages = [];

    for (let i = 0; i < data.info.pages; i++) {
        pages.push(i + 1);
    }
    dataInfoPages(pages);
}