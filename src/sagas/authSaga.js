import { call, put, takeLatest } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';


function* loginTask(action) {
  try {
    yield put({
      type: 'AUTH_LOGIN_LOADING',
    });
    const { payload } = action;
    const data = {
      success: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ',
    };

    if (payload.email.length > 0 && payload.password.length > 0) {
      yield put({
        type: 'AUTH_LOGIN_SUCCESS',
        payload: data,
      });
    }
  } catch (e) {
    console.log(e);
    const payload = typeof e === 'string' ? { message: e } : e.data;
    yield put({
      type: 'AUTH_LOGIN_ERROR',
      payload,
    });
  }
}

function* logoutTask() {
  try {
    storage.removeItem('authToken');
    yield put({
      type: 'AUTH_LOGOUT_RESET',
    });
  } catch (e) {
    yield put({
      type: 'AUTH_LOGOUT_RESET',
    });
  }
}

function* authSaga() {
  yield takeLatest('AUTH_LOGIN', loginTask);
  yield takeLatest('AUTH_LOGOUT', logoutTask);
}

export default authSaga;
