import React from 'react';

export default class AccordionContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { activeItem: null };
		this.setActiveItem = this.setActiveItem.bind(this);
		this.getActiveItem = this.getActiveItem.bind(this);
	}
	
	setActiveItem(value) {
		this.setState({ activeItem: value });
	}

	getActiveItem() {
		return this.state.activeItem;
	}

	render() {
		return (
			<div className='accordion-container'>
				{this.props.children}
			</div>
		);
	}
}