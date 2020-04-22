import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Victor from './Victor';

class App extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			name: 'Victor'
		}

		this.changeState = this.changeState.bind(this);
		this.resetState = this.resetState.bind(this);
	}

	changeState() {
		this.setState({ name: 'Victor Mota' });
	}

	resetState() {
		this.setState({ name: 'Victor' });
	}

	render() {
		return (
			<div className="App">
				<div>
					{ this.state.name }
				</div>
				<button onClick = { this.changeState }> Mudar Estado </button>
				<button onClick = { this.resetState }> Reset Estado </button>
			</div>	 
		);
	}
}

export default App;