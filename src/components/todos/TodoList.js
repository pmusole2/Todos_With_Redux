import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todos: { todos, loading } }) => {
	return (
		<div>
			<h1>Todos</h1>
			{todos.length < 1 ? (
				<Fragment>
					<h3>You have no items in your Todo List. Please add a todo</h3>
				</Fragment>
			) : (
				todos.map(todo => <TodoItem key={todo.id} todos={todo} />)
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
