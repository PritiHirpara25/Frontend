import axios from "axios";
import { addProduct } from "./ProductSlice";
import { put, takeLatest } from "redux-saga/effects";

function* fetchProducts(){
    const response = yield axios.get('https://fake-store-api.mock.beeceptor.com/api/products');
    yield put(addProduct(response.data));
}

export default function* rootsaga(){
    yield takeLatest('product/fetchProducts',fetchProducts);
}