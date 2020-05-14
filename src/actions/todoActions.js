import { ADD_TODO, DELETE_TODO, MARK_COMPLETED, TODOS_LOADED } from './types';

export const addTodo = todo => dispatch => {
	dispatch({
		type: ADD_TODO,
		payload: todo,
	});
};

export const deleteTodo = id => dispatch => {
	dispatch({
		type: DELETE_TODO,
		payload: id,
	});
};

export const markComplete = todoItem => dispatch => {
	const { id, isCompleted, todo } = todoItem;
	const updatedTodo = {
		id,
		todo,
		isCompleted: !isCompleted,
	};
	dispatch({
		type: MARK_COMPLETED,
		payload: updatedTodo,
	});
};

export const loadTodos = () => dispatch => dispatch({ type: TODOS_LOADED });
