import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Parent from './parent';

class App extends Component {

	constructor (props) {
		super(props);

		this._toggle = this._toggle.bind(this);

		this.state = {
			show: true
		}
	}

	_toggle () {
		this.setState({
			show: !this.state.show
		})
	}

	render () {
		return (
			<div>
				<h1>Hello World</h1>
				<button onClick={this._toggle}>TOGGLE</button>
				<Parent showChild={this.state.show}/>
			</div>
		)
	}

}

const app = React.createElement(App);
const container = document.querySelector('.container');
ReactDOM.render(app, container);