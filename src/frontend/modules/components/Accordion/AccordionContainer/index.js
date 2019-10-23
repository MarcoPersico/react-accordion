import React from 'react';

export default class AccordionContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { activeItem: 999 }
		this.showSelectedItem = this.showSelectedItem.bind(this);
	}

	showSelectedItem(value) {
		this.setState({ activeItem: value });
	}

	render() {
		return (
			<div className='accordion-container'>
				{this.props.children}
			</div>
		);
	}
}