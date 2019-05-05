import { call, put, select, takeLatest } from 'redux-saga/effects';
import startersData from '../data/startersData';
import mainCourseData from '../data/mainCourseData';
import dessertData from '../data/dessertData';
import drinksData from '../data/drinkData';


function* restaurantTask(action) {
  const { payload } = action;
  const actionType = payload.isFromCuisine ? 'FETCH_CUISINE_RESTAURANT_' : 'FETCH_RESTAURANT_TYPE_';
  console.log('restaurantdata', startersData);
  console.log('payload type', payload.type);
  const orderType = payload.type;
  let restaurantData = null;
  if (orderType === 'starters') {
    restaurantData = startersData;
  } else if (orderType === 'Main course') {
    restaurantData = mainCourseData;
  } else if (orderType === 'Dessert') {
    restaurantData = dessertData;
  } else if (orderType === 'Drinks') {
    restaurantData = drinksData;
  }
  try {
    yield put({
      type: `${actionType}SUCCESS`,
      payload: restaurantData,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: `${actionType}ERROR`,
      payload: e.data,
    });
  }
}

function* restaurantByTypeSaga() {
  yield takeLatest('FETCH_RESTAURANT_TYPE', restaurantTask);
}

export default restaurantByTypeSaga;
