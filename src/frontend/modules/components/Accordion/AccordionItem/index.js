import React from 'react';

class AccordionItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isPanelVisible: false };
	}

	updatePanelStatus() {
		this.props.setActiveItem(this.props.index);
		this.renderPanel();
	}

	setActiveItem() {
	}

	renderPanel() {
		debugger
		if (this.props.index === this.props.getActiveItem()) {
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
		console.log(this.props)
		return (
			<div>
				<button
					onClick={() => this.updatePanelStatus(!this.state.isPanelVisible)}
				>
					{this.props.value}
				</button>
			</div>
		);
	}
}

export default AccordionItem;