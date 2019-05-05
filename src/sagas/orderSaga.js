import { call, put, select, takeLatest } from 'redux-saga/effects';


const authTokenSelector = state => state.auth.loginMessage.token;
const userIdSelector = state => state.auth.loginMessage.userId;

function* orderFetchTask(action) {
  try {
    const { payload } = action;
    const authToken = yield select(authTokenSelector);
    const userId = yield select(userIdSelector);
    // Here write logic to upload server
    // TODO
  } catch (e) {
    console.log(e);
    yield put({
      type: 'FETCH_ORDERS_ERROR',
      payload: e.data,
    });
  }
}

function* orderSaga() {
  yield takeLatest('FETCH_ORDERS', orderFetchTask);
}

export default orderSaga;
