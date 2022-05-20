import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';
import {
  recieveProjects,
  finishLoading,
  ACTION_TYPES,
} from '../store/actions';

import { fetchProjects } from '../api';
import repos from './repos';

function* getApiProjects() {
  const localProjects = localStorage.getItem('localProjects');
  if (!localProjects) {
    try {
      const data = yield call(() => fetchProjects(repos));
      yield put(recieveProjects(data));
      yield localStorage.setItem('localProjects', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }
  const data = JSON.parse(localStorage.localProjects);
  yield put(recieveProjects(data));
}

function* finishLoadingProjects() {
  yield put(finishLoading());
}

export default function* mySaga() {
  yield takeEvery(ACTION_TYPES.START_LOADING, getApiProjects);
  yield takeEvery(ACTION_TYPES.RECEIVE_PROJECTS, finishLoadingProjects);
}
