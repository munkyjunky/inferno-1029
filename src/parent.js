import React, { Component } from 'react';
import Child from './child';


export default class Parent extends Component {

	render () {

		if (this.props.showChild === false) {
			return (
				<div>
					<div>
						<p>magic text</p>
					</div>
				</div>
			)
		}

		return (
			<div>
				<div>
					<p>magic text</p>
					<Child />
				</div>
			</div>
		)
	}

}