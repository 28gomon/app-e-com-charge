import {takeEvery, call, put} from "redux-saga/effects";
import {DATA_INFO_PAGES, REQUESTS_CARTOONS_PAGE} from "./actionType/actionType";

const URL_API = `https://rickandmortyapi.com/api/character`;

export function* sagaApp() {

    yield takeEvery(REQUESTS_CARTOONS_PAGE, sagaWorker)
}

function* sagaWorker() {
    try {
        const count = yield call(fetchCartoons);
        yield put({type: DATA_INFO_PAGES, count});
    } catch (e) {
        console.log(e)
    }
}

async function fetchCartoons() {
    const response = await fetch(URL_API);
    const data = await response.json();

    return data.info.pages;
}