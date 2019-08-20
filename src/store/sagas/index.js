import {all, takeLatest} from 'redux-saga/effects';

import {TasksTypes} from '../ducks/tasks';

import {load, updateTask, createTask, deleteTask} from './tasks';

export default function* rootSaga() {
  return yield all([
    takeLatest(TasksTypes.LOAD_REQUEST, load),
    takeLatest(TasksTypes.UPDATE_TASK, updateTask),
    takeLatest(TasksTypes.CREATE_TASK, createTask),
    takeLatest(TasksTypes.DELETE_TASK, deleteTask),
  ]);
}
