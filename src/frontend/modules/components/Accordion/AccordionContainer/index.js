import React from 'react';

export default class AccordionContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { selectedItem: null }
		this.setSelectedItem = this.setSelectedItem.bind(this);
	}

	setSelectedItem(value) {
		this.setState({ selectedItem: value })
	}

	render() {
		const children = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
				onItemClicked: this.setSelectedItem,
				activeItem: this.state.selectedItem,
			});
		});

		return (
			<div className='accordion-container'>
				{children}
			</div>
		);
	}
}