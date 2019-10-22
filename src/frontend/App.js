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
		this.state = { propsAccordionContainer: null, getActiveItem: null }
	}

	componentDidMount() {
		this.setState({
			propsAccordionContainer: this.Accordion.current.setActiveItem,
			getActiveItem: this.Accordion.current.getActiveItem,
		});
	}

	renderItems(item, index) {
		return <AccordionItem
			key={index}
			index={index}
			value={item.name}
			setActiveItem={this.state.propsAccordionContainer}
			getActiveItem={this.state.getActiveItem}
		/>;
	}

	render() {
		return (
			<AccordionContainer ref={this.Accordion}>
				{MOCKED_ITEMS.map(this.renderItems)}
			</AccordionContainer>
		);
	}
}

export default App;