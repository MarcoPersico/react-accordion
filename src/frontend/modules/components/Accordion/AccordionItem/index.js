import React from 'react';

class AccordionItem extends React.Component {
	constructor(props) {
		super(props);
	}

	renderPanel() {
		if (this.props.clickedItem === this.props.index) {
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

	openItem() {
		this.props.onItemSelected(this.props.index);
		this.props.onSelectionChange(this.props.index);
	}

	render() {
		return (
			<div>
				<button
					onClick={() => this.openItem()}
				>
					{this.props.value}
				</button>
				{this.renderPanel()}
			</div>
		);
	}
}

export default AccordionItem;