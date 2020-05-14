import React from 'react';
import './bootstrap.min.css'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import store from './store';
import Home from './components/home/Home';
import { About } from './components/home/About';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<NavBar />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
