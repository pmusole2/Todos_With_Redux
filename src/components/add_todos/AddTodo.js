import React, { useState } from 'react';
import { addTodo } from '../../actions/todoActions';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

const AddTodo = ({ addTodo }) => {
	const [todo, setTodo] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		const newTodo = {
			id: uuid(),
			todo: todo,
			isCompleted: false,
		};
		addTodo(newTodo);
		setTodo('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='card mt-4 mb-4'>
				<div className='card-body'>
					<div className='form-group'>
						<h3>Add Todo</h3>
						<input
							className='form-control'
							type='text'
							value={todo}
							onChange={e => setTodo(e.target.value)}
							name='todo'
							placeholder='Add a new Todo'
							required
						/>
					</div>
					<button className='btn btn-primary btn-block'>Add Todo</button>
				</div>
			</div>
		</form>
	);
};

export default connect(null, { addTodo })(AddTodo);
