import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar nav navbar-dark bg-dark">
			<Link to='/' className="navbar-brand">
				<h1>Todo App</h1>
			</Link>
			<ul className="navbar-nav nav justify-content-end">
				<li className="nav-item">
					<Link to='/about' className="nav-link" >About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
