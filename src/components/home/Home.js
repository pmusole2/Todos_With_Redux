import React, { useEffect } from 'react';
import AddTodo from '../add_todos/AddTodo';
import TodoList from '../todos/TodoList';
import { connect } from 'react-redux';
import { loadTodos } from '../../actions/todoActions';

const Home = ({ loadTodos }) => {
	useEffect(() => {
		loadTodos();
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default connect(null, { loadTodos })(Home);
