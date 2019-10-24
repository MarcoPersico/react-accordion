import React from 'react';

// Components
import { AccordionContainer, AccordionItem } from './modules/components/Accordion';

const MOCKED_ITEMS = [
	{
		"name": "item1",
		"id": 1
	},
	{
		"name": "item2",
		"id": 2
	},
	{
		"name": "item3",
		"id": 3
	}
]

class App extends React.Component {
	constructor(props) {
		super(props);

	}

	renderItems(item, index) {
		return <AccordionItem
			key={item.id}
			index={index}
			value={item.name}
		/>;
	}

	render() {
		return (
			<AccordionContainer>
				{MOCKED_ITEMS.map(this.renderItems)}
			</AccordionContainer>
		);
	}
}

export default App;