import {call, put} from 'redux-saga/effects';
import { ToastAndroid } from "react-native";

import TasksActions from '../ducks/tasks';

import api from '../../services/api';

export function* load() {
  try {
    const response = yield call(api.get, 'todos');
    const todoTasks = response.data.filter(task => task.state === 'todo');
    const inProgressTasks = response.data.filter(
      task => task.state === 'inprogress',
    );
    const doneTasks = response.data.filter(task => task.state === 'done');

    yield put(TasksActions.loadTodoTasks(todoTasks));
    yield put(TasksActions.loadInProgressTasks(inProgressTasks));
    yield put(TasksActions.loadDoneTasks(doneTasks));
  } catch (error) {
    yield put(TasksActions.loadFailure());
  }
}

export function* updateTask({task, state}) {
  const apiPut = async () => {
    await api.put(`/todos/${task.id}`, {
      title: task.title,
      description: task.description,
      state: state,
    });
  };
  yield call(apiPut);
  yield call(load);
  ToastAndroid.showWithGravity(`Task Updated`, ToastAndroid.LONG, ToastAndroid.CENTER);
}

export function* createTask({title, description}) {
  const apiPost = async () => {
    await api.post('/todos', {
      title,
      description,
      state: 'todo',
    });
  };
  yield call(apiPost);
  yield call(load);
  ToastAndroid.showWithGravity(`Task Created`, ToastAndroid.LONG, ToastAndroid.CENTER);
}

export function* deleteTask({id}) {
  const apiDelete = async () => {
    await api.delete(`/todos/${id}`);
  };
  yield call(apiDelete);
  yield call(load);
  ToastAndroid.showWithGravity(`Task Deleted`, ToastAndroid.LONG, ToastAndroid.CENTER);
}
