import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const {Types, Creators} = createActions({
  loadRequest: null,
  loadTodoTasks: ['tasks'],
  loadInProgressTasks: ['tasks'],
  loadDoneTasks: ['tasks'],
  loadFailure: null,
  updateTask: ['task', 'state'],
  createTask: ['title', 'description'],
  deleteTask: ['id'],
});

export const TasksTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  todoTasks: [],
  inProgressTasks: [],
  doneTasks: [],
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_TODO_TASKS]: (state, {tasks}) => state.merge({todoTasks: tasks}),
  [Types.LOAD_IN_PROGRESS_TASKS]: (state, {tasks}) =>
    state.merge({inProgressTasks: tasks}),
  [Types.LOAD_DONE_TASKS]: (state, {tasks}) => state.merge({doneTasks: tasks}),
});
