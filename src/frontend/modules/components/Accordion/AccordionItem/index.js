import React from 'react';

class AccordionItem extends React.Component {
	constructor(props) {
		super(props);
	}

	renderPanel() {
		const { activeItem, index } = this.props;
		if (activeItem === index) {
			return (
				<div>
					<li>Item1</li>
					<li>Item2</li>
					<li>Item3</li>
					<li>Item4</li>
				</div>
			);
		}
	}

	render() {
		const { onItemClicked, index, value } = this.props;
		return (
			<div>
				<button
					onClick={() => onItemClicked(index)}
				>
					{value}
				</button>
				{this.renderPanel()}
			</div>
		);
	}
}

export default AccordionItem;