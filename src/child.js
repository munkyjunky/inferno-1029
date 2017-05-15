import React, { Component } from 'react';

export default class Child extends Component {

	componentWillUnmount () {
		/*
		* When <Parent /> includes the <p> magic text <p> then when unmounting
		* componentWillUnmount will be called after the DOM node has been removed
		* from the DOM. In apps that need to unbind some 3rd party library this means
		* there is no more element which can be used to unbind - although this.element
		* is still set at the point.
		*
		* When removing the <p>magic text</p> element this function is called BEFORE
		* the node is removed from the DOM.
		* */
	}

	render () {
		return (
			<div ref={element => this.element = element} style={{ background: 'red' }}>
				child
			</div>
		)
	}

}