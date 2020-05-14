import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, markComplete } from '../../actions/todoActions';

const TodoItem = ({ todos, deleteTodo, markComplete }) => {
	const { todo, id, isCompleted } = todos;
	return (
		<Fragment>
			<ul className='list-group'>
				<li className='list-group-item p-1'>
					<p className='p-0 m-0'>
						<span
							style={{
								textDecoration: isCompleted ? 'line-through' : 'none',
								color: isCompleted ? 'gray' : 'black',
							}}
						>
							{todo}
						</span>
						{'   '}
						{isCompleted ? (
							<span
								onClick={() => markComplete(todos)}
								className='badge badge-success btn'
							>
								Complete
							</span>
						) : (
							<span
								onClick={() => markComplete(todos)}
								className='badge badge-dark btn'
							>
								Pending
							</span>
						)}{' '}
						<span
							onClick={() => deleteTodo(id)}
							className='btn btn-outline-none float-right'
						>
							<i className='fas fa-trash text-danger'></i>
						</span>
					</p>
				</li>
			</ul>
		</Fragment>
	);
};

export default connect(null, { deleteTodo, markComplete })(TodoItem);
