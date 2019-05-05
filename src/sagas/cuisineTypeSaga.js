import { call, put, select, takeLatest } from 'redux-saga/effects';

function* cuisineTypeTask(action) {
  try {
    const { payload } = action;
    const cuisineType = ['starters', 'Main course', 'Dessert', 'Drinks'];
    yield put({
      type: 'FETCH_CUISINE_TYPE_SUCCESS',
      payload: cuisineType,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: 'FETCH_CUISINE_TYPE_ERROR',
      payload: e.data,
    });
  }
}

function* cuisineTypeSaga() {
  yield takeLatest('FETCH_CUISINE_TYPES', cuisineTypeTask);
}

export default cuisineTypeSaga;
