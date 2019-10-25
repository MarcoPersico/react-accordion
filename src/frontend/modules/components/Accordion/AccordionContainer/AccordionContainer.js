import React from 'react';

// Styles
import './AccordionContainer.scss';

/**
 * This class is the AccordionContainer component will manage which 
 * Child is visible and keeping only the child active
 */
class AccordionContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { selectedItem: null }
		this.setSelectedItem = this.setSelectedItem.bind(this);
	}

	/**
	 * This method is a callback that will set the local state 
	 * selectedItem to the active element clicked
	 *
	 * @param   {Number}  value  index from the child selected
	 *
	 */
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
			<div className='accordion-container_default'>
				{children}
			</div>
		);
	}
}

export default AccordionContainer;