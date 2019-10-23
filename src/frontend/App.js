import React from 'react';

// Components
import { AccordionContainer, AccordionItem } from './modules/components/Accordion';

const MOCKED_ITEMS = [
	{
		"name": "item1"
	},
	{
		"name": "item2"
	},
	{
		"name": "item3"
	}
]

class App extends React.Component {
	constructor(props) {
		super(props);

		this.Accordion = React.createRef();
		this.renderItems = this.renderItems.bind(this);
		this.updateComponent = this.updateComponent.bind(this);
		this.state = { showSelectedItem: null, getActiveItem: null }
	}

	componentDidMount() {
		this.setState({
			showSelectedItem: this.Accordion.current.showSelectedItem,
		});
	}

	renderItems(item, index) {
		return <AccordionItem
			key={index}
			index={index}
			value={item.name}
			onItemSelected={this.state.showSelectedItem}
			clickedItem={this.state.clickedItem}
			onSelectionChange={this.updateComponent}
		/>;
	}

	updateComponent(value) {
		this.setState({ clickedItem: value })
	}

	render() {
		console.log(this.state.clickedItem)
		return (
			<AccordionContainer ref={this.Accordion}>
				{MOCKED_ITEMS.map(this.renderItems)}
			</AccordionContainer>
		);
	}
}

export default App;